import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'


const Navbar = () => {
  return (
    <div className='navbar'>
        {/* <img className='logo' src={assets.logo} alt="" /> */}
         <div className='logo'>
            <h1>Twiggies</h1>
            <p>Admin Portal</p>
         </div>
        <img className='profile' src={assets.profile_image} alt="" />

    </div>
  )
}

export default Navbar
