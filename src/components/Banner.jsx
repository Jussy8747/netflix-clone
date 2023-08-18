import { useContext, useEffect} from "react"
import { FaPlay, FaInfoCircle} from "react-icons/fa"
import mainpageContext from "../context/MainPageContext"
import '../css/Home.css'
import { Link } from "react-router-dom"

const Banner = ({banner}) => {
    const {
        fetchMovie,
        movie,
        addToList,
        setMovieDetails
    } = useContext(mainpageContext)

  useEffect(()=>{
    fetchMovie(banner)
  }, [])

  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + '...';
    }
    return str;
  }

  return (
  
    <header style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}")`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        
    }} className="object-contain banner">

   
   <div className="relative flex flex-col justify-end items-center h-full sm:block sm:pt-40
    text-white ">

  
    <h1 className="hidden sm:block sm:pl-12 text-3xl font-bold text-center sm:text-left">
      {movie?.title || movie?.name || movie?.original_name}
    </h1>

    


    <div className="hidden sm:block sm:ml-12 w-96 my-3">
    <h1 className="
    text-xl 
    ">{truncateString(`${movie?.overview}`, 150)}</h1>
    </div>

    <div className="hidden sm:flex sm:ml-12">
        <button className="bg-white w-32 text-black 
        items-center flex justify-center text-xl h-12
        rounded gap-3 hover:bg-gray-300
        hover:text-black"><FaPlay/> Play</button>
        <button onClick={addToList} className="bg-gray-500 hover:bg-gray-300
        hover:text-black w-40 text-white 
        items-center flex justify-center text-xl h-12 font-bold
        rounded gap-3 ml-3">My List</button>
    </div>

    <div className="flex flex-col sm:hidden absolute bottom-5 sm:ml-12">
      <div className="mb-3 w-10/12 mx-auto">
      <h1 className="text-2xl font-bold text-center ">
      {movie?.title || movie?.name || movie?.original_name}
    </h1>
      </div>
      <div className="flex gap-3">
      <div onClick={addToList} className=" bg-transparent text-white text-xl h-12
      rounded  mr-5">
          <h1 className="text-center text-4xl">+</h1> 
          <p>My list</p>
          </div>
      <button className="bg-white w-32 text-black 
        items-center flex justify-center text-xl h-12
        rounded  hover:bg-gray-300 mt-4
        hover:text-black"><FaPlay/> Play</button>
        <Link to='/video'className=" bg-transparent text-white text-xl h-12
      rounded ml-5 mt-4" onClick={()=>setMovieDetails(movie)} >
          <h1 className="ml-1 text-2xl"><FaInfoCircle/></h1> 
          <p >Info</p></Link>
      </div>
        
    </div>
  
    <div className="w-screen faded"></div>
</div>

   </header>
    
  )
}

export default Banner