import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Taxonomies = ({blog}) => {
    const [taxonomies, setTaxonomies] = useState([])

    useEffect(() => {
        if (!blog) {
            return
        }

        const taxonomyEndpoint = blog._links["wp:term"][0].href

        axios.get(`${taxonomyEndpoint}`)
        .then((res) => {
            console.log('Blog taxonomy call')
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

export default Taxonomies
