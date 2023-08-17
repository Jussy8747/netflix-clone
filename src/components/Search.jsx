import { useContext, useEffect, useState } from "react"
import mainpageContext from "../context/MainPageContext"
import { FaPlay} from "react-icons/fa"
import { Link } from "react-router-dom"


const Search = () => {
  const [trending, setTrending] = useState()
    const {searchText, searchMovie, fetchSearch, setMovieDetails}=useContext(mainpageContext)
    const API_KEY = import.meta.env.VITE_API_KEY

    const topSearch = async()=>{
      const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`)
      const  data = await res.json()
      setTrending([...data.results])
      
    }


useEffect(()=>{
fetchSearch('movie', searchText)
fetchSearch('tv', searchText)
fetchSearch('person', searchText)
topSearch()
}, [searchText])

 

  return (
    <>
    {searchText == '' ? (
    <div className="mt-36 ml-3 ">
      <h1 className="text-white text-3xl pb-4">Top Searches</h1>
      {trending && trending.map(item => (
        item.backdrop_path && (
          <Link  key={item.backdrop_path}  to={`/video`}>
            <div  className="pb-2 flex justify-between items-center"
            onClick={()=>setMovieDetails(item)}>
              <img  
          className='h-34 w-44 rounded
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110
            ' src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" />
            <h2 className="text-white w-32">
              {item?.title || item?.name || item?.original_name}
              </h2>
                <div className="text-white bg-transparent w-7 h-7 border
                 border-gray-200 rounded-full flex justify-center items-center mr-2">
                  <FaPlay className="text-sm"/>
                </div>
          </div>
          </Link>
          
        
        )
      ))}
    </div>
    ) : (
      <div className="h-screen pt-32">
        <div className="flex flex-wrap">
        {searchMovie?.map(item =>(
          <Link key={item.backdrop_path}  to={`/video`}>
             {item.backdrop_path && (
            <div className="h-36 w-32">
            <img   className='h-full w-full pr-1 shrink-0 
              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" 
              onClick={()=>setMovieDetails(item)}/>
            </div>
            )}
              
          </Link>
      ))}
      </div>  
    </div>
    )}
    
    </> )
}

export default Search