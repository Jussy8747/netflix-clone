import { useContext, useEffect} from "react"
import { FaPlay } from "react-icons/fa"
import mainpageContext from "../context/MainPageContext"
import '../css/Home.css'

const Banner = ({banner}) => {
    const {
        fetchMovie,
        movie,
        addToList
    } = useContext(mainpageContext)

  useEffect(()=>{
    fetchMovie(banner)
  }, [banner])

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

   
   <div className=" text-white pt-40 ml-12 ">

    
    <h1 className="
    text-3xl font-bold
    ">{movie?.title || movie?.name || movie?.original_name}</h1>


    <div className="w-96 my-3">
    <h1 className="
    text-xl 
    ">{truncateString(`${movie?.overview}`, 150)}</h1>
    </div>

    <div className="flex my-3">
        <button className="bg-white w-32 text-black 
        items-center flex justify-center text-xl h-12
        rounded gap-3 hover:bg-gray-300
        hover:text-black"><FaPlay/> Play</button>
        <button onClick={addToList} className="bg-gray-500 hover:bg-gray-300
        hover:text-black w-40 text-white 
        items-center flex justify-center text-xl h-12 font-bold
        rounded gap-3 ml-3">My List</button>
    </div>
  
  
</div>
<div className="w-screen faded"></div>
   </header>
    
  )
}

export default Banner