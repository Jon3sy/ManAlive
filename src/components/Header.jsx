import {useState, useEffect} from 'react'
import axios from 'axios'

//import mobile menu
import MobileMenu from './mobileMenu'

import { Link } from 'react-router-dom'

import { List } from 'react-bootstrap-icons'

const baseUrl = import.meta.env.VITE_WP_BASEURL

const Header = () => {
        //set a state to check if the mobile menu is open or not
    const [menuIsOpen, openMenu] = useState(false);
    const [logoUrl, setLogoUrl] = useState('')


    useEffect(() => {
        const fetchNavLogo = async () => {
            try{
                const response = await axios.get(`${baseUrl}wp-json/custom/v1/nav-logo`)
                if(response.status === 200){
                    const data = response.data
                    setLogoUrl(data[0])
                } else{

                }

            }
            catch(error){
                console.error('Error fetching logo', error)
            }
        }
        fetchNavLogo()
    },[])

    const toggleMobileMenu = () => {
        openMenu(!menuIsOpen);
        document.body.classList.toggle('no-scroll');
    }
  return (
    <>
        <nav id='topnav'>
            <Link to="/">
                <img src={logoUrl} alt="Man alive logo" className='logo' />
            </Link>

        {/* Desktop Menu */}
        <ul id='menu'>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to='/allblogs'>All Blogs</Link>
            </li>
            <li>
                <Link to='/shop'>Donate</Link>
            </li>
        </ul>

        {/* Hamburger on desktop */}
        <div id='menu-container'>
            <button id='menu-button' className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                <List id='hamburger-icon'/>
            </button>
        </div>
        </nav>

     {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu}/>}
    </>
  )
}

export default Header
