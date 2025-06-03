import React, {useState, useEffect} from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  toggleSavedVideo: () => {},
})

export const SavedVideosProvider = ({children}) => {
  const [savedVideosList, setSavedVideosList] = useState(() => {
    const storedVideos = localStorage.getItem('savedVideos')
    return storedVideos ? JSON.parse(storedVideos) : []
  })

  useEffect(() => {
    localStorage.setItem('savedVideos', JSON.stringify(savedVideosList))
  }, [savedVideosList])

  const toggleSavedVideo = video => {
    setSavedVideosList(prevVideos => {
      const isSaved = prevVideos.some(item => item.id === video.id)
      if (isSaved) {
        return prevVideos.filter(item => item.id !== video.id)
      }
      return [...prevVideos, video]
    })
  }

  return (
    <SavedVideosContext.Provider value={{savedVideosList, toggleSavedVideo}}>
      {children}
    </SavedVideosContext.Provider>
  )
}

export default SavedVideosContext
