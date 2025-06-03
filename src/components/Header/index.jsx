import {useContext, useState} from 'react'
import {FiSun, FiMoon} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Actions,
  ThemeToggleBtn,
  ProfileImg,
  LogoutBtn,
  LogoutPopup,
  PopupButtons,
} from './styledcomponent'

const Header = () => {
  const {isDarkTheme, toggleTheme} = useContext(ThemeContext)
  const [showLogoutPopup, setShowLogoutPopup] = useState(false)

  const logoUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  const themeIcon = isDarkTheme ? <FiMoon /> : <FiSun />

  const handleConfirmLogout = props => {
    const {history} = props
    setShowLogoutPopup(false)
    history.push('./login')
  }

  return (
    <HeaderContainer dark={isDarkTheme}>
      <HeaderContent>
        <Link to="/">
          <Logo src={logoUrl} alt="website logo" />
        </Link>

        <Actions>
          <ThemeToggleBtn onClick={toggleTheme} dark={isDarkTheme}>
            {themeIcon}
          </ThemeToggleBtn>

          <ProfileImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />

          <LogoutBtn onClick={() => setShowLogoutPopup(true)}>Logout</LogoutBtn>
        </Actions>
      </HeaderContent>

      {showLogoutPopup && (
        <LogoutPopup dark={isDarkTheme}>
          <p>Are you sure you want to logout?</p>
          <PopupButtons>
            <button type="button" onClick={() => setShowLogoutPopup(false)}>
              Cancel
            </button>
            <button type="button" onClick={handleConfirmLogout}>
              Confirm
            </button>
          </PopupButtons>
        </LogoutPopup>
      )}
    </HeaderContainer>
  )
}

export default Header
