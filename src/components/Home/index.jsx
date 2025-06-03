import {useState, useEffect, useContext, useCallback} from 'react'
import {IoIosSearch} from 'react-icons/io'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Circles} from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  Banner,
  BannerLeft,
  Logo,
  BannerCloseButton,
  SearchBar,
  SearchButton,
  SearchInput,
  VideoCard,
  VideosContainer,
  VideoInfo,
  VideoThumbnail,
  FailureView,
  RetryButton,
  Failimg
} from './styledcomponent'

const Home = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [search, setSearch] = useState('')
  const [bannerVisible, setBannerVisible] = useState(true)
  const {isDarkTheme} = useContext(ThemeContext)

  const navigate = useNavigate()
  // Memoize fetchVideos function
  const fetchVideos = useCallback(async (searchTerm = '') => {
    setLoading(true)
    setError(false)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchTerm}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        setVideos(data.videos)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchVideos('')
  }, [fetchVideos])

  const handleSearch = useCallback(() => {
    fetchVideos(search)
  }, [search, fetchVideos])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchVideos(search)
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [search, fetchVideos])

  const navigateToVideo = id => {
    navigate(`/videos/${id}`)
  }

  const failureImg = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

  let content
  if (loading) {
    content = (
      <div data-testid="loader">
        <Circles color="#0b69ff" height={50} width={50} />
      </div>
    )
  } else if (error) {
    content = (
      <FailureView>
        <img src={failureImg} alt="failure view" />
        <h1>Ooops! Something went wrong</h1>
        <p>
          We are having some trouble completing your request. Please try again.
        </p>
        <RetryButton onClick={fetchVideos}>Retry</RetryButton>
      </FailureView>
    )
  } else if (videos.length === 0) {
    content = (
      <FailureView>
        <Failimg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <h1>No Search Results Found</h1>
        <p>Try different keywords or remove the search filter.</p>
        <RetryButton onClick={() => fetchVideos('')}>Retry</RetryButton>
      </FailureView>
    )
  } else {
    content = (
      <VideosContainer>
        {videos.map(video => (
          <VideoCard
            key={video.id}
            theme={isDarkTheme}
            onClick={() => navigateToVideo(video.id)}
          >
            <VideoThumbnail src={video.thumbnail_url} alt={video.title} />
            <VideoInfo>
              <h4>{video.title}</h4>
              <p>{video.channel.name}</p>
            </VideoInfo>
          </VideoCard>
        ))}
      </VideosContainer>
    )
  }

  return (
    <HomeContainer data-testid="home" isDarkTheme={isDarkTheme}>
      <Banner show={bannerVisible} data-testid="banner">
        <BannerLeft>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
        </BannerLeft>
        <BannerCloseButton
          theme={isDarkTheme}
          data-testid="close"
          onClick={() => setBannerVisible(false)}
        >
          X
        </BannerCloseButton>
      </Banner>

      <SearchBar>
        <SearchInput
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search"
        />
        <SearchButton onClick={handleSearch}>
          <IoIosSearch />
        </SearchButton>
      </SearchBar>

      {content}
    </HomeContainer>
  )
}

export default Home
