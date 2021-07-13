import React from 'react';
import {Link} from 'react-router-dom'

const Example = (props) => {
    const navStyle = {
        color: 'white',
        margin: 'auto',
        padding: '5px 0',
        textDecoration: 'none'
        
    }
    const logoStyle = {
        color: 'white',
        padding: '5px 0',
        textDecoration: 'none'
        
    }
  return (
    <div>
      <nav>
          <Link style={logoStyle} to='/'>
            <h3>Microsoft</h3>
          </Link>
          
          <ul className='nav-links'>
              <Link style={navStyle} to='/about'>
                <li>About</li>
              </Link>
              <Link style={navStyle} to='/doc'> 
                <li>Doc</li>
              </Link>
              
          </ul>
      </nav>
    </div>
  );
}

export default Example;