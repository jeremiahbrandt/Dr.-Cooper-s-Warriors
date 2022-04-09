import React from 'react';

import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Groups">Groups</Link>
    </li>
    <li>
      <Link to="/Events">Events</Link>
    </li>
    <li>
      <Link to="/Account">Account</Link>
    </li>
  </div>
  )
}
export default Navbar;