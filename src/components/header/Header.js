import React from 'react';
import "../header/header.css";
import {useState} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import {GiHamburgerMenu, GiToggles} from "react-icons/gi";



function Header() {

  const [showMenu, setShowMenu] = useState(false);

  const ToggleMenu = () =>{
    setShowMenu(!showMenu);
  }
  

  return (

    <header>

      <div className='log'>
          <img src="./imges/log.png" alt="" />
      </div>

      <nav className='.nav-links' id={showMenu ? "nav-links-mobiles" : "nav-links-mobiles-hide"}>
        <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Testimonials</a></li>
        </ul>
      </nav>

      <div onClick={ToggleMenu} className='bar'>
          {
            showMenu ? <AiOutlineClose size={35} color={'black'}/> : <GiHamburgerMenu size={35} color={'black'}/>           
          }
      </div>

      <div className='dark-mode'>
        <img src="./imges/Vector.png" alt=""/>
      </div>

    </header>


  )
}

export default Header;