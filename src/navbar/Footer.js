import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-main'>
          <div className='footer-top'>
            <div className='footer-top-left'>
              <div className='footer-left-bname'>
                <p className='footer-left-bname'>Furniro.</p></div>
              <br /><br />
              <div className='footer-left-add'>
                <p className='footer-left-add'>400 University Drive Suite 200 Coral Gables,
                  FL 33134 USA</p>
              </div>
            </div>
            <div className='footer-top-right'>
              <div className='footer-right-first'>
                <div className='footer-rl-link'>
                  <p className='rl-top-clr'>Links</p>
                  <p>Home</p>
                  <p>Shop</p>
                  <p>About</p>
                  <p>Contact</p>
                </div>
                <div className='footer-rl-help'>
                  <p className='rl-top-clr'>Help</p>
                  <p>Payment Options</p>
                  <p>Returns</p>
                  <p>Privacy Policies</p>
                </div>
              </div>
              <div className='footer-right-last'>
                <p className='footer-right-newsletter'>Newsletter</p>
                <div>
                  <input type="text" placeholder="Enter Your Email Address" className='footer-right-input' />
                  <button className='footer-right-subscribe'>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-bottom'>
            <p className='footer-copyright'>2023 furino. All rights reverved</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer