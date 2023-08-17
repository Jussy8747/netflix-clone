import { FaPlay, FaDownload } from 'react-icons/fa';
import mainpageContext from '../context/MainPageContext';
import {useContext} from 'react'
const MovieInfo = () => {

  const {movieDetails, addToList}= useContext(mainpageContext)

const {title, name, backdrop_path, poster_path, original_name, first_air_date, overview} = movieDetails
  return (
    <div className='bg-black  h-full'>
        <div style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${backdrop_path || poster_path}")`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: '350px',
        position: 'relative'
        
    }} className="object-contain banner">
            <div className='w-full flex justify-between absolute bottom-8'>
            <div className='mt-6'>
            <h1 className='bg-black text-white font-bold text-2xl z-20
            opacity-70  px-4 py-1 '>Preview</h1>

            </div>
           
              <div onClick={addToList} className=" bg-transparent text-white text-xl h-12
                 rounded  mr-5 w-16 cursor-pointer">
                  <h1 className="pl-4  text-4xl text-white">+</h1> 
                  <p>My list</p>
                </div>
            </div>
           
        </div>
        <h1 className='text-4xl font-bold text-white p-3'>
        {title || name ||original_name}
        </h1>

       <div className='flex'>
       <p className='text-xl text-gray-400 pr-8 pl-2 py-2'>{first_air_date}</p>
       
          
       </div>



        <div>
          <div className='h-14 w-full bg-white text-xl font-bold 
          flex justify-center items-center mb-3 rounded-lg'>
          <FaPlay className='mr-6'/> 
          Play
          </div>

          <div className='h-14 w-full bg-gray-600 text-xl font-bold text-white 
          flex justify-center items-center rounded-lg'>
          <FaDownload className='mr-6'/> 
          Download
          </div>
        </div>

        <div className=''>
            <p className='text-white text-lg'>{overview}</p>
        </div>
    </div>
  )
}

export default MovieInfo