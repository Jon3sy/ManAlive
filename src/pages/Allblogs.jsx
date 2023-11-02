import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Puff } from 'react-loading-icons'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const AllBlogs = () => {

const [loading, setLoading] = useState(true)

  const [blog , setBlog] = useState(null)

  const blogEndpoint = `${baseUrl}/blog?_embed`

      useEffect(()=>{
    axios.get(`${blogEndpoint}`)
    .then((res)=>{
      setBlog(res.data)
      setLoading(false)
    })
    .catch((err)=>{console.log(err)})
  },[])

function getFeaturedImage(blog) {
        if (blog && blog._embedded && blog._embedded['wp:featuredmedia'] && blog._embedded['wp:featuredmedia'][0].source_url ) {
            return blog._embedded['wp:featuredmedia'][0].source_url
        } else {
            return 'https://placehold.co/600x400'
        }
}

  const AllBlogs = ({blog}) => {
    const mappedBlogs = blog.map((blog, index) =>{
      return(
        <div key={blog.slug + "-" + index} className='blog-2'>
            <img src={getFeaturedImage(blog)} alt="blog featured Image" className='blog-2-image'/>
          <h4 className='header header-four'>{blog.title.rendered}</h4>
          <div dangerouslySetInnerHTML={{__html:blog.excerpt.rendered}} className='body-text shortened-text'/>
              <div key={blog.slug + "-" + index} id='read-button'>
                <a href={`#/blog/${blog.id}`} className='body-text' id='read-more'>Read More</a>
              </div>
        </div>
      )})
  return(
      <>
          {mappedBlogs}
      </>
    )
  }      
  return (
    <>
    <div className='blogs-wrapper'>
      {loading? <Puff stroke="#98ff98" /> : <AllBlogs blog={blog}/>}
      </div>
    </>
  )
}

export default AllBlogs
