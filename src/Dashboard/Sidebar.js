import React from 'react'
import {
  BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill, BsFillGearFill, BsCart3,
}
  from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { MdContactMail } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";


function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          {/* <BsCart3 className='icon_header' /> */}
          FURNIRO
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>

        <Link to="/user" className='side-text-data'>
          <li className='sidebar-list-item'>
            {/* <a href=""> */}
            <BsGrid1X2Fill className='icon' /> Dashboard
            {/* </a> */}
          </li>
        </Link>

        <Link to="/user/getuser" className='side-text-data'>
          <li className='sidebar-list-item'>
            {/* <a href=""> */}
            <BsPeopleFill className='icon' /> Users
            {/* </a> */}
          </li>
        </Link>

        {/* <Link to="/addcategory" style={{ textDecoration: 'none' }}> */}
        <Link to="/user/addcategory" className='side-text-data'>

          <li className='sidebar-list-item'>
            {/* <a href="">
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </a> */}

            <BsFillGrid3X3GapFill className='icon' /> Categories

          </li>
        </Link>

        <Link to="/user/product" className='side-text-data'>
          <li className='sidebar-list-item'>
            <a href="">
              <BsFillArchiveFill className='icon' /> Products
            </a>
          </li>
        </Link>

        <Link to="/user/order" className='side-text-data'>
          <li className='sidebar-list-item'>
            {/* <a href=""> */}
            <BsListCheck className='icon' /> Orders
            {/* </a> */}
          </li>
        </Link>

        <Link to="/user/contact" className='side-text-data'>
          <li className='sidebar-list-item'>
            {/* <a href=""> */}
            <MdContactMail className='icon' />
            Contact
            {/* </a> */}
          </li>
        </Link>

        {/* <li className='sidebar-list-item'>
          <a href="">
            <BsMenuButtonWideFill className='icon' /> Reports
          </a>
        </li> */}
        <Link to="/user/logout" className='side-text-data'>
          <li className='sidebar-list-item'>
            {/* <a href=""> */}
            <RiLogoutBoxLine className='icon' />
            Logout
            {/* </a> */}
          </li>
        </Link>




      </ul>
    </aside >
  )
}

export default Sidebar