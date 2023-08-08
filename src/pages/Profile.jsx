import { useContext, useEffect, } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import mainpageContext from '../context/MainPageContext';
import { useNavigate} from 'react-router-dom'
import Loading from '../components/Loading';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {

  const nav = useNavigate()
  
  const {addProfile, handleProfile, setAddProfle, 
    profiles, handleProfileText, getProfiles,  profileName, loading} = useContext(mainpageContext)

    useEffect(() => {
      getProfiles()
      window.localStorage.setItem('profiles', JSON.stringify(profiles))
    
    }, [profileName])

    const handleNav =(name) =>{
      window.localStorage.setItem('profileName', JSON.stringify(name))
     
      }

  

     
    
  if(loading){
    return <Loading/>
  }else{

   return (
    <div className='bg-black h-screen 
    flex items-center justify-center text-white'>
        <ToastContainer />
    {addProfile ? (
      <div>
      <h1 className='text-4xl mb-2'>Add Profile</h1>
      <p className='text-xs text-gray-500'>
        Add a profile for another person watching Netflix
        </p>
      <hr className='my-4  border-gray-700' />
      <div className='flex'>
      <img className="
        w-20 h-20 rounded
        " src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        <input type="text" name="text" placeholder='name'
         className='h-6 mt-7 ml-4 p-2 rounded bg-gray-700 hover:border-none
          focus:outline-none focus:border-none w-56'
          onChange={handleProfileText}/>
      </div>
      <hr className='my-4  border-gray-700'/>
      <div>
        <button className='bg-white text-black text-sm w-24 px-2 py-1
        mr-4 hover:bg-red-700 hover:text-white'
        onClick={handleProfile}>Continue</button>

        <button className='bg-transparent text-gray-500 text-sm w-20 px-2 py-1
        border border-gray-700 hover:text-white hover:border-white'
        onClick={ () =>{
          setAddProfle(false)
        }}>Cancel</button>
      </div>
      </div>
    ) 
    
    : (
      
        <div className=''>
            <h1 className='text-3xl text-center'>Who Is Watching?</h1>
            <div className='text-center flex flex-wrap justify-center' >
              {profiles && profiles.map(item =>(
                <div className='flex flex-col mt-4 text-gray-500 hover:text-gray-200 ' 
                key={item.name} >
                  <div className=' hover:bg-gray-400 sm:mx-4 mx-3 mb-2'>
                  <img className="hover:border-2 rounded h-40 w-40 sm:h-52 sm:w-52 object-contain"
                  src={item.img} alt="" onClick={()=>{
                    handleNav(item.name)
                    nav(`${item.name}` == 'Kids' ? '/kids' : '/mainpage')
}}/>
                  </div>
                  <p className='font-medium'>{item.name}</p>
                </div>
              ))}

              <div className='text-gray-500 hover:text-gray-200'>
              <div  onClick={() =>{
              setAddProfle(true)
            }} className='hover:bg-gray-400 flex justify-center
            items-center mt-4 mx-3 sm:mx-4 mb-2 h-40 w-40 sm:h-52 sm:w-52 '>
              <FaPlusCircle className='w-16 h-16 object-fill'/>
            </div>
            <p className='font-medium'>Add Profile</p>
              </div>
            
            </div>
    </div>
    )}
    
    </div>)}
}

export default Profile