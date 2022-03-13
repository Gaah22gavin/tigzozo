import React from 'react';
import { AiOutlineRight, AiOutlineCloseCircle} from "react-icons/ai";
import { IconContext } from 'react-icons';

function Clients() {
  return (
    <section className='clients'>
        <h2>What our happy clients say about Tigzozo media</h2>

        <div className='container'>
            <div className='box'>
                
                <div className='img'>
                <img src="./imges/clients.png" alt="" />
                < IconContext.Provider  value={{ className: 'react-icon' }}>
                        <AiOutlineRight/>
                    </IconContext.Provider>
                </div>
                <h3>Tendai and Farai</h3>
                <h5>Co-founders at ABC company</h5>
                <p>“ The team at Tigzozo took the time
                to understand who we are as a couple
                and gave us a few amazing marketing
                plans to choose from. We
                wholeheartedly recommend Tigzozo media
                to everyone we know.”
                </p>

            </div>
            <div className='box two'>
                
                <div className='img'>
                <img src="./imges/client.png" alt="" className="one" />
                < IconContext.Provider  value={{ className: 'react-icon icon-two' }}>
                        <AiOutlineRight/>
                    </IconContext.Provider>
                </div>
                <h3>Miranda</h3>
                <h5>Bride</h5>
                <p>“ The team at Tigzozo took the time
                to understand who we are as a couple
                and gave us a few amazing marketing
                plans to choose from. We
                wholeheartedly recommend Tigzozo media
                to everyone we know.”
                </p>

            </div>
        </div>
        
    </section>
  )
}

export default Clients;