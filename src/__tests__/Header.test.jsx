// Header component - Displays the blog header/title
// Receives 'name' prop from App component
import React from 'react';

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
