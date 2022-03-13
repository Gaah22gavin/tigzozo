import * as React from 'react';
import ReactDOM from 'react-dom';
import { IconContext } from 'react-icons';
import {AiOutlinePlayCircle} from "react-icons/ai";
import {AiOutlineCheckCircle} from "react-icons/ai";




function Banner() {
  return (
    <section className='banner'>

      <div className='banner-text'>
          <h1>Igniting outstanding
          dreams to life.
          </h1>
          <p>Our process enables us to experiment with
          ideas of all kinds,deliver on time and stay 
          within your budget. 
          </p>
          <a href="#">Discover more</a>
          <a href="#" className='book'>Book a session</a>
          <h3 className='h3-one'>
            
            < IconContext.Provider  value={{ className: 'react-icon' }}>
              <AiOutlinePlayCircle/> 
            </IconContext.Provider>
            Watch our latest video

          </h3>

          <h3>

            < IconContext.Provider  value={{ className: 'react-icon' }}>
              <AiOutlineCheckCircle/>
            </IconContext.Provider>
            Trusted by reputable organizations

          </h3>
      </div>

      <div className='banner-imgs'>

        <div className='img one'>
          <img src="./imges/banner-one.png" alt="" />
        </div>


        <div className='img'>
          <img src="./imges/banner-two.png" alt="" />
        </div>


        <div className='img two'>
        <img src="./imges/banner-three.png" alt="" />
        </div>


        <div className='img'>
        <img src="./imges/banner-four.png" alt="" />
        </div>


      </div>

    </section>

  )
}


export default Banner; 
