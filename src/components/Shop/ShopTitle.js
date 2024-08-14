import React from 'react'
import { Link } from 'react-router-dom'
import './shop.css'

const ShopTitle = () => {
  return (
    <div className='shop-title-main'>
      <div className='shop-title-text'>
        <p className='shop-title-shop'>Shop</p>
        <div className='shop-title-breadcrumb-route'>
          <Link to={'/'} className='shop-title-breadcrumb'>Home  &gt;</Link>
          <p className='shop-title-breadcrumb-next'>&nbsp; Shop</p>
        </div>
      </div>
    </div>
  )
}

export default ShopTitle