import { useEffect, useState } from 'react';
import axios from 'axios';
import Puff from 'react-loading-icons/dist/esm/components/puff';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const About = () => {
  const [loading, setLoading] = useState(true);
  const [about, setAbout] = useState(null);

  const aboutEndpoint = `${baseUrl}/about`;

useEffect(() => {
  axios
    .get(aboutEndpoint)
    .then((res) => {
      setAbout(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

const AboutContent = ({ about }) => {
  return (
    <div>
      {about.slice(0, 3).map((about, index) => (
        <div key={about.slug + "-" + index} className='about'>
          <div className='about-hero'>
          <img src='/dan-meyers-hluOJZjLVXc-unsplash.jpg' alt="about featured Image" className='about-image' />
          <h4 className='header title-header'>{about.title.rendered}</h4>
          </div>
          <div dangerouslySetInnerHTML={{ __html: about.content.rendered }} className='about-text shortened-text' />
        </div>
      ))}
    </div>
  );
};     

  return (
    <div>
      {loading ? <Puff stroke="#98ff98" /> : <AboutContent about={about} />}
    </div>
  );
};

export default About;
