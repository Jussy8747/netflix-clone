import { useContext, useEffect} from "react";
import {FaSearch} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import mainpageContext from "../context/MainPageContext";
import Loading from "../components/Loading";

const MyList = () => {


  // const [show, setShow] = useState(false)
const {
  searchText,
  showSearch,
  hideSearch,
  showsearch,
  handleClick ,
  handleChange,
  profiles,
  getMyList,
  mylist,
  loading
} = useContext(mainpageContext)


//  const transNav = ()=>{
//   if(window.scrollY > 100){
//     setShow(true)
//   }else{
//     setShow(false)
//   }
//  }

 useEffect(()=>{
 getMyList()
 console.log(mylist);
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


  return (
  
    <div className='bg-black h-full'> 
        <nav className="fixed left-0 top-0 z-10 ">
    <div className={`bg-black w-screen 
    fixed flex text-white justify-between ease-in transition-all del
    p-5`}>
    <div className="flex gap-2">
      <div className="mr-10 fon"><Link to='/mainpage' className="
      text-3xl font-bold
      text">NETFLIX</Link></div>
      <div>
        <ul className="flex gap-3 items-center mt-2 text-lg">
          <li className={Active('/mainpage')}><Link to='/mainpage'
          className="hover:text-gray-400 hover:duration-300 ease-in
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
      <Link className="hover:text-gray-400 hover:duration-300 ease-in
           delay-100" to='/kids' >Kids</Link>
     </div>
      
      <div className="relative group">
      <div>
      <button>
        <img className="
        w-10 h-10 rounded
        " src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
    </button>
      </div>
      <div className="bg-black border-spacing-4 w-40 h-52 hidden absolute right-0 group-hover:block">
      {profiles && (
          profiles.map(item=>(
          <div onClick={item.name !== 'Kids' ? navigate : navToKids } key={item.name} className="flex fle-col hover:underline">
            <div className="mt-3">
            <img className="w-8 h-full mx-2 rounded" src={item.img} alt="item.name" />
            </div>
            <h4 className="text-sm mt-5 ">{item.name}</h4>
          </div>
          ))
        )}
        <hr className=" mt-4" />
        <div className="ml-3 mt-3">
        <div className="mb-3">
        <Link to='/profile' className="hover:underline">Manage Profiles</Link>
        </div>
        <div className="">
        <button className="hover:underline">Sign Out</button>
        </div>
        </div>
     </div>
      </div>
     </div>
      </div>
    </nav>  
    {loading ? <Loading/> : (
      <div className="mt-8 bg-black h-screen">
      <h1 className="text-white pt-20 pl-10 text-3xl pb-28">My List</h1>
      
      {mylist == [] ? (
        <h1 className="text-white">No Item In Your List Yet</h1>
      ) : (
      <div className="flex flex-wrap pl-12 gap-3">
               
               {mylist.filter(movie => movie.backdrop_path !== null).map(item =>(
                 <div key={item.name} className="w-60 h-32 mb-20">
                   <img className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" 
                   src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" />
                  
                 </div>
               ))}
             </div>
      )}
      
      </div>
    )}

       
    </div>
  )
}

export default MyList