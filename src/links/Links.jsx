import React from 'react'
import {Route, Routes} from 'react-router-dom'

// page imports
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import AllBlogs from '../pages/Allblogs'
import Shopfront from '../pages/Shopfront'
import Disclamer from '../pages/Disclamer'

// components imports
import Blog from '../components/Blog'
import BlogsViaGenres from '../components/BlogsViaGenre'

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/allblogs' element={<AllBlogs/>}/>
        <Route path="/blog/:id" element={<Blog/>}/>
        <Route path='/genre' element={<BlogsViaGenres/>}/>
        <Route path='/shop' element={<Shopfront/>}/>
        <Route path='/disclamer' element={<Disclamer/>}/>
    </Routes>
  )
}

export default Links
