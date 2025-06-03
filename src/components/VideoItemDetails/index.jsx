import {useState, useEffect, useContext} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useParams } from 'react-router-dom'
import {Circles} from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  PageContainer,
  ContentWrapper,
  VideoContainer,
  VideoTitle,
  VideoMetaData,
  ControlsRow,
  ControlButton,
  ChannelSection,
  ChannelLogo,
  ChannelInfo,
  Description,
  LoaderContainer,
  FailureView,
  RetryButton,
} from './styledcomponent'

const apiStatusConstants = {
  INITIAL: 'INITIAL',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  IN_PROGRESS: 'IN_PROGRESS',
}

const VideoItemDetails = () => {
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.INITIAL)
  const [videoDetails, setVideoDetails] = useState({})
  const [likeActive, setLikeActive] = useState(false)
  const [dislikeActive, setDislikeActive] = useState(false)

  const {id} = useParams()
  const theme = useContext(ThemeContext)
  const {savedVideosList, toggleSavedVideo} = useContext(SavedVideosContext)

  const fetchVideoDetails = async () => {
    setApiStatus(apiStatusConstants.IN_PROGRESS)
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const details = data.video_details
      const updatedData = {
        id: details.id,
        title: details.title,
        videoUrl: details.video_url,
        thumbnailUrl: details.thumbnail_url,
        viewCount: details.view_count,
        publishedAt: details.published_at,
        description: details.description,
        channel: {
          name: details.channel.name,
          profileImageUrl: details.channel.profile_image_url,
          subscriberCount: details?.channel?.subscriber_count || 0,
        },
      }
      setVideoDetails(updatedData)
      setApiStatus(apiStatusConstants.SUCCESS)
    } else {
      setApiStatus(apiStatusConstants.FAILURE)
    }
  }

  useEffect(() => {
    fetchVideoDetails()
  }, [])

 useEffect(() => {
  const likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || []
  const dislikedVideos = JSON.parse(localStorage.getItem('dislikedVideos')) || []

  if (likedVideos.includes(id)) {
    setLikeActive(true)
    setDislikeActive(false)
  } else if (dislikedVideos.includes(id)) {
    setDislikeActive(true)
    setLikeActive(false)
  }
}, [id])


  const renderContent = () => {
    const isSaved = savedVideosList.some(video => video.id === videoDetails?.id)

    const onSave = () => {
      toggleSavedVideo(videoDetails)
    }

    return (
      <VideoContainer isDark={theme.isDarkTheme}>
        <ReactPlayer
          url={videoDetails.videoUrl}
          controls
          width="100%"
          height="460px"
        />
        <VideoTitle>{videoDetails.title}</VideoTitle>
        <ControlsRow>
          <VideoMetaData>
            {videoDetails.viewCount} views • {videoDetails.publishedAt}
          </VideoMetaData>
          <div>
            <ControlButton
  active={likeActive}
  onClick={() => {
    const likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || []
    const dislikedVideos = JSON.parse(localStorage.getItem('dislikedVideos')) || []

    let updatedLikedVideos = likedVideos
    let updatedDislikedVideos = dislikedVideos.filter(vid => vid !== id)

    if (!likeActive) {
      updatedLikedVideos = [...likedVideos, id]
    } else {
      updatedLikedVideos = likedVideos.filter(vid => vid !== id)
    }

    localStorage.setItem('likedVideos', JSON.stringify(updatedLikedVideos))
    localStorage.setItem('dislikedVideos', JSON.stringify(updatedDislikedVideos))

    setLikeActive(!likeActive)
    setDislikeActive(false)
  }}
>
  <BiLike size={20} style={{ position: 'relative', top: '5px', paddingRight: '5px' }} />
  Like
</ControlButton>

<ControlButton
  active={dislikeActive}
  onClick={() => {
    const likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || []
    const dislikedVideos = JSON.parse(localStorage.getItem('dislikedVideos')) || []

    let updatedDislikedVideos = dislikedVideos
    let updatedLikedVideos = likedVideos.filter(vid => vid !== id)

    if (!dislikeActive) {
      updatedDislikedVideos = [...dislikedVideos, id]
    } else {
      updatedDislikedVideos = dislikedVideos.filter(vid => vid !== id)
    }

    localStorage.setItem('likedVideos', JSON.stringify(updatedLikedVideos))
    localStorage.setItem('dislikedVideos', JSON.stringify(updatedDislikedVideos))

    setDislikeActive(!dislikeActive)
    setLikeActive(false)
  }}
>
  <BiDislike size={20} style={{ position: 'relative', top: '5px', paddingRight: '5px' }} />
  Dislike
</ControlButton>

            <ControlButton active={isSaved} onClick={onSave}>
              {isSaved ? 'Saved' : <div> <span size={30} style={{ position:'relative', top: '2px', paddingRight:'5px'}}><MdOutlinePlaylistAdd/></span>Save</div>}
            </ControlButton>
          </div>
        </ControlsRow>
        <hr />
        <ChannelSection>
          <ChannelLogo
            src={videoDetails.channel.profileImageUrl}
            alt="channel logo"
          />
          <ChannelInfo>
            <p>{videoDetails.channel.name}</p>
            <p>{videoDetails.channel.subscriberCount} subscribers</p>
          </ChannelInfo>
        </ChannelSection>
        <Description>{videoDetails.description}</Description>
      </VideoContainer>
    )
  }

  const renderLoader = () => (
    <LoaderContainer>
      <Circles color="#2563eb" height={50} width={50} />
    </LoaderContainer>
  )

  const renderFailure = () => (
    <FailureView>
      <img
        src={
          theme.isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <h2>Oops! Something Went Wrong</h2>
      <p>We are having trouble fetching the video. Please try again.</p>
      <RetryButton onClick={fetchVideoDetails}>Retry</RetryButton>
    </FailureView>
  )

  return (
    <PageContainer isDark={theme.isDarkTheme}>
      <Header />
      <ContentWrapper>
        <Sidebar />
        {(() => {
          switch (apiStatus) {
            case apiStatusConstants.SUCCESS:
              return renderContent()
            case apiStatusConstants.FAILURE:
              return renderFailure()
            case apiStatusConstants.IN_PROGRESS:
              return renderLoader()
            default:
              return null
          }
        })()}
      </ContentWrapper>
    </PageContainer>
  )
}

export default VideoItemDetails