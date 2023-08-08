import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Slides from '../components/Slides'
const Movies = () => {

  const API_KEY = import.meta.env.VITE_API_KEY

  const Request ={
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
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
  }

  return (
    <div className='bg-black h-full pb-4'>
        <Navbar/>
        <Banner banner={Request.fetchTrending}/>
        <Slides title={'Actions'} url={Request.fetchActionMovies} />
        <Slides title={'Adventures'} url={Request.fetchAdventureMovies} />
        <Slides title={'Comedy'} url={Request.fetchComedyMovies} />
        <Slides title={'Horror'} url={Request.fetchHorrorMovies} />
        <Slides title={'Pupoler'} url={Request.fetchPopularMovie} />
        <Slides title={'thriller'} url={Request.fetchThrillerMovies} />
        <Slides title={'Romance'} url={Request.fetchRomanceMovies} />
        <Slides title={'Science Fiction'} url={Request.fetchScienceFictionMovies} />
        <Slides title={'fantacy'} url={Request.fetchFantacyMovies} />
        <Slides title={'Animations'} url={Request.fetchAnimationsMovies} />
    </div>
  )
}

export default Movies