import {HiFire, HiHome, HiOutlineSave} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {useContext} from 'react'
import {useLocation} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  SidebarContainer,
  SidebarItem,
  SidebarList,
  SidebarLink,
  ContactContainer,
  ContactText,
  SocialIcons,
  ContactNote,
} from './styledcomponent'

const Sidebar = () => {
  const location = useLocation()
  const {pathname} = location
  const {isDarkTheme} = useContext(ThemeContext)

  return (
    <SidebarContainer isDarkTheme={isDarkTheme}>
      <div>
        <SidebarList>
          <SidebarItem active={pathname === '/'} isDarkTheme={isDarkTheme}>
            <SidebarLink to="/">
              <HiHome size={20} /> Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem
            active={pathname === '/trending'}
            isDarkTheme={isDarkTheme}
          >
            <SidebarLink to="/trending">
              <HiFire size={20} /> Trending
            </SidebarLink>
          </SidebarItem>
          <SidebarItem
            active={pathname === '/gaming'}
            isDarkTheme={isDarkTheme}
          >
            <SidebarLink to="/gaming">
              <SiYoutubegaming size={20} /> Gaming
            </SidebarLink>
          </SidebarItem>
          <SidebarItem
            active={pathname === '/saved-videos'}
            isDarkTheme={isDarkTheme}
          >
            <SidebarLink to="/saved-videos">
              <HiOutlineSave size={20} /> Saved Videos
            </SidebarLink>
          </SidebarItem>
        </SidebarList>
      </div>
      <ContactContainer>
        <ContactText isDarkTheme={isDarkTheme}>CONTACT US</ContactText>
        <SocialIcons>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
            width="25"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
            width="25"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linkedin logo"
            width="25"
          />
        </SocialIcons>
        <ContactNote isDarkTheme={isDarkTheme}>
          Enjoy! Now you can see your channels and recommendations!
        </ContactNote>
      </ContactContainer>
    </SidebarContainer>
  )
}

export default Sidebar
