import { useContext, useEffect, useState } from "react";
import {FaSearch} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import mainpageContext from "../context/MainPageContext";
import { getAuth, signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {

  const [show, setShow] = useState(false)
  
const {
  searchText,
  showSearch,
  hideSearch,
  showsearch,
  handleClick ,
  handleChange,
  profiles,
  getProfiles
} = useContext(mainpageContext)


 const transNav = ()=>{
  if(window.scrollY > 100){
    setShow(true)
  }else{
    setShow(false)
  }
 }

 useEffect(()=>{
  window.addEventListener('scroll',transNav)
  return ()=>{
    window.removeEventListener('scroll',transNav)
  }
  
 }, [])

useEffect(()=>{
  getProfiles()
 
}, [])
 const location = useLocation();

 

const Active = (path) =>{
  return location.pathname === path ?
  'font-bold active:bg-white focus:outline-none' : '';
}

const nav = useNavigate()
const navigate = ()=>{
  nav('/mainpage')
 }

const navToKids = () =>{
 nav('/kids')
}

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

    <nav className="fixed left-0 top-0 z-10  ">
      <ToastContainer />
    <div className={`bg-gradient-to-b from-black to-transperate  ${show && 'bg-black'} w-screen 
    fixed flex text-white justify-between ease-in transition-all del
    p-5`}>
    <div className="flex gap-2">
      <div className="mr-10 hidden sm:block"><Link to='/mainpage' className="
      text-3xl font-bold
      text">NETFLIX</Link></div>

<Link to='/mainpage' className="sm:hidden">
    {/* <img src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
     alt="" className="w-20 -ml-4" /> */}
     <h1 className="text-red-800 text-4xl font-extrabold">N</h1>
</Link>


      <div className="hidden sm:block">
        <ul className="flex gap-3 items-center mt-2 text-lg">
          <li className={Active('/mainpage')}><Link to='/mainpage'
          className="hiddenhover:text-gray-400 hover:duration-300 ease-in
           delay-100"
          >Home</Link></li>

          <li className={Active('/tvshow')}><Link to='/tvshows'
          className="hover:text-gray-400 hover:duration-300 ease-in
           delay-100"
          >TV Shows</Link></li>

          <li className={Active('/movies')}><Link to='/movies'
          className="hover:text-gray-400 hover:duration-300 ease-in
           delay-100"
          >Movies</Link ></li>

          <li className={Active('/mylist')}><Link to='/mylist'
          className="hover:text-gray-400 hover:duration-300 ease-in
           delay-100"
          >My List</Link></li>

         
        </ul>
      </div>
    </div>

    <div className="flex gap-10 items-center">

     {showSearch && (<div>
    <div>
      <input type="text" placeholder='Search for a show, movie.'
      className="bg-gray-600 w-screen h-10 p-2 pl-10 relative text-lg 
      font-bold focus:outline-none" value={searchText}
       onChange={handleChange}/>
  </div>
      
      <div onClick={hideSearch} className="absolute text-xl m-2 top-6"><FaSearch/></div>
     { 
     searchText !== '' && (<div className="absolute right-48 text-xl m-1 top-6 font-bold">
     <button onClick={handleClick}>X</button> </div>)
     } 
      </div>) }
      
     {!showSearch && (
         <button onClick={showsearch} className="text-2xl"><FaSearch/></button>
     )}
      

     <div className="hidden sm:block text-xl">
      <Link className="hover:text-gray-400 hover:duration-300 ease-in
           delay-100" to='/kids' >Kids</Link>
     </div>
      
      <div className="relative group">
    
      <Link >
        <img className="w-10 h-10 rounded mr-2" 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
    </Link>
    
      <div className="bg-black border-spacing-4 w-60 rounded h-auto hidden absolute right-0 sm:group-hover:block">
      {profiles && (
          profiles.map(item=>(
          <div onClick={item.name !== 'Kids' ? navigate : navToKids } key={item.name} 
          className="flex ml-3 hover:underline">
            <div className="mt-3">
            <img className="w-16 h-full mx-2 rounded" src={item.img} alt="item.name" />
            </div>
            <h4 className="text-2xl mt-5 ">{item.name}</h4>
          </div>
          ))
        )}
        <hr className=" mt-7" />
        <div className=" mt-7 flex flex-col justify-between">
        <div className="mb-2 ml-3">
        <Link to='/profile' className="hover:underline text-2xl">Manage Profiles</Link>
        </div>
        <hr className="mt-3" />
        <div className="ml-3 mt-3 mb-3">
        <button className="hover:underline text-2xl" onClick={HandleSignOut}>Sign Out</button>
        </div>
        
        </div>
        
        
      </div>
      </div>
      </div>
     </div>

     <div className="sm:hidden mt-24 ml-5">
        <ul className="flex gap-10 items-center mt-2 font-bold text-white text-2xl">
          

          <li className={Active('/tvshow')}><Link to='/tvshows'
          className="hover:text-gray-400 hover:duration-300 ease-in
           delay-100"
          >TV Shows</Link></li>

          <li className={Active('/movies')}><Link to='/movies'
          className="hover:text-gray-400 hover:duration-300 ease-in
           delay-100"
          >Movies</Link ></li>

          <li className={Active('/mylist')}><Link to='/mylist'
          className="hover:text-gray-400 hover:duration-300 ease-in
           delay-100"
          >My List</Link></li>

         
        </ul>
      </div>
     
      
    
    </nav>  )
}

export default Navbar