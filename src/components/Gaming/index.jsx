import {useEffect, useState, useContext} from 'react'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import {Circles} from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import {
  GamingContainer,
  GamingHeader,
  GamingIconHeading,
  GamingIconWrapper,
  GamingVideoList,
  GamingThumbnailCard,
  ThumbnailImage,
  VideoTitle,
  ViewsText,
  RetryButton,
} from './styledcomponent'

const apiStatusConstants = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

const Gaming = () => {
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.INITIAL)
  const [videos, setVideos] = useState([])
  const navigate = useNavigate()
  const {isDarkTheme} = useContext(ThemeContext)

  const getGamingVideos = async () => {
    setApiStatus(apiStatusConstants.LOADING)
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
        const updatedVideos = data.videos.map(video => ({
          id: video.id,
          title: video.title,
          thumbnailUrl: video.thumbnail_url,
          viewCount: video.view_count,
        }))
        setVideos(updatedVideos)
        setApiStatus(apiStatusConstants.SUCCESS)
      } else {
        setApiStatus(apiStatusConstants.FAILURE)
      }
    } catch (error) {
      setApiStatus(apiStatusConstants.FAILURE)
    }
  }

  useEffect(() => {
    getGamingVideos()
  }, [])

  const onRetry = () => {
    getGamingVideos()
  }

  const handleVideoClick = id => {
    navigate(`/videos/${id}`)
  }

  const failureImg = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

  const renderGamingVideos = () => (
    <GamingVideoList>
      {videos.map(video => (
        <GamingThumbnailCard
          key={video.id}
          onClick={() => handleVideoClick(video.id)}
        >
          <ThumbnailImage src={video.thumbnailUrl} alt={video.title} />
          <VideoTitle isDarkTheme={isDarkTheme}>{video.title}</VideoTitle>
          <ViewsText>{video.viewCount} Watching Worldwide</ViewsText>
        </GamingThumbnailCard>
      ))}
    </GamingVideoList>
  )

  const renderSwitch = () => {
    switch (apiStatus) {
      case apiStatusConstants.LOADING:
        return (
          <div className="loader-container" data-testid="loader">
            <Circles color="#ffffff" height="50" width="50" />
          </div>
        )
      case apiStatusConstants.SUCCESS:
        return renderGamingVideos()
      case apiStatusConstants.FAILURE:
        return (
          <>
            <img src={failureImg} alt="failure view" />
            <h1>Ooops! Something went wrong</h1>
            <p>
              We are having some trouble completing your request. Please try
              again.
            </p>
            <RetryButton onClick={onRetry}>Retry</RetryButton>
          </>
        )
      default:
        return null
    }
  }

  return (
    <GamingContainer data-testid="gaming" isDarkTheme={isDarkTheme}>
      <GamingHeader isDarkTheme={isDarkTheme}>
        <GamingIconWrapper>
          <GamingIconHeading />
        </GamingIconWrapper>
        <h1>Gaming</h1>
      </GamingHeader>
      {renderSwitch()}
    </GamingContainer>
  )
}

export default Gaming
