import { Link, useNavigate } from "react-router-dom"
import '../css/SignIn.css'
import { useState, useRef, useContext } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../Firebase.config";
import { setDoc, addDoc, collection, doc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mainpageContext from "../context/MainPageContext";
import Loading from "../components/Loading";
const SignUp = () => {
  const [text, setText] = useState({
    email: '',
    password: ''
})
const {setLoading, loading}=useContext(mainpageContext)
const emailRef = useRef()
const passwordRef = useRef(null)

const onchange = ()=>{
  setText({
  ...text,
  email: emailRef.current.value,
  password: passwordRef.current.value
  })
  
  }
  
  const {email, password} = text
 
  const date = {
    timestamp: new Date()
   };
   const navigate = useNavigate()

  const onsubmit = async (e)=>{
    e.preventDefault()
    setLoading(true)
const auth = getAuth();
try {
const userCredentail = await createUserWithEmailAndPassword(auth, email, password)
const user = userCredentail.user
const data = {...text}
delete data.password
data.timestamp = date

  await setDoc(doc(db, 'users', user.uid), data)
  await addDoc(collection(db, 'profiles'), {
    name: 'Kids',
    img: 'http://occ-0-4616-3996.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcENEq3AWngawcvIFgivpRF0Wx5gW-LVuNdof8gYEbtGtft04ORrv_UDixUwcbH1PpV3k16HITdmAnDgXwneLsz2WZuyDuHk5Xpb.png',
    uid: auth.currentUser.uid,
    userRef: user.uid
  }, 'myList')
  toast.success('Account created successfully')
  setTimeout(()=>{
    navigate('/signin');
  }, 2000) 
  
} catch (error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode, errorMessage);
 toast.error(errorMessage);
}
setLoading(false)
}


  return loading ? <Loading/> :(

    <>
    <ToastContainer />
      <div className="flex justify-between  border
      p-3 sm:p-5 border-gray-300 h-24 ">
          
        <h1 className="text font-bold text-5xl">NETFLIX</h1>
        <Link to='/signin' className="text-2xl mt-2 font-bold">Sign In</Link>
      </div>


    <div className="signin-div bg-white pl-6 sm:pl-12 py-12 md:py-8 h-auto m-auto ">
      <h1 className="md:text-5xl text-3xl mb-8 font-bold">Create a password</h1>
      <form className="flex flex-col mt-16 md:mt-20">
        <input className="p-4 h-14 rounded 
           w-80 md:w-96 border border-gray-300" placeholder="Enter your Email"
            type="email" name="email" ref={emailRef} value={email}
             onChange={onchange} id="email" />
        <input className="mt-16 md:mt-8 p-4 my-3 h-14 rounded  
            w-80 md:w-96 border border-gray-300"
             type="password" name="password" onChange={onchange}
            ref={passwordRef} value={password} placeholder="Create a Password" />

<button onClick={onsubmit}className="bg-red-600 p-4 my-3 rounded 
           h-16 mt-16 md:mt-16 w-80 md:w-96  text-2xl text-white">Sign Up</button>
      </form>
    </div>

    </>
  )
}

export default SignUp