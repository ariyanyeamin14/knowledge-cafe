import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleBookmarks = () =>{
    console.log("clicked bookmark")
  }

  return (
    <>
      <Header></Header>
      <main className='w-[90%] md:w-[80%] mx-auto md:flex'>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
