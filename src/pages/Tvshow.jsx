
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Slides from '../components/Slides'

const Tvshow = () => {
  const API_KEY = import.meta.env.VITE_API_KEY

const Request ={
  fetchTrending: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetchPopularTv: `/tv/popular?api_key=${API_KEY}&language=en-us`,
  fetchDramaTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchActionTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
  fetchComedyTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchCrimeTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  fetchKidsTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  fetchAnimationsTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  fetchMystreyTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  fetchWarPoliticsTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
  fetchSciFiFantasyTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchKdrama: `/search/tv?api_key=${API_KEY}&query=K-drama&language=ko`,
}
 
  return (
    <div className='bg-black h-full pb-4'>
        <Navbar/>
        <Banner banner={Request.fetchTrending}/>
        <Slides title={'action Tv shows'} url={Request.fetchActionTvShows} />
        <Slides title={'Crime Tv Shows'} url={Request.fetchCrimeTvShows} />
        <Slides title={'Drama Tv Shows'} url={Request.fetchDramaTvShows} />
        <Slides title={'SciFi and Fantasy'} url={Request.fetchSciFiFantasyTvShows} />
        <Slides title={' Top Rated'} url={Request.fetchTopRated} />
        <Slides title={'Mystrey Tv Shows'} url={Request.fetchMystreyTvShows} />
        <Slides title={'Comedy'} url={Request.fetchComedyTvShows} />
        <Slides title={'Trending'} url={Request.fetchTrending} />
    </div>
  )
}

export default Tvshow