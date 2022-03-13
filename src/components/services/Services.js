import React from 'react';
import { AiOutlineRight, AiOutlineCloseCircle} from "react-icons/ai";
import { IconContext } from 'react-icons';

function Services() {
  return (
    <section className='services'>
        <h2>Services we offer at Tigzozo media</h2>
        <div className='container'>
            <div className='one'>
                <img src="./imges/services.png" alt="" />
                <div className='overlay'>
                    <h4>Events</h4>
                    < IconContext.Provider  value={{ className: 'react-icon' }}>
                        <AiOutlineRight/>
                    </IconContext.Provider>

                </div>
            </div>

            <div className='two'>
                <h3>Digital services</h3>
                <ul>
                    <li><a href="#">1. Logos</a></li>
                    <li><a href="#">2. Brand strategy</a></li>
                    <li><a href="#">3. Package design</a></li>
                    <li><a href="#">4. Colletaral design</a></li>
                    <li><a href="#">5. Corperate identity</a></li>
                    <li><a href="#">6. Trade show support</a></li>
                    <li><a href="#">7. Photography</a></li>
                    <li><a href="#">8. Websites</a></li>
                    <li><a href="#">9.Editoral development</a></li>
                    <li><a href="#">10. Apps</a></li>

                </ul>

                < IconContext.Provider  value={{ className: 'react-close' }}>
                    <AiOutlineCloseCircle/>
                </IconContext.Provider>

            </div>

            <div className='one'>
                <img src="./imges/sservices.png" alt="" />
                <div className='overlay'>
                    <h4>Events</h4>
                    < IconContext.Provider  value={{ className: 'react-icon' }}>
                        <AiOutlineRight/>
                    </IconContext.Provider>
                </div>
            </div>

        </div>

    </section> 
  )
}

export default Services