import {useEffect, useState} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import {ArrowLeft} from 'react-bootstrap-icons'
import axios from 'axios'
import { Puff } from 'react-loading-icons'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const GenreName = ({genre}) => {
    return (
        <>
            <h2>All Artists in Genre:</h2>
            <h3>Genre: {genre.name}</h3>
        </>
    )
}

const AllBlogsInGenre = ({params}) => {
    const [blogs, setBlogs] = useState([])

    const endpoint = `${baseUrl}/genre/${params.id}&_embed`

    useEffect(() => {
        axios.get(`${endpoint}`)
        .then((res) => {
            setBlogs(res.data)
        })
        .catch((err) => console.log(err))
    }, [endpoint])

    const Blogs = blog.map((blog, index) => {
        return (
            <div className='blog-container item-container' key={index}>
                <Link className='blog-link' to={`/blog/${blog.id}`}>
                     <img src={blog._embedded['wp:featuredmedia']['0'].source_url} alt={blog.title.rendered} />
                    <h4 className='name'>{blog.title.rendered}</h4>
                </Link>
            </div>
        )
    })

    return (
        <>
         {Blogs}
        </>
    )
}

const BlogsViaGenres = () => {
    const [genre, setGenre] = useState({})
    const params = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    const genreEndpoint = `${baseUrl}/genre/${params.id}`

    useEffect(() => {
        axios.get(`${genreEndpoint}`)
        .then((res) => {
            setGenre(res.data)
            setLoading(false)
        })
        .catch((err) => console.log(err))
    }, [genreEndpoint])

    if (loading) {
        return 
        <div className='loader-container'>
            <Puff stroke="#98ff98" id='loader'/>
        </div>
    }

  return (
    <div id="artists-via-genre" className='page-container'>
        <button onClick={() => navigate(-1)}><ArrowLeft/>Go Back</button>
        <GenreName genre={genre}/>
        <div id="blog-grid" className='grid-container'>
            <AllBlogsInGenre params={params}/>
        </div>
    </div>
  )
}

export default BlogsViaGenres