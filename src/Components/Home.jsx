import React from 'react'
 import vg from '../assets/2.webp';

const Home = () => {
  return (
   <>
   
   <div className='home' id='home'>
        <main >
            <h1>TechyStar</h1>
            <p>Solution to all problems</p>
        </main>
    </div> 

    <div className='home2'>
       
            <img src={vg} alt="Graphics" />
            <div>
            <p>We are yout one and  only solution to the tech problems you face everyday. We are leading a tech company to solve the problem of children.</p>

            </div>
       </div>

       <div className="home3" id='about'>
            <div>
              <h1>Who are we ?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae exercitationem amet officia expedita quasi tempore? Sint necessitatibus iste beatae voluptas corrupti! Quisquam, cum voluptatem, nisi neque expedita molestias nemo rem fugiat nam nulla labore? Porro odit molestias inventore, consectetur odio minus suscipit exercitationem! Quibusdam accusamus adipisci earum quaerat iusto.</p>
              </div>
       </div>

       <div className="home4" id='brands'>
        <div>
        <h1>Brands</h1>
          <article>
        <div style={{animationDelay:'0.3s'}}>
       
          <p>Google</p>
        </div>
        
        <div style={{animationDelay:'0.5s'}}>
         
          <p>Amazon</p>
        </div>

        <div style={{animationDelay:'0.7s'}}>
       
          <p>Youtube</p>
        </div>

        

        <div style={{animationDelay:'1s'}}>
      
          <p>Instgram</p>
        </div>
       </article>
       </div>
       </div>
   </>
  )
}

export default Home