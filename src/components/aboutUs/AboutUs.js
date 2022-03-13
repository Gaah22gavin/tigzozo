import React from 'react';


function AboutUs() {
  return (
    <section className='about'>
        <h2>About Tigzozo media</h2>
        <div className="container">
            <div className='box-one'>
              <p>We are a dedicated team of digital and media creators, marketers and event planners who share a common passion with our clients. Together we create extraordinary brand experiences that help the business community establish their voice and evaluation. Our work is renowned for its highly crafted design, creativity and its ability to drive action.</p>

              <img src="./imges/about-one.png" alt="" />
              <img src="./imges/about-two.png" alt="" className='two'/>
            </div>

            <div className='box-two'>
              <video src="./imges/about-vidoe.mp4" poster='./imges/poster.png' controls></video>
              <p>
                We take pride in our ability to deliever complex solutions in a way that you will find effortless and easy. Our process enables us to expriment with ideas of all kinds, deliver on time and stay within your budget.
              </p>

              <a href="#">Find out more</a>
            </div>
        </div>
    </section>
  )
}

export default AboutUs;