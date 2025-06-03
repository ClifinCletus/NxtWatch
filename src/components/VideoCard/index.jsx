import {Link} from 'react-router-dom'
import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoInfo,
  VideoItem,
  Thumbnail,
  Title,
  ChannelName,
  MetaInfo,
} from './styledcomponent'

const VideoCard = ({videoDetails}) => {
  const {id, thumbnailUrl, title, channelName, views, publishedAt} =
    videoDetails
  const {isDarkTheme} = useContext(ThemeContext)

  return (
    <VideoItem theme={{isDarkTheme}}>
      <Link
        to={`/videos/${id}`}
        style={{textDecoration: 'none', width: '100%'}}
      >
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <VideoInfo>
          <Title theme={{isDarkTheme}}>{title}</Title>
          <ChannelName theme={{isDarkTheme}}>{channelName}</ChannelName>
          <MetaInfo theme={{isDarkTheme}}>
            {views} views • {publishedAt}
          </MetaInfo>
        </VideoInfo>
      </Link>
    </VideoItem>
  )
}

export default VideoCard
