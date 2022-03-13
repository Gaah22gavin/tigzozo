import React from 'react';

function Instagram() {
  return (
    <section className='instagram'>
        <h2>As seen on <span>Instagram</span></h2> 
        <div className='container'>
            <div className='box'>
                <img src="./imges/instar-one.jpg" alt="" className='one'/>
            </div>
            <div className='box down' id="down">
                <img src="./imges/instar-two.jpg" alt="" />
            </div>
            <div className='box'>
                <img src="./imges/instar-thre.png" alt="" />
            </div>
            <div className='box down' id="down">
                <img src="./imges/instar-four.jpg" alt="" />
            </div>
            <div className='box'>
                <img src="./imges/instar-five.jpg" alt="" />
            </div>
            <div className='box down' id="down">
                <img src="./imges/instar-six.png" alt="" />
            </div>
        </div>
        <h3>#tigzozo</h3>
        <a href="#">Follow Us</a>
    </section>
  )
}

export default Instagram;