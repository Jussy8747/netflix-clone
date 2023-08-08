
import { useEffect, useRef, useState} from 'react';
import '../css/slides.scss'
import axios from 'axios';
import Loading from './Loading';


const Slides = ({title, url, page}) => {

  const [movieItems, setMovieItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [showLeftSlide, setShowLeftSlide] = useState(false)

  const [slideNum, setSlideNum] = useState(0)

useEffect(()=>{
  setLoading(true)
  const fetchItems = async () =>{
     const req = await axios.get(`https://api.themoviedb.org/3${url}&page=${page}`)
      setMovieItems(req.data.results)
  }
setLoading(false)
fetchItems()
}, [url])






const slideRef = useRef()

const handleClick = (side) =>{
  
  slideNum <= 1 && setShowLeftSlide(false)
if(side === 'right' && slideNum < Math.round(movieItems.length/5)){
  setSlideNum((prev)=> prev+1)
  setShowLeftSlide(true)
}
else if (side === 'left' && slideNum > 0)  setSlideNum((prev)=> prev-1)
}

    return (
      <>
{loading ? (
  <Loading/> 
) : (
  
  <div className=''>
  <h1 className='text-white font-bold ml-2 sm:ml-16 p-1 sm:p-2 pb-4 text-xl sm:text-2xl'>{title}</h1>
  <div className='flex justify-center group'>
  {showLeftSlide && <div className='hidden sm:flex justify-center items-center slideHanler left-0 
  group-hover:text-white text-8xl 
  text-transparent font-light
  ' onClick={()=>handleClick('left')}> &#8249;</div>}
   
      <div className='flex w-11/12 h-52' style={{ transform: `translateX(${slideNum * -100}%)` }}  ref={slideRef}> 
      
     {movieItems.map((item, index) =>{
      
return <img key={index} className='w-2/6 sm:w-1/5 h-44 rounded-lg shrink-0 pl-1'
style={{loading: 'lazy'}}
src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path
}`} alt="item"  />
 
   })}



     </div>
     <div className='hiddin sm:flex justify-center items-center slideHanler right-0
       group-hover:text-white text-8xl
       text-transparent font-light z-10
     ' onClick={()=>handleClick('right')}>&#8250;</div>

 
        </div>
       
 
       
     
   </div>
)}
  </> 
  )
}

export default Slides