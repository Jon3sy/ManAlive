
import { Peace, Chat, Heart, Balloon } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

import Blogs from '../components/Blogs'
import Testimonies from '../components/Testimonies'
import { Helmet } from 'react-helmet'


const Home = () => {

  return (
    <>
    <Helmet>
  <title>Counselling for Men - Man Alive</title>
  <meta name='description' content='Dedicated to counseling men, boys, and families since 1996. Offering support, therapy, and non-profit programs to strengthen relationships and promote non-violence.' />
  <meta name='keywords' content='counselling, mens counseling, therapy, relationships, family, non-profit, compassion, counseling services, counseling programs, male youth, boys, violence, cultural diversity, Te Tiriti o Waitangi, sponsors, partners, blogs, testimonies' />
</Helmet>

    <section className='container hero-container'> 
        <div id='hero-text-container'>
            <h1 className='header title-header'>COUNSELLING FOR MEN</h1>
            <p className='body-text'>Dedicated to working with men, boys and families on the issues that affect their lives since 1996. A non-profit, secular, apolitical organisation offering a broad range of counseling services and programs with a goal to support all ages to strengthen their relationships with partners, children, family and friends. Run by men for men, Man Alive's team is dedicated to working in straightforward and practical ways</p>
        </div>
        <img src="/man-on-bridge2.png" alt="hero image"  className='hero-image'/>
    </section>
    <section className='container mission-container'>
      <h2 className='header second-header'>Our Mission</h2>
      <div className='content-container'>
        <div className='images-container'>
          <img id='image-1' className='image-mission' src="https://images.unsplash.com/photo-1465321897912-c692b37a09a6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img id='image-2' className='image-mission' src="https://images.unsplash.com/photo-1499171138085-a60c4e752ff7?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img id='image-3'  className='image-mission' src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className='text-container'>
          <p className='sub-text'><strong>To promote through education, counselling, therapy and advocacy:</strong></p>
          <ul className='list'>
            <li className='body-text'>The well-being of men, male youth and boys</li>
            <li className='body-text'>Non-violence and compassion in the community</li>
            <li className='body-text'>Co-operative positive caring relationship between males</li>
          </ul>
          <p className='sub-text'><strong>Man Alive is committed, in attaining our purposes to:</strong></p>
          <ul className='list'>
            <li className='body-text'>Respecting and implementing the dual heritage of the partners of Te Tiriti o Waitangi;</li>
            <li className='body-text'>Respecting cultural diversity and welcoming all nationalities within our community to utilise the Trust's services</li>
          </ul>

        </div>
      </div>
    </section>
    <section className='container specialise-container'>
      <h2 className='header second-header'>We specialise in:</h2>
      <p className='body-text'>We are proud to offer a comprehensive range of services designed to meet your specific needs. Our team of experienced professionals is dedicated to delivering top-quality solutions tailored to help you succeed.</p>
      <div className='card-container'>
        <div className='card'>
        <Peace className='card-icon'/>
        <h4 className='header header-four'>Living Without Violence</h4>
        </div>
        <div className='card'>
        <Chat className='card-icon'/>
        <h4 className='header header-four'>Counselling for Men by Men</h4>
        </div>
        <div className='card'>
        <Heart className='card-icon'/>
        <h4 className='header header-four'>Family & Couple Counselling</h4>
        </div>
        <div className='card'>
        <Balloon className='card-icon'/>
        <h4 className='header header-four'>Man Alive youth</h4>
        </div>
      </div>
      <img id='break-image' src="/matheus-ferrero-TkrRvwxjb_8-unsplash.jpg" alt="boys laughing together" />
    </section>
    <section className='container partners-container'>
    <h2 className='header second-header'>Sponsors & Partners</h2>
    <div className='partners-card-container'>
      <img className='partners-card' src="/partners/image 121-1.png" alt="" />
      <img className='partners-card' src="/partners/image 121.png" alt="" />
      <img  className='partners-card'src="/partners/image 122-1.png" alt="" />
      <img className='partners-card' src="/partners/image 122.png" alt="" />
      <img className='partners-card' src="/partners/image 123-1.png" alt="" />
      <img className='partners-card' src="/partners/image 123.png" alt="" />
      <img className='partners-card' src="/partners/image 124.png" alt="" />
    </div>
    </section>
    <section className='container blogs-container'>
      <h2 className='header second-header'>Latest blogs</h2>
      <div className='blog-card-container'>
       <Blogs/>
      </div>
      <Link to='/allblogs' id='button-flex'>
      <button id='view-all'>view all</button>
      </Link>
    </section>
    <section className='container testimony-container'>
      <h2 className='header second-header'>Clients testimonies</h2>
      <div className='testimony-wrapper'>
       <Testimonies/>
       </div>
    </section>
    </>
  )
}

export default Home
