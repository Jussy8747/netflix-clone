import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import { addDoc, collection, documentId, getDocs } from 'firebase/firestore';
import { db } from "../Firebase.config";
import { getAuth } from "firebase/auth";
import {  doc, query, where,} from 'firebase/firestore'
import 'react-toastify/dist/ReactToastify.css';



const mainpageContext = createContext()

export const MainPageContextProvider = ({children}) =>{

  const API_KEY = import.meta.env.VITE_API_KEY

const [movie, setMovie] = useState([])
const [loading, setLoading] = useState(false)
const [searchMovie, setSearchMovie] = useState([])
const [searchText, setSearchText] = useState('')
const [showSearch, setShowSearch] = useState(false)
const [addProfile, setAddProfle] = useState(false)
const [profileData, setProfileData] = useState('')
const [profiles, setProfiles] = useState([])
const [profileName, setProfileName] = useState('')
const [mylist, setMylist] = useState([])
const [hovermovieItem, setHovermovieItem]=useState(null)
const [ishovered, setIshovered] = useState(false);





// create new user

useEffect(()=>{
    const profilename = window.localStorage.getItem('profileName')
    profilename !== null && setProfileName(JSON.parse(profilename))
    
},[])


const fetchMovie = async (item)=>{
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3${item}`)
    .then(res =>{
        setMovie(res.data.results.filter(item => item.backdrop_path !== null)[
            Math.floor(Math.random()*res.data.results.length-1)
        ])
        
    })
    .catch(error =>{
        console.log(error);
    })
   setLoading(false)
    }

const fetchSearch = async (media, text)=>{
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3/search/${media}?api_key=${API_KEY}&query=${text}`)
    .then(res =>{
        setSearchMovie(prev =>{
            return [...prev, ...res.data.results]
        })
        console.log(res.data.results);
    })
    .catch(err =>{
        console.log(err);
    })
    setLoading(false)
}


const handleProfile = async ()=>{
    
    const auth = getAuth();
    try {
        if(auth.currentUser.uid){
            addDoc(collection(db, 'profiles'), {
                ...profileData,
                uid: auth.currentUser.uid,
                userRef: auth.currentUser.uid,
            })
          
            setAddProfle(false)
            getProfiles()
        }
    } catch (error) {
        console.log(error);
    }
   
}


const getProfiles = async ()=>{
    setLoading(true)
const profileRef = collection(db, 'profiles')
const auth = getAuth()
                     
try {
    const docSnap = await getDocs(profileRef);
    
    const items = []
      docSnap.forEach((doc) => {
       
   if( auth.currentUser.uid === doc.data().uid){
  
    items.push(doc.data())  
   }
      })
        setProfiles(items)
       


} catch (error) {
    console.log(error);   
}     
setLoading(false)    
}


const handleProfileText = (e)=>{
    setProfileData({
        name: e.target.value,
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
    })
}


const handleChange = (e) =>{
    setSearchText(e.target.value)
    }
    
    const handleClick = () =>{
      setSearchText('')
      setShowSearch(false)
    }
    
    const showsearch = () =>{
      setShowSearch(true)
    }
    
    const hideSearch = () =>{
      setShowSearch(false)
    }
    


    const addToList =async(e)=>{
      
        e.preventDefault()
        const auth = getAuth()
       let documentId
        try {
            const parentCollectionRef = collection(db, 'profiles');
            const parentQuery = query(parentCollectionRef, where('name', '==', profileName));
            const parentSnapshot = await getDocs(parentQuery);
            if (!parentSnapshot.empty) {
                parentSnapshot.forEach((docSnapshot) => {

                    if(auth.currentUser.uid == docSnapshot.data().userRef){
                        documentId = docSnapshot.id;  
                        console.log(docSnapshot.id);
                    }
                });
              } 
console.log(documentId);
              const docRef = doc(db, 'profiles', documentId,)
              const myListCollectionRef = collection(docRef, 'myList')

              if(auth.currentUser.uid ){
                addDoc(myListCollectionRef, {
                    ...movie,
                    itemRef: documentId
                })
  .then((docRef) => {
    console.log('New item added to the list with ID:', docRef.id);
  })
  .catch((error) => {
    console.error('Error adding item to the list:', error);
  });
              }
            

        } catch (error) {
          console.log(error);  
        }
       
    }


const getMyList = async ()=>{
    setLoading(true)
    const auth = getAuth()
    let documentId
    const parentCollectionRef = collection(db, 'profiles');
    const parentQuery = query(parentCollectionRef, where('name', '==', profileName));
    const parentSnapshot = await getDocs(parentQuery);
    if (!parentSnapshot.empty) {
        parentSnapshot.forEach((docSnapshot) => {

            if(auth.currentUser.uid == docSnapshot.data().userRef){
                documentId = docSnapshot.id;  
                console.log(docSnapshot.id);
            }
        });
      } 
    

    console.log(documentId);
    const colRef = collection(db, 'profiles')
    const docRef = doc(colRef, documentId)
    const subColRef = collection(docRef, 'myList')

                     
try {
    const docSnap = await getDocs(subColRef);
    
    const items = []
      docSnap.forEach((doc) => {
       
   if( documentId === doc.data().itemRef){
  
    items.push(doc.data())  
   }
      })
        setMylist(items)
        console.log(items);
} catch(error){
    console.log(error);
}
setLoading(false)
}

return <mainpageContext.Provider value={{
fetchMovie,
movie,

setLoading,
loading,
Request,
searchMovie,
fetchSearch,
searchText,
showSearch,
hideSearch,
showsearch,
handleClick ,
handleChange,
handleProfile,
addProfile,
setAddProfle,
profileData,
setProfileData,
onchange,
handleProfileText,
profiles,
getProfiles,
setProfileName,
profileName,
addToList,
getMyList,
mylist,
ishovered,
setIshovered,
hovermovieItem,
setHovermovieItem
}}>
    {children}
</mainpageContext.Provider>
}

export default mainpageContext