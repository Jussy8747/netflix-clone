
import Home from "./pages/Home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import MainPage from "./pages/MainPage"
import MyList from "./pages/MyList"
import Movies from "./pages/Movies"
import Tvshow from "./pages/Tvshow"
import NewAndPopular from "./pages/NewAndPopular"
import Kids from "./pages/Kids"
import Profile from "./pages/Profile"
function App() {
 

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/mainpage" element={<MainPage/>}/>
        <Route path="/mylist" element={<MyList/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/tvshows" element={<Tvshow/>}/>
        <Route path="/newandpopular" element={<NewAndPopular/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>
      
    </Router>
  )
}

export default App
