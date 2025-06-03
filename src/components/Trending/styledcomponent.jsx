import styled from 'styled-components'

export const TrendingContainer = styled.div`
  flex-grow: 1;
  background-color: ${({theme}) => (theme.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  color: ${({theme}) => (theme.isDarkTheme ? '#ffffff' : '#000000')};
  min-height: 100vh;
  padding: 20px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme}) => (theme.isDarkTheme ? '#181818' : '#ebebeb')};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`

export const FireIcon = styled.div`
  background-color: #ff0b37;
  padding: 12px;
  border-radius: 50%;
  margin-right: 15px;
`

export const FireEmoji = styled.span`
  color: white;
  font-size: 20px;
`

export const Heading = styled.h1`
  font-size: 24px;
  color: ${({theme}) => (theme.isDarkTheme ? '#ffffff' : '#000000')};
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
`
