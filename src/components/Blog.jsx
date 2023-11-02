import {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const baseURL = import.meta.env.VITE_WP_API_BASEURL

const Taxonomies = ({blog}) => {
    const [taxonomies, setTaxonomies] = useState([])

    useEffect(() => {
        if (!blog) {
            return
        }

        const taxonomyEndpoint = blog._links["wp:term"][0].href

        axios.get(`${taxonomyEndpoint}`)
        .then((res) => {
            console.log(res.data)
            setTaxonomies(res.data)
        })
        .catch((err) => console.log(err))
    }, [blog])

   const renderedTaxonomies = taxonomies.map((taxonomy, index) => {
        return (
            <Link to={`/genre/${taxonomy.id}`} key={index}>
                <span className='taxonomy-term-pill'>
                    {taxonomy.name}
                </span>
            </Link>
        )
   })

   return (
        <div>
            {renderedTaxonomies}
        </div>
   )
}

const Blog = () => {

    const {id} = useParams()

    const [loading, setLoading] = useState(true)

    const [blog, setBlog] = useState(null)

    const navigate = useNavigate()

    const endpoint = `${baseURL}/blog/${id}?_embed`

    useEffect(()=>{
        axios.get(`${endpoint}`)
            .then((res) => {
            setBlog(res.data)
            setLoading(false)
        })
        .catch((err) => console.log(err))
    },[id])

function getFeaturedImage(blog) {
        if (blog && blog._embedded && blog._embedded['wp:featuredmedia'] && blog._embedded['wp:featuredmedia'][0].source_url ) {
            return blog._embedded['wp:featuredmedia'][0].source_url
        } else {
            return 'https://placehold.co/600x400'
        }
}

    if (loading) {
        return <>Loading...</>
    }

  return (
    <div className='container' key={blog.slug + "-" + index}>
      <button onClick={() => navigate(-1)}> <ArrowLeft/> back</button>
      <div className='blog-container'>
        <h4 className='title'>{blog.title.rendered}</h4>
        <img src={getFeaturedImage(blog)} alt="" />
        <div dangerouslySetInnerHTML={{__html:blog.content.rendered}}/>
        <div>key: {blog.slug}</div>
      </div>
      <Taxonomies blog={blog}/>
    </div>
  )
}

export default Blog
