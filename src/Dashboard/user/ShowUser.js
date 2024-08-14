import { useState } from 'react'
import '../Admin.css'
// import Header from '../navbar/Header'
import Sidebar from '../../Dashboard/Sidebar'
import './user.css'
import GetUser from './GetUser';


function ShowUser() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>

      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className='shows-container'>
        <GetUser></GetUser>
      </div>
    </div>
  )
}

export default ShowUser

