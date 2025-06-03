import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
// import { MdOutlinePlaylistAdd } from "react-icons/md";
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

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.INITIAL,
    videoDetails: {},
    likeActive: false,
    dislikeActive: false,
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  fetchVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.IN_PROGRESS})
    const {match} = this.props
    const {params} = match
    const {id} = params
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
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.SUCCESS,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.FAILURE})
    }
  }

  renderContent = (theme, savedVideos = [], toggleSavedVideo) => {
    const {videoDetails, likeActive, dislikeActive} = this.state
    const isSaved = savedVideos.some(video => video.id === videoDetails?.id)

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
              onClick={() =>
                this.setState({likeActive: !likeActive, dislikeActive: false})
              }
            >
              <BiLike size={20} />
              Like
            </ControlButton>
            <ControlButton
              active={dislikeActive}
              onClick={() =>
                this.setState({
                  dislikeActive: !dislikeActive,
                  likeActive: false,
                })
              }
            >
              <BiDislike />
              Dislike
            </ControlButton>
            <ControlButton active={isSaved} onClick={onSave}>
              {isSaved ? 'Saved' : 'Save'}
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

  renderLoader = () => (
    <LoaderContainer>
      <Circles color="#2563eb" height={50} width={50} />
    </LoaderContainer>
  )

  renderFailure = theme => (
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
      <RetryButton onClick={this.fetchVideoDetails}>Retry</RetryButton>
    </FailureView>
  )

  render() {
    const {apiStatus} = this.state
    return (
      <ThemeContext.Consumer>
        {theme => (
          <SavedVideosContext.Consumer>
            {({savedVideosList, toggleSavedVideo}) => (
              <PageContainer isDark={theme.isDarkTheme}>
                <Header />
                <ContentWrapper>
                  <Sidebar />
                  {(() => {
                    switch (apiStatus) {
                      case apiStatusConstants.SUCCESS:
                        return this.renderContent(
                          theme,
                          savedVideosList || [],
                          toggleSavedVideo,
                        )
                      case apiStatusConstants.FAILURE:
                        return this.renderFailure(theme)
                      case apiStatusConstants.IN_PROGRESS:
                        return this.renderLoader()
                      default:
                        return null
                    }
                  })()}
                </ContentWrapper>
              </PageContainer>
            )}
          </SavedVideosContext.Consumer>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
