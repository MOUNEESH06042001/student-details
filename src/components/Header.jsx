import React, { useState } from 'react';
import '../App.css';

function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleToggle} className={`toggle-button ${isToggled ? 'active' : ''}`}>
          {isToggled ? 'ON' : 'OFF'}
        </button>
      </header>
    </div>
  );
}

export default Header;
