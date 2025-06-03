import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  display: ${({show}) => (show ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
`

export const BannerLeft = styled.div`
  max-width: 600px;
`

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 10px;
`

export const BannerCloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  data-testid: close;
`

export const SearchBar = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  width: 40%;
  height:30px;
`

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-right: none;
  border-radius: 5px 0 0 5px;
  outline: none;
  
`

export const SearchButton = styled.button`
  background-color: #cccccc;
  padding: 10px 15px;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`

export const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`

export const VideoThumbnail = styled.img`
  width: 100%;
`

export const VideoCard = styled.div`
  width: 300px;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#0f0f0f' : '#ffffff')};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.02);
  }
`
export const VideoInfo = styled.div`
  padding: 10px;
  h4 {
    margin: 0;
    font-size: 16px;
    color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  }
  p {
    margin: 4px 0;
    font-size: 14px;
    color: ${({isDarkTheme}) => (isDarkTheme ? '#cccccc' : '#606060')};
  }
`

export const FailureView = styled.div`
  text-align: center;
  padding: 40px;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`

export const Failimg = styled.img`
width:200px;
`
