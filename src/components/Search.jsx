import { useContext, useEffect } from "react"
import Navbar from "./Navbar"
import mainpageContext from "../context/MainPageContext"


const Search = () => {
    const {searchText, searchMovie, fetchSearch,}=useContext(mainpageContext)

useEffect(()=>{
fetchSearch('movie', searchText)
fetchSearch('tv', searchText)
fetchSearch('person', searchText)
console.log(searchMovie);
}, [searchText])


 

  return (
    <div className=" pt-32">
        <div className="grid grid-cols-5 ml-16">
        {searchMovie.map(item =>(
          item.backdrop_path && (
            <img  key={item.backdrop_path} className='
       py-5
       h-34 w-60 pr-2 opacity-100
       transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110
       ' src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" />
          )
       
      ))}
      </div>  
    </div>
  )
}

export default Search