// App.js
import React, { useState, useEffect } from 'react';
import Features from './Features';
// import Header from './Header';
// import './App.css';

const Homepage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://krds-assignment.github.io/aoc/api-assets/data.json');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="app">
      {data && (
        <>
          {/* <Header logo={data.logo} /> */}
          <Features features={data.features} />
        </>
      )}
    </div>
  );
};

export default Homepage;
