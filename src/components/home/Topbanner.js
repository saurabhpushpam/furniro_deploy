import React from 'react'
import './Home.css'


const Topbanner = () => {

  const handleBuyNowClick = () => {
    const section = document.getElementById('moveto-our-products-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='top-banner-img'>
        <div className='top-banner-data'>
          <div className='top-inner-banner-data'>
            <p className='top-banner-newarv'>New Arrival</p>
            <p className='top-banner-newcoll'>Discover Our <br />New Collection</p>
            <p className='top-banner-newdata'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className='top-banner-buynow' onClick={handleBuyNowClick}>BUY Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbanner