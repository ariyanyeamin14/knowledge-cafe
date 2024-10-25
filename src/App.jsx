import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmarks = (blog) =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = (time, id) =>{
    const newReadingTime = time + readingTime;
    setReadingTime(newReadingTime)

    const remainingBookmarks = bookmarks.filter( bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <main className='w-[90%] md:w-[80%] mx-auto md:flex pt-7 gap-6'>
        <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  )
}

export default App
