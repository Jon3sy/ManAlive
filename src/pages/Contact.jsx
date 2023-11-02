import {useState} from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'

const formEndPoint = import.meta.env.VITE_APP_WP_API_FORM_ENDPOINT

const ContactForm = () => {
    //state for form submission
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    //set state for inputs
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = () => {
        event.preventDefault()
        // object for our form - append data to it so we can send it
        const testForm = new FormData()
        testForm.append('your-name', name)
        testForm.append('your-email', email)
        testForm.append('your-message', message)

        //AXIOS CALL
        axios.post(formEndPoint, testForm, {
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            }
        })
        .then((response) => {
            setSubmitted(true)
        })
        .catch((error) => {
            console.log(error);
            setError(true)
        })
    }
        //form to be returned
    return(
        <>
            <form
            onSubmit={handleSubmit}
            method='POST'>
            
            {/* name input */}
            <div>
                <label htmlFor='name'>Name</label>
                <input
                type='text'
                name='name'
                onChange={(event) => setName(event.target.value)}
                value={name}
                required
                />
            </div>

            {/* Email input */}
            <div>
                <label htmlFor='email'>Email</label>
                <input
                type='text'
                name='email'
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
                />
            </div>

            {/* Message input */}
            <div>
                <label htmlFor='message'>Message</label>
                <textarea
                name='message'
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                required
                />
            </div>

            <div>
                <button
                    className='regular-button'
                    type="submit"
                >
                    Send message
                </button>
            </div>

            </form>
        </>
    )
    //conditionals - if submitted or if error
    if  (submitted){
        return (
            <>
            <h3>Thanks you your message</h3>
            <p>We'll be in touch soon &#128513;</p>
            </>
        )
    }
    if (error){
        return(
            <>
            <h3>Error!</h3>
            <p>Sorry, we were unable to send your message!</p>
            </>
        )
    }
}



const Contact = () => {
  return (
    <>
          <Helmet>
        <title>Contact Us - Man Alive</title>
        <meta name='description' content='Contact us if you have any questions or need to get in touch. Find our contact information, email, phone, and address. We value your feedback and inquiries.' />
      <meta name='keywords' content='contact, contact us, reach out, contact information, email, phone, address, inquiries, feedback, get in touch, customer support' />
      </Helmet>
        <div className="contact">
      <div className="contact-header">
        <h1 className='header title-header'>Contact Us</h1>
      </div>
      <div id='contact-wrap'>
      <div className="contact-content">
        <p>
          If you have any questions or would like to get in touch with us, please feel free to reach out using the following contact information:
        </p>
        <ul>
          <li>Email: info@manalive.org</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
        <p>
          We value your feedback and inquiries and will do our best to respond promptly.
        </p>
      </div>
      <div className="contact-map">
        <iframe
          title="Man Alive Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-86.1234567!3d39.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zOcKwMDcnMzAuMyJTIDg2wrAxMic0NC41Ilc!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      </div>
        <div id='contact-container' className='container'>
  
                <ContactForm/>

        </div>
    </div>
    </>
  )
}

export default Contact
