import React from 'react';
import './blog.css'; // Import CSS file for styling

const Blog = () => {
  return (
    <div className='main-container' id='blog'>
      <div className='column'>
        <div className='intro'>
          <h1>Welcome to Our Currency Exchange App</h1><br></br>
          <p>Our app allows you to easily view currency exchange rates and calculate conversions between different currencies. Registered users can receive updates about the application.</p>
         <br></br> <button className="cta-button">Get Started</button>
        </div>
      </div>
      <div className='column'>
        <div className='features'>
          <h2>Key Features</h2>
          <ul>
            <li>Real-time currency exchange rates</li>
            <li>Easy-to-use currency converter</li>
            <li>Personalized user experience</li>
            <li>Automatic updates and notifications</li>
          </ul>
        </div>
      </div>
      <div className='column'>
        <div className='testimonial'>
          <h2>What Our Users Say</h2><br />
          <p>"This app is amazing! It helped me save a lot of time and hassle when managing my international transactions."</p>
          <p>- John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
