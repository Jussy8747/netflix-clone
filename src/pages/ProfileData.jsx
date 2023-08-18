import { useContext, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import mainpageContext from "../context/MainPageContext"
import { FaList, FaSignOutAlt, FaUser} from "react-icons/fa"
import { getAuth, signOut } from 'firebase/auth';
import {  toast } from 'react-toastify';

const ProfileData = () => {

    const {
        profiles, 
        getProfiles
      } = useContext(mainpageContext)

      const navToKids = () =>{
        nav('/kids')
       }

       const nav = useNavigate()
const navigate = ()=>{
  nav('/mainpage')
 }
 const auth = getAuth()
 let userName = auth.currentUser.email
console.log(userName);

  useEffect(()=>{
    getProfiles()
    const auth = getAuth()
    if(!auth.currentUser){
        nav('/')
    }
  }, [])

  const HandleSignOut = async ()=>{
    const auth = getAuth();
  
  signOut(auth)
    .then(() => {
      // Sign-out successful
      toast.success('signed out')
      setTimeout(()=>{
        nav('/signin')
      },3000)
    })
    .catch((error) => {
      toast.error('Error signing out:', error);
    });
  }
  

  return (
    <div className="bg-black h-screen w-full">
        <h1 className="text-white text-3xl p-3 pt-10">Profile & More</h1>

        <div>
        {
          profiles &&  profiles.map((profile)=>(
            <div onClick={profile.name !== 'Kids' ? navigate : navToKids } key={profile.name}>
                 <div onClick={profile.name !== 'Kids' ? navigate : navToKids } key={profile.name} 
          className="flex ml-3 hover:underline">
            <div className="mt-4">
            <img className="w-20 h-20 mx-2 rounded" src={profile.img} alt="profile.name" />
            </div>
            <h2 className="text-2xl mt-5 text-white ">{profile.name}</h2>
            </div>
            </div>
            ))
        }

        <div className="text-center text-2xl text-gray-400 py-10">
            <Link to='/profile'>Manage account</Link>
        </div>

        
            <Link to='/mylist'>
            <div className="w-full h-14 bg-gray-800 flex items-center pl-4">
                <FaList className="text-2xl text-gray-400"/>
                <p className="pl-4 text-2xl text-gray-400 ">My List</p>
            </div>
            </Link>

            <div className="w-full h-14 bg-gray-800 flex items-center pl-4 my-3">
                <FaUser className="text-2xl text-gray-400"/>
                <p className="pl-4 text-2xl text-gray-400 ">Account</p>
            </div>


            <div className="w-full h-14 bg-gray-800 flex items-center pl-4">
                <FaSignOutAlt className="text-2xl text-gray-400"/>
                <p className="pl-4 text-2xl text-gray-400 "
                onClick={HandleSignOut}>
                    Sign Out</p>
            </div>
       <p className="text-white text-right text-2xl pt-5 pr-3">{userName}</p>
        </div>
    </div>
    
  )
}

export default ProfileData