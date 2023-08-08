import { useContext, useRef, useState } from 'react'
import '../css/SignIn.css'
import {Link, useNavigate} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import mainpageContext from '../context/MainPageContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../components/Loading';

const SignIn = () => {
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

const nav = useNavigate()

const clicked = (e) => {
  e.preventDefault()
setLoading(true)
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      toast.success('sign In successfull')
      const user = userCredential.user;
      setTimeout(()=>{
        nav('/profile')
      }, 2000) 
    })
    .catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage);
    });
   
  setLoading(false)
}
return  loading ? <Loading/> :

  (
   
    <div className="bg h-screen bg-black">
       <ToastContainer />
        <div className='font-bold '>
            <h1 className='text p-4 text-2xl sm:text-5xl'>NETFLIX</h1>
        </div>

        <div className='signin-div 
        sm:pl-12 pl-4 py-8 h-auto m-auto
        '>
            <h1 className='text-white font-bold text-4xl my-10'>Sign In</h1>
       
        
        <div className='text-white'>
          <form>
          <input type="email" name='email' ref={emailRef} value={email}
        onChange={onchange} className='p-4 my-5 sm:my-3 h-12 
        rounded sm:mx-auto bg-white
           sm:bg-gray-500 w-80 sm:w-96' placeholder='Enter Email' />
          
        <input type="password" name='password' ref={passwordRef} value={password} 
        onChange={onchange} className='p-4 my-5 sm:my-3 h-12 rounded
          sm:mx-auto bg-white
           sm:bg-gray-500 w-80 sm:w-96' placeholder='Enter Password' />
    
       
        
        <button onClick={clicked} className=' my-5 sm:my-3 h-12 rounded  sm:mx-auto 
           input w-80 sm:w-96 font-bold text-white text-lg p-3 bg-red-700'>Sign In</button>
          </form>
        
        </div>

        <div className='mt-10 sm:mt-16 flex sm:flex-row sm:text-2xl text-xl'>
            <p className='
            text-gray-500 sm:mr-3
            '>New to Netflix? </p>
           
                <Link to='/' className='text-white' >Sign up now.</Link>
        </div>
        </div>
        </div>
        
  )

}

export default SignIn