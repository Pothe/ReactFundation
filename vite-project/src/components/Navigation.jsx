import React from 'react';
import '../assets/css/Navigate.css'
import { Link, NavLink } from 'react-router-dom';
function Navigation() {

  return (
    <nav>
      <ul>
          <li><NavLink to="/" className={({isActive }) => (isActive?"active":"disactive")}>Home</NavLink></li>
         <li><NavLink to="/about" className={({isActive})=>(isActive?"active":"disactive")} >About</NavLink></li>
        <li><NavLink to="/contact" className={({isActive})=>(isActive?"active":"disactive")}>contact</NavLink></li>
      </ul>
    </nav>
  );
}
export default Navigation;
