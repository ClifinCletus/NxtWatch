import styled from 'styled-components'

export const PageContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const ContentWrapper = styled.div`
  display: flex;
`

export const VideoContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`

export const VideoTitle = styled.h1`
  font-size: 22px;
  margin: 20px 0 10px 0;
`

export const VideoMetaData = styled.p`
  color: #64748b;
  font-size: 14px;
  margin: 0;
`

export const ControlsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  flex-wrap: wrap;
`

export const ControlButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  font-weight: ${props => (props.active ? '600' : '400')};
  margin-right: 12px;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    opacity: 0.7;
  }
`

export const ChannelSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`

export const ChannelLogo = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 15px;
  border-radius: 50%;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 4px 0;
    color: #64748b;
    font-size: 14px;
  }
`

export const Description = styled.p`
  margin-top: 16px;
  color: #475569;
  line-height: 1.5;
  font-size: 15px;
`

export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`

export const FailureView = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;

  img {
    width: 300px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  p {
    font-size: 15px;
    color: #7e858e;
    text-align: center;
  }
`

export const RetryButton = styled.button`
  margin-top: 12px;
  padding: 8px 20px;
  background-color: #2563eb;
  color: #ffffff;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`
