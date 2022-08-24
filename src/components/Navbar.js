import React from 'react';
import { Link } from 'react-router-dom';

const NavBar=()=>{

    return(

        <nav>
        <div className="nav-wrapper white">
        
          <ul id="nav-mobile" className="right">
            <li><Link to="signIn">Signin</Link></li>
            <li><Link to="signup">Signup</Link></li>

          </ul>
        </div>
      </nav>
    )
}

export default NavBar;
