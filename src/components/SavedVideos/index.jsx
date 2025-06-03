import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineSave} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  SavedVideosMainContainer,
  SavedVideosContent,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  VideoList,
  VideoCard,
  Thumbnail,
  VideoInfo,
  Title,
  ChannelName,
  VideoMeta,
  HeaderSection,
  IconWrapper,
  PageHeading,
} from './styledcomponent'

const SavedVideos = () => {
  const {isDarkTheme} = useContext(ThemeContext)
  const {savedVideosList = []} = useContext(SavedVideosContext)

  const renderContent = () => {
    if (savedVideosList.length === 0) {
      return (
        <NoVideosContainer>
          <NoVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosHeading>No saved videos found</NoVideosHeading>
          <NoVideosDescription>
            You can save your videos while watching them
          </NoVideosDescription>
        </NoVideosContainer>
      )
    }

    return (
      <VideoList>
        {savedVideosList.map(video => (
          <VideoCard key={video.id}>
            <Link to={`/videos/${video.id}`}>
              <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />
            </Link>
            <VideoInfo>
              <Title>{video.title}</Title>
              <ChannelName>{video.channel.name}</ChannelName>
              <VideoMeta>
                {video.viewCount} views • {video.publishedAt}
              </VideoMeta>
            </VideoInfo>
          </VideoCard>
        ))}
      </VideoList>
    )
  }

  return (
    <SavedVideosMainContainer isDarkTheme={isDarkTheme}>
      <HeaderSection isDarkTheme={isDarkTheme}>
        <IconWrapper isDarkTheme={isDarkTheme}>
          <HiOutlineSave size={25} color="#ff0b37" />
        </IconWrapper>
        <PageHeading isDarkTheme={isDarkTheme}>Saved Videos</PageHeading>
      </HeaderSection>
      <SavedVideosContent>{renderContent()}</SavedVideosContent>
    </SavedVideosMainContainer>
  )
}

export default SavedVideos
