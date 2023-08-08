import { useContext } from "react"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Slides from "../components/Slides"

import mainpageContext from "../context/MainPageContext"
import Search from "../components/Search"
const MainPage = () => {


  const API_KEY = import.meta.env.VITE_API_KEY
  const Request = {
      fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
      fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_network=213`,
      fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
      fetchNewReleaseMovie: `/movie/now_playing?api_key=${API_KEY}&language=en-us`,
      fetchPopularMovie: `/movie/popular?api_key=${API_KEY}&language=en-us`,
      fetchUpcomingMovie: `/movie/upcoming?api_key=${API_KEY}&language=en-us`,
      fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
      fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
      fetchAnimationsMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
      fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
      fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
      fetchFantacyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
      fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
      fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
      fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
      fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  
      fetchPopularTv: `/tv/popular?api_key=${API_KEY}&language=en-us`,
      fetchDramaTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
      fetchActionTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
      fetchComedyTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
      fetchCrimeTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
      fetchAnimationsTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
      fetchMystreyTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
      fetchWarPoliticsTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
      fetchSciFiFantasyTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
      fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-us`,
      fetchKdrama: `/search/tv?api_key=${API_KEY}&query=K-drama&language=ko`,
  }
  const {searchText} = useContext(mainpageContext)

  return (
   
    
    <div className="bg-black h-full pb-4 overflow-hidden">

      <Navbar/>
    {searchText !== '' ? <Search/> : (
      <>
      <Banner banner={Request.fetchTrending}/>

      <Slides title='Only on Netflix' url={Request.fetchNetflixOriginal} />
      {/* <Slides title='Top Rated Tv Show' url={Request.fetchTopRated} />
      <Slides title='Popular movies' url={Request.fetchPopularMovie} />
      <Slides title='Top Rated Movies' url={Request.fetchTopRatedMovies} />
      <Slides title='Upcoming Movies' url={Request.fetchUpcomingMovie} />
      
     
      <Slides title='New Release movies' url={Request.fetchNewReleaseMovie} />
      <Slides title='Popular Tv Shows' url={Request.fetchPopularTv} />
      <Slides title='Action Tv Shows' url={Request.fetchActionTvShows} /> */}
      </>)}
    
    </div>
    )
}

export default MainPage