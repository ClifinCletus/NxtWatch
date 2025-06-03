import styled from 'styled-components'

export const SavedVideosMainContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const SavedVideosContent = styled.div`
  display: flex;
`

export const NoVideosContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`

export const NoVideosImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`

export const NoVideosHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`

export const NoVideosDescription = styled.p`
  font-size: 16px;
  color: #7e858e;
`

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ebebeb')};
`

export const IconWrapper = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#d7dfe9')};
  padding: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`

export const PageHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 24px;
  margin: 0;
`

export const VideoList = styled.ul`
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`

export const VideoCard = styled.li`
  display: flex;
  gap: 15px;
  width:100vw;
  height:20vh;
`

export const Thumbnail = styled.img`
  width: 280px;
  height: 160px;
  border-radius: 8px;
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const ChannelName = styled.p`
  margin: 5px 0;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#64748b')};
`

export const VideoMeta = styled.p`
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#64748b')};
`
