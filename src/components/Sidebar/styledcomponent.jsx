import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#ffffff')};
  width: 220px;
  padding-top: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
top: 60px; /* Below navbar */
left: 0;
height: 100%;
  justify-content: space-between;
  border-right: 1px solid ${({isDarkTheme}) =>
    isDarkTheme ? '#383838' : '#d7dfe9'};
`

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`

export const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: ${({active, isDarkTheme}) => {
    if (active) return '#ff0b37'
    return isDarkTheme ? '#ffffff' : '#231f20'
  }};
  background-color: ${({active, isDarkTheme}) => {
    if (active) return isDarkTheme ? '#424242' : '#e2e8f0'
    return 'transparent'
  }};
  font-weight: 500;
  cursor: pointer;
`

export const SidebarLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ContactContainer = styled.div`
  padding: 20px;
`

export const ContactText = styled.p`
  font-size: 14px;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  margin-bottom: 10px;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`

export const ContactNote = styled.p`
  font-size: 12px;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#cccccc' : '#606060')};
`
