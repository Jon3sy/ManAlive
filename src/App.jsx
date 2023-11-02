import React, { useEffect, useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Links from './links/Links';
import Header from './components/Header';
import Footer from './components/Footer';

const baseUrl = import.meta.env.VITE_WP_BASEURL;

function App() {
  const [fontFamily, setFontFamily] = useState('Arial, sans-serif'); // Default font family

  // Fetch font family setting from WordPress Customizer
  useEffect(() => {
    fetch(`${baseUrl}/wp-json/custom-theme/v1/customizer-settings`) // Adjust the URL based on your WordPress setup
      .then(response => response.json())
      .then(data => {
        const { fontFamily } = data;
        setFontFamily(fontFamily);
      })
      .catch(error => {
        console.error('Failed to fetch font family:', error);
      });
  }, []);

  return (
    <div style={{ fontFamily: fontFamily }}>
      <HashRouter>
        <Header />
        <Links />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
