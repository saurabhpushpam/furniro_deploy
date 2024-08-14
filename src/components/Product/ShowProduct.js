import { useState } from 'react'
import '../../Dashboard/Admin.css'
// import Header from '../navbar/Header'
import Sidebar from '../../Dashboard/Sidebar'
import '../../Dashboard/order/Order.css'
import './product.css';

import GetProductVarient from './GetProductVarient';
import AddProductVarient from './AddproductVarient';
import GetProduct from './GetProduct';
import AddProduct from './AddProduct';





function ShowProduct() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  // const [addproduct, setaddproduct] = useState(false);
  const [getProduct, setgetProduct] = useState(false);
  const [showGetProduct, setshowGetProduct] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showAddProductvarient, setShowAddProductvarient] = useState(false);


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }



  return (
    <div className='grid-container'>

      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <div className='selectbtn'>

        <button className='adddatas'
          onClick={() => {
            setShowAddProduct(true);
            setshowGetProduct(false);
            setgetProduct(false);
            setShowAddProductvarient(false);

          }}
        >
          <b> Add Product </b>
        </button>

        <button className='adddatas'
          onClick={() => {
            setShowAddProduct(false);
            setshowGetProduct(false);
            setgetProduct(false);
            setShowAddProductvarient(true);

          }}
        >
          <b> Add Product Varient</b>
        </button>

        <button className='showsdatas'
          onClick={() => {
            setshowGetProduct(false);
            setShowAddProduct(false);
            setShowAddProductvarient(false);
            setgetProduct(true);

          }}><b>Show Product</b> </button>

        <button className='showsdatas'
          onClick={() => {
            setshowGetProduct(true);
            setShowAddProduct(false);
            setgetProduct(false);
            setShowAddProductvarient(false);

          }}><b>Show Product Varient</b></button>


      </div>

      <div className='shows-container'>
        {/* <button onClick={() => <GetProduct></GetProduct>}>getproduct</button> */}
        {/* <AddProduct></AddProduct>
        <GetProduct></GetProduct> */}


        {/* {showGetProduct && <GetProduct />} */}

        {/* <button onClick={() =>  setShowAddProduct(true) }>Add Product</button> */}



        {getProduct && <GetProduct />}
        {showGetProduct && <GetProductVarient />}
        {showAddProductvarient && <AddProductVarient />}
        {showAddProduct && <AddProduct />}

      </div>
    </div >
  )
}

export default ShowProduct

