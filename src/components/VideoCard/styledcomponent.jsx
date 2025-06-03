import styled from 'styled-components'

export const VideoItem = styled.li`
  display: flex;
  flex-direction:row !important;
  margin-bottom: 24px;
  width: 100%;
  color: ${({theme}) => (theme.isDarkTheme ? '#ffffff' : '#000000')};

  @media screen and (min-width: 768px) {
    width: 48%;
    margin-right: 2%;
  }

  @media screen and (min-width: 992px) {
    width: 32%;
    margin-right: 2%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 6px 0;
  color: ${({theme}) => (theme.isDarkTheme ? '#f1f1f1' : '#1e293b')};
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: ${({theme}) => (theme.isDarkTheme ? '#94a3b8' : '#64748b')};
  margin: 4px 0;
`

export const MetaInfo = styled.p`
  font-size: 12px;
  color: ${({theme}) => (theme.isDarkTheme ? '#cbd5e1' : '#475569')};
  margin: 0;
`
