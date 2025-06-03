import {useEffect, useState, useContext} from 'react'
import Cookies from 'js-cookie'
import {Circles} from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
/* import FailureView from '../FailureView' */
import VideoCard from '../VideoCard'

import {
  TrendingContainer,
  LoaderContainer,
  HeadingContainer,
  FireEmoji,
  FireIcon,
  Heading,
  VideosList,
} from './styledcomponent'

const Trending = () => {
  const {isDarkTheme} = useContext(ThemeContext)
  const [apiStatus, setApiStatus] = useState('LOADING')
  const [videosList, setVideosList] = useState([])

  const getTrendingVideos = async () => {
    setApiStatus('LOADING')
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedVideos = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channelName: video.channel.name,
        views: video.view_count,
        publishedAt: video.published_at,
      }))
      setVideosList(updatedVideos)
      setApiStatus('SUCCESS')
    } else {
      setApiStatus('FAILURE')
    }
  }

  useEffect(() => {
    getTrendingVideos()
  }, [])

  const renderLoading = () => (
    <LoaderContainer>
      <Circles color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  const renderFailure = () => (
    /* <FailureView onRetry={getTrendingVideos} /> */
    <h1> failure view</h1>
  )

  const renderSuccess = () => (
    <>
      <HeadingContainer theme={{isDarkTheme}}>
        <FireIcon>
          <FireEmoji>🔥</FireEmoji>
        </FireIcon>
        <Heading theme={{isDarkTheme}}>Trending</Heading>
      </HeadingContainer>
      <VideosList>
        {videosList.map(video => (
          <VideoCard key={video.id} videoDetails={video} />
        ))}
      </VideosList>
    </>
  )

  const renderContent = () => {
    switch (apiStatus) {
      case 'LOADING':
        return renderLoading()
      case 'SUCCESS':
        return renderSuccess()
      case 'FAILURE':
        return renderFailure()
      default:
        return null
    }
  }

  return (
    <TrendingContainer data-testid="trending" theme={{isDarkTheme}}>
      {renderContent()}
    </TrendingContainer>
  )
}

export default Trending
