import { useState } from 'react'
import '../../Dashboard/Admin.css'
// import Header from '../navbar/Header'
import Sidebar from '../../Dashboard/Sidebar'
import AddCategory from './AddCategory'
import './product.css'
import GetCategory from './GetCategory';


function ShowCategory() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const [showGetCategory, setshowGetCategory] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>

      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className='selectbtn'>

        <button className='adddatas'
          onClick={() => {
            setShowAddCategory(true);
            setshowGetCategory(false);
          }}
        >
          <b>Add Category</b>
        </button>

        <button className='showsdatas'
          onClick={() => {
            setshowGetCategory(true);
            setShowAddCategory(false);

          }}><b>Show Category</b></button>


      </div>

      <div className='shows-container'>

        {showGetCategory && <GetCategory />}
        {showAddCategory && <AddCategory />}

        {/* <AddCategory></AddCategory>
        <GetCategory></GetCategory> */}

      </div>
    </div >
  )
}

export default ShowCategory

