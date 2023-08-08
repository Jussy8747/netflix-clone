import { useContext, useEffect, useState } from "react";
import {FaSearch} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import mainpageContext from "../context/MainPageContext";
import Search from "../components/Search";
import '../css/Home.css'
import Slides from "../components/Slides";
import Banner from "../components/Banner";



const Kids = () => {

  const [movie, setMovie] = useState(null)


  const [show, setShow] = useState(false)
  const {
    searchText,
    showSearch,
    hideSearch,
    showsearch,
    handleClick ,
    handleChange,
  } = useContext(mainpageContext)
  
  const API_KEY = import.meta.env.VITE_API_KEY
  
   const transNav = ()=>{
    if(window.scrollY > 100){
      setShow(true)
    }else{
      setShow(false)
    }
   }


   const Request = {
    KidsTrending: `/trending/tv/day?api_key=${API_KEY}&with_genres=10762&certification_country=US&certification=TV-Y`,
    Kidsmovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&certification_country=US&certification=TV-Y`
  }

  
  
   useEffect(()=>{
   
    window.addEventListener('scroll',transNav)
    return ()=>{
      window.removeEventListener('scroll',transNav)
    }

   }, [])
  
  
   const nav = useNavigate()
  
   
  
  const Active = (path) =>{
    return location.pathname === path ?
    'font-bold active:bg-white focus:outline-none' : '';
  }
  


  return (
    <div className="overflow-hidden bg-black h-full pb-4">
          <nav className="fixed left-0 top-0 z-10 ">
    <div className={`bg-gradient-to-b from-black to-transperate  ${show && 'bg-black'} w-screen 
    fixed flex text-white justify-between ease-in transition-all del
    p-5`}>
    <div className="flex gap-2">
      <div className="mr-10 fon"><Link to='/mainpage' className="
      text-3xl font-bold
      text">NETFLIX</Link></div>
      <div>
        <ul className="flex gap-5 items-center mt-2 text-xl">
          <li className={Active('/mainpage')}><Link to='/mainpage'
          className="hover:text-gray-400 hover:duration-300 ease-in
           delay-100"
          >Home</Link></li>

        

          <li className={Active('/tvshow')}><Link to='/tvshows'
          className="hover:text-gray-400 hover:duration-300  ease-in
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

    <div className="flex gap-5 items-center mr-11">

     {showSearch && (<div>
    <div>
      <input type="text" placeholder=' title, people, genres
        '  className="bg-black border border-white
      w-72 h-9 p-2 pl-10 relative text-lg font-bold" value={searchText}
       onChange={handleChange}/>
  </div>
      
      <div onClick={hideSearch} className="absolute text-xl m-1 top-6"><FaSearch/></div>
     { 
     searchText !== '' && (<div className="absolute right-48 text-xl top-6 font-bold">
     <button onClick={handleClick}>X</button> </div>)
     } 
      </div>) }
      
     {!showSearch && (
         <button onClick={showsearch} className="text-xl"><FaSearch/></button>
     )}
      

     <div className="text-xl">
      <Link to='/profile' >
        <img src="https://occ-0-7218-2706.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXWywqsWG3V9uBpjuOW_oq_KHlLqDjCkRTsKK0mILcPkwecm8MmxoSehYaIBOxIBHYT5GNFyp5BIGn-kHE8HLqwUvLxIi1o.png?r=f55"
         alt="kids" className="rounded w-8"/>
      </Link>
     </div>
      
    <button onClick={()=>{
nav('/profile')
    }} 
    className="bg-red-700 w-24 text-sm h-8 rounded hover:bg-red-900">
        Exit Kids
    </button>
     </div>
      </div>
   </nav>

   {searchText !== '' ? <Search/> : (
      <>
       <Banner banner={Request.KidsTrending}/>

      <Slides title='Hot Movies for kids' url={Request.Kidsmovies} page='2'/>
      <Slides title='Hot Movies for kids' url={Request.Kidsmovies} page='3'/>
      <Slides title='Hot Movies for kids' url={Request.Kidsmovies} page='5'/>
      <Slides title='Hot Movies for kids' url={Request.Kidsmovies} page='6'/>
      <Slides title='Hot Movies for kids' url={Request.Kidsmovies} page='7'/>
      <Slides title='Hot Movies for kids' url={Request.Kidsmovies} page='8'/>
      <Slides title=' tv shows for kids' url={Request.KidsTrending} page='4'/>
      <Slides title=' tv shows for kids' url={Request.KidsTrending} page='5'/>
      <Slides title='Hot Movies for kids' url={Request.Kidsmovies} page='9'/>
     
      </>)}
    

    </div>
  )
}

export default Kids