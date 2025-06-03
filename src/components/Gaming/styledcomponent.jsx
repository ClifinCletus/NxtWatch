import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

export const GamingContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  padding: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const GamingHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#e2e8f0')};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;

  h1 {
    margin-left: 15px;
    font-size: 24px;
  }
`

export const GamingIconWrapper = styled.div`
  background-color: #cbd5e1;
  border-radius: 50%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GamingIconHeading = styled(SiYoutubegaming)`
  color: red;
  font-size: 24px;
`

export const GamingVideoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: none;
  padding: 0;
`

export const GamingThumbnailCard = styled.li`
  width: 220px;
  cursor: pointer;
`

export const ThumbnailImage = styled.img`
  width: 100%;
  border-radius: 6px;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0 4px;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#1e293b')};
`

export const ViewsText = styled.p`
  font-size: 14px;
  color: #64748b;
`

export const RetryButton = styled.button`
  margin-top: 20px;
  background-color: #4f46e5;
  color: white;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`
