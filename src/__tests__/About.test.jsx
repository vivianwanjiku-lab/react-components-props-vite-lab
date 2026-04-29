// About component - Displays author information and blog description
// Receives 'image' and 'about' props from App component
import React from 'react';

function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
