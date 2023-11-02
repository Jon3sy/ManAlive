import { useState, useEffect } from 'react';
import axios from 'axios';
import { Puff } from 'react-loading-icons';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Testimonies = () => {
  const [loading, setLoading] = useState(true);
  const [testimonies, setTestimonies] = useState(null);

  const testimoniesEndpoint = `${baseUrl}/testimonies?_embed`;

  useEffect(() => {
    axios.get(testimoniesEndpoint)
      .then((res) => {
        setTestimonies(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getFeaturedImage(testimony) {
    if (testimony && testimony._embedded && testimony._embedded['wp:featuredmedia'] && testimony._embedded['wp:featuredmedia'][0].source_url) {
      return testimony._embedded['wp:featuredmedia'][0].source_url;
    } else {
      return 'https://placehold.co/600x400';
    }
  }

  const Testimony = ({ testimonies }) => {
    return (
      <>
        {testimonies.map((testimony, index) => (
          <div key={testimony.slug + "-" + index} className='testimony'>
            <img src={getFeaturedImage(testimony)} alt="Testimony featured Image" className='testimony-image'/>
            <h4 className='header header-four'>{testimony.title.rendered}</h4>
            <div dangerouslySetInnerHTML={{ __html: testimony.content.rendered }} className='body-text shortened-text' />
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      {loading ? <Puff stroke="#98ff98" /> : <Testimony testimonies={testimonies} />}
    </>
  );
};

export default Testimonies;