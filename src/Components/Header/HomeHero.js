import React from 'react'
import LeftImg from '../../Assets/homepage__header.webp';


const HomeHero = () => {
  return (
    <div className='HomeHero'>
       <img className='round-arrow' src="https://www.getstark.co/homepage__header-yellow-arrow.svg" alt="Error" />
       <img className='image-left' src="https://www.getstark.co/homepage-sparkle.png" alt="Error" />
       <img className='image-rotate' src="https://www.getstark.co/homepage__avatar-circle.png" alt="Error" />
       <img className='image-rotate image-rotate--position' src="https://www.getstark.co/homepage__avatar-circle.png" alt="Error" />
       <section className='HomeHero__left'>
          <p>INTRODUCING THE ALL-NEW STARK SUITE</p>
          <h1>Supercharge accessibility</h1>
          <p>
             Tired of manually checking spreadsheets, messy
             handovers, and expensive retrofitting? Stark 
             connects the tools you and yours team already use in
             a streamlined end-to-end accessibility workflow you
             actually love.             
          </p>
          <div className='btn-container'>
            <button className='btn' type={'button'}>Create a free account</button>
            <button className='btn' type={'button'}>Learn more</button>
          </div>
       </section>
       <section className='HomeHero__right'>
         <img src={LeftImg} alt="Error"/>
       </section>
    </div>
  )
}

export default HomeHero
