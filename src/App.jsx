import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import ThemeContext from './context/ThemeContext'
import { SavedVideosProvider } from './context/SavedVideosContext'
import Login from './components/Login'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import './App.css'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const toggleTheme = () => setIsDarkTheme(prev => !prev)
  
  const renderWithLayout = Component => props => (
    <div className={`app-container ${isDarkTheme ? 'dark' : 'light'}`}>
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <Component {...props} />
        </div>
      </div>
    </div>
  )
  
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        <SavedVideosProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
           
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  {renderWithLayout(Home)()}
                </ProtectedRoute>
              }
            />
            <Route
              path="/trending"
              element={
                <ProtectedRoute>
                  {renderWithLayout(Trending)()}
                </ProtectedRoute>
              }
            />
            <Route
              path="/gaming"
              element={
                <ProtectedRoute>
                  {renderWithLayout(Gaming)()}
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-videos"
              element={
                <ProtectedRoute>
                  {renderWithLayout(SavedVideos)()}
                </ProtectedRoute>
              }
            />
            <Route
              path="/videos/:id"
              element={
                <ProtectedRoute>
                  {renderWithLayout(VideoItemDetails)()}
                </ProtectedRoute>
              }
            />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </SavedVideosProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App