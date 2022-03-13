import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Footer() {
    return(

    <footer>

        <div className='box'>
            <img src="./imges/footer-img.png" alt="" />
            <small>© Copyright Tigzozo media 2022. All rights reserved.</small>
            < IconContext.Provider  value={{ className:'react-icon' }}>
                <FaFacebookF/>
            </IconContext.Provider>

            < IconContext.Provider  value={{ className:'react-icon' }}>
                <BsInstagram/>
            </IconContext.Provider>
        </div>

        <div className='box'>
            <h2>About us</h2>

            <h3>Our story</h3>
            <h3>Our team</h3>
            <h3>Testimonials</h3>
            <h3>COVID-19 update</h3>

        </div>

        <div className='box'>

            <h2>Here to help</h2>

            <h3>Contact us</h3>
            <h3>Book a session</h3>
            <h3>Payment</h3>

        </div>
        
        <div className='box'>
            <h2>Get in touch</h2>

            <h3>            
                < IconContext.Provider  value={{ className:'react-icon1' }}>
                <BsInstagram/>
            </IconContext.Provider>
            +263 456 7891

            </h3>

            <h3>
            < IconContext.Provider  value={{ className:'react-icon1' }}>
                <BsInstagram/>
            </IconContext.Provider>
                john@tigzozomedia.com
                </h3>


            <h3>
            < IconContext.Provider  value={{ className:'react-icon1' }}>
                <BsInstagram/>
            </IconContext.Provider>
                Testimonials
                
            </h3>
            <h3>
            < IconContext.Provider  value={{ className:'react-icon1' }}>
                <BsInstagram/>
            </IconContext.Provider>
                132 East street Avondale, Harare
            </h3>

        </div>

    </footer>
  )
}

export default Footer;