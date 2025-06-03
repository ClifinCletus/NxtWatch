import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: isDarkTheme ? '#181818' : '#f9f9f9',
        color: isDarkTheme ? '#ffffff' : '#000000',
      }}
    >
      <img
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="not found"
        style={{width: '300px', marginBottom: '20px'}}
      />
      <h1>Page Not Found</h1>
      <p>we are sorry, the page you requested could not be found.</p>
    </div>
  )
}

export default NotFound
