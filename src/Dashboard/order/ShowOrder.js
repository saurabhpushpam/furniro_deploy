import { useState } from 'react'
import '../Admin.css'
// import Header from '../navbar/Header'
import Sidebar from '../../Dashboard/Sidebar'
import './Order.css'
import GetOrder from './GetOrder';


function ShowOrder() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>

      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className='shows-container'>
        <GetOrder></GetOrder>
      </div>
    </div>
  )
}

export default ShowOrder

