import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Puff } from 'react-loading-icons'

const productsUrl = import.meta.env.VITE_WC_PRODUCTS_URL

const Shopfront = () => {
const [products, setProducts] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(()=>{
    axios.get(`${productsUrl}`)
    .then( (res) => {
        setProducts(res.data)
        setLoading(false)
    })
    .catch((err)=> console.log(err))
},[])

const Products = (({products})=>{
    const mappedProducts = products.map((product, index) => {
    function getFeaturedImage(product) {
        if (product && product.images && product.images[0]) {
            return product.images[0].src
        } else {
            return 'https://placehold.co/600x400'
        }
    }
    return(
        <div className='product-container item-container' key={index}>
            <img className='product-image' src={getFeaturedImage(product)} alt='Product Image' />
            <Link className='product-link' to={`/product/${product.id}`}>
                <h4 className='name'>{product.name}</h4>
            </Link>
            <h3 className='name'>{product.prices.currency_symbol}{product.prices.regular_price.slice(0, -2)}{product.prices.currency_decimal_separator}{product.prices.regular_price.slice(-2)}{" "}{product.prices.currency_code}</h3>
        </div>
    )
    })

    return(
    <>
        {mappedProducts}
    </>
    )
    })

  return (
    <div id='shop-page' className='container'>
        <h2 className='header second-header'>Donate</h2>
        <div id='product-grid' className='grid-container'>
            {loading ? <Puff/> : <Products products={products}/>}

        </div>
      
    </div>
  )
}

export default Shopfront
