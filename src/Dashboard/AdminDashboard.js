import { useState } from 'react'
import './Admin.css'
// import Header from '../navbar/Header'
import Sidebar from './Sidebar'
import HomeDashboard from './HomeDashboard'


function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      {/* <Header /> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <HomeDashboard />
    </div>
  )
}

export default AdminDashboard

