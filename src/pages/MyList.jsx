import { useContext} from "react";
import mainpageContext from "../context/MainPageContext";
import Loading from "../components/Loading";

const MyList = () => {


const {
  mylist,
  loading
} = useContext(mainpageContext)





  return (
  
    <div className='bg-black h-full'> 
     
    {loading ? <Loading/> : (
      <div className=" bg-black h-screen">
      <h1 className="text-white pt-3 pl-10 text-3xl pb-5">My List</h1>
      
      {mylist == [] ? (
        <h1 className="text-white">No Item In Your List Yet</h1>
      ) : (
      <div className="flex flex-wrap">
               
               {mylist.filter(movie => movie.backdrop_path !== null).map(item =>(
                 <div key={item.name} className="w-32 h-48">
                   <img className="h-full w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" 
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