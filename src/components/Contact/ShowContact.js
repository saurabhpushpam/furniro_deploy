import { useState } from 'react'
import '../../Dashboard/Admin.css'
// import Header from '../navbar/Header'
import Sidebar from '../../Dashboard/Sidebar'
import '../Product/product.css'
import GetContact from './GetContact'


function ShowContact() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>

      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />


      <div className='shows-container'>
        <GetContact></GetContact>

      </div>
    </div >
  )
}

export default ShowContact

