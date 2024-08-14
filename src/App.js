// // import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

// import { Routes, Route, useLocation } from 'react-router-dom'


// import './App.css';
// import Home from './components/home/Home';
// import Footer from './navbar/Footer';
// import Header from './navbar/Header';
// import Shop from './components/Shop/Shop';
// import CheckOut from './components/BillingDetails/CheckOut';
// import Cart from './components/Cart/Cart'
// import Contact from './components/Contact/Contact';
// import Product from './components/Product/Product';
// import Register from './RegisterLogin/Register';

// import AdminDashboard from './Dashboard/AdminDashboard';
// import AddCategory from './components/Product/AddCategory';
// import Sidebar from './Dashboard/Sidebar';
// import DashboardLayout from './Dashboard/DashboardLayout';
// import ShowCategory from './components/Product/ShowCategory';
// import ShowUser from './Dashboard/user/ShowUser';
// import ShowOrder from './Dashboard/order/ShowOrder';
// import ShowProduct from './components/Product/ShowProduct';
// import Logout from './Dashboard/logout/Logout';
// import UserDetail from './Dashboard/UserDetail';
// import UserLogout from './Dashboard/logout/UserLogout';


// // import ProtectedRoutes from './ProtectedRoutes';




// // const router = createBrowserRouter(
// //   createRoutesFromElements(
// //     <>
// //       <Route path="/" element={<Home />}>
// //         <Route path="/" element={<Home />} />
// //         <Route path='/about' element={<CheckOut />} />
// //         <Route path='/shop' element={<Shop />} />
// //         <Route path='/contact' element={<Contact />} />
// //         <Route path='/cart' element={<Cart />} />
// //       </Route>
// //     </>
// //   )
// // )

// function App() {

//   const location = useLocation();
//   const hideHeaderFooter = ['/signup', '/user', '/user/addcategory', '/user/product', '/user/order', '/user/getuser', "/user/logout"].includes(location.pathname);


//   return (
//     <>

//       {!hideHeaderFooter && <Header />}
//       {/* <RouterProvider router={router} /> */}


//       {/* <Header></Header> */}

//       {/* <Home></Home> */}
//       {/* <Shop></Shop> */}
//       {/* <CheckOut></CheckOut> */}
//       {/* <Cart></Cart> */}
//       {/* <Contact></Contact> */}
//       <Routes>

//         {/* <Route path="/userdetail" element={<UserDetail />}></Route> */}

//         <Route path="/userdetail" element={<UserLogout />}></Route>

//         <Route path="/user" element={<AdminDashboard />}></Route>
//         <Route path="/user/addcategory" element={<ShowCategory />}></Route>
//         <Route path="/user/getuser" element={<ShowUser />}></Route>
//         <Route path="/user/order" element={<ShowOrder />}></Route>
//         <Route path="/user/product" element={<ShowProduct />}></Route>
//         <Route path="/user/logout" element={<Logout />}></Route>

//         <Route path="/logout" element={<Logout />}></Route>

//         {/* <Route path="/user" element={<DashboardLayout />}></Route> */}
//         {/* <Route path="/addcategory" element={<AddCategory />}></Route> */}


//         <Route path="/signup" element={<Register />}></Route>
//         <Route path="/" element={<Home />}></Route>

//         <Route path="/shop/:id" element={<Product />} />
//         {/* <Route path="//:id" element={<Product />} /> */}


//         <Route path="/shop" element={<Shop />}></Route>
//         <Route path="/cart" element={<Cart />}></Route>
//         <Route path="/checkout" element={<CheckOut />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>

//         <Route path="/product" element={<Product />}></Route>

//         {/* <Route path="/contact" element={<h1>This is Contact page</h1>}></Route> */}
//         {/* <Route path="/about" element={<About></About>}></Route> */}

//         {/* Protected Routes */}

//         {/* <ProtectedRoutes path="/user" element={<AdminDashboard />} />
//         <ProtectedRoutes path="/user/addcategory" element={<ShowCategory />} />
//         <ProtectedRoutes path="/user/getuser" element={<ShowUser />} />
//         <ProtectedRoutes path="/user/order" element={<ShowOrder />} />
//         <ProtectedRoutes path="/user/product" element={<ShowProduct />} /> */}
//         {/* 

//         <Route path="/user" element={<ProtectedRoutes element={<AdminDashboard />} />} />
//         <Route path="/user/addcategory" element={<ProtectedRoutes element={<ShowCategory />} />} />
//         <Route path="/user/getuser" element={<ProtectedRoutes element={<ShowUser />} />} />
//         <Route path="/user/order" element={<ProtectedRoutes element={<ShowOrder />} />} />
//         <Route path="/user/product" element={<ProtectedRoutes element={<ShowProduct />} />} /> */}


//         {/* <ProtectedRoutes path="/shop" element={<Shop />}></ProtectedRoutes>
//         <ProtectedRoutes path="/cart" element={<Cart />}></ProtectedRoutes>
//         <ProtectedRoutes path="/checkout" element={<CheckOut />}></ProtectedRoutes>
//         <ProtectedRoutes path="/contact" element={<Contact />}></ProtectedRoutes>

//         <ProtectedRoutes path="/product" element={<Product />}></ProtectedRoutes> */}

//         {/* <Route path="*" element={<div><h1>This is Error Page</h1></div>} /> */}

//         <Route path="*" element={<div><h1>This is Error Page</h1></div>}></Route>

//       </Routes>

//       {!hideHeaderFooter && <Footer />}
//       {/* <Footer></Footer> */}
//     </>
//   );
// }

// export default App;
























// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

// import { Routes, Route, useLocation, Navigate } from 'react-router-dom'


// import './App.css';
// import Home from './components/home/Home';
// import Footer from './navbar/Footer';
// import Header from './navbar/Header';
// import Shop from './components/Shop/Shop';
// import CheckOut from './components/BillingDetails/CheckOut';
// import Cart from './components/Cart/Cart'
// import Contact from './components/Contact/Contact';
// import Product from './components/Product/Product';
// import Register from './RegisterLogin/Register';

// import AdminDashboard from './Dashboard/AdminDashboard';
// import AddCategory from './components/Product/AddCategory';
// import Sidebar from './Dashboard/Sidebar';
// import DashboardLayout from './Dashboard/DashboardLayout';
// import ShowCategory from './components/Product/ShowCategory';
// import ShowUser from './Dashboard/user/ShowUser';
// import ShowOrder from './Dashboard/order/ShowOrder';
// import ShowProduct from './components/Product/ShowProduct';
// import Logout from './Dashboard/logout/Logout';
// import UserDetail from './Dashboard/UserDetail';
// import UserLogout from './Dashboard/logout/UserLogout';
// import ProtectedRoute from './ProtectedRoutes';



// function App() {

//   const location = useLocation();
//   const hideHeaderFooter = ['/signup', '/user', '/user/addcategory', '/user/product', '/user/order', '/user/getuser', "/user/logout"].includes(location.pathname);

//   // const hideHeaderFooter = ['/signup'].includes(location.pathname);



//   return (
//     <>

//       {!hideHeaderFooter && <Header />}

//       <Routes>


//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<Register />} />

//         {/* Protected Routes */}
//         <Route path="/user" element={<ProtectedRoute element={AdminDashboard} />} />
//         <Route path="/user/addcategory" element={<ProtectedRoute element={ShowCategory} />} />
//         <Route path="/user/getuser" element={<ProtectedRoute element={ShowUser} />} />
//         <Route path="/user/order" element={<ProtectedRoute element={ShowOrder} />} />
//         <Route path="/user/product" element={<ProtectedRoute element={ShowProduct} />} />
//         <Route path="/user/logout" element={<ProtectedRoute element={Logout} />} />
//         <Route path="/userdetail" element={<ProtectedRoute element={UserLogout} />} />

//         <Route path="/shop/:id" element={<ProtectedRoute element={Product} />} />
//         <Route path="/shop" element={<ProtectedRoute element={Shop} />} />
//         <Route path="/cart" element={<ProtectedRoute element={Cart} />} />
//         <Route path="/checkout" element={<ProtectedRoute element={CheckOut} />} />
//         <Route path="/contact" element={<ProtectedRoute element={Contact} />} />
//         <Route path="/product" element={<ProtectedRoute element={Product} />} />

//         <Route path="*" element={<Navigate to="/signup" replace />} />
//       </Routes>




//       {!hideHeaderFooter && <Footer />}
//       {/* <Footer></Footer> */}
//     </>
//   );
// }

// export default App;





































import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import './App.css';
import Home from './components/home/Home';
import Footer from './navbar/Footer';
import Header from './navbar/Header';
import Shop from './components/Shop/Shop';
import CheckOut from './components/BillingDetails/CheckOut';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import Product from './components/Product/Product';
import Register from './RegisterLogin/Register';

import AdminDashboard from './Dashboard/AdminDashboard';
import ShowCategory from './components/Product/ShowCategory';
import ShowUser from './Dashboard/user/ShowUser';
import ShowOrder from './Dashboard/order/ShowOrder';
import ShowProduct from './components/Product/ShowProduct';
import Logout from './Dashboard/logout/Logout';
import UserLogout from './Dashboard/logout/UserLogout';
import ProtectedRoute from './ProtectedRoutes';
import ShowContact from './components/Contact/ShowContact';

function App() {
  const location = useLocation();
  const hideHeaderFooter = ['/signup', '/user', '/user/addcategory', '/user/product', '/user/order', '/user/getuser', "/user/logout", "/user/contact", "/userdetail"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        {/* Public Routes */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signup" element={localStorage.getItem('isLoggedin') ? <Navigate to="/" replace /> : <Register />} />

        {/* Admin Protected Routes */}
        <Route path="/user" element={<ProtectedRoute element={AdminDashboard} allowedRoles={['admin']} />} />
        <Route path="/user/addcategory" element={<ProtectedRoute element={ShowCategory} allowedRoles={['admin']} />} />
        <Route path="/user/getuser" element={<ProtectedRoute element={ShowUser} allowedRoles={['admin']} />} />
        <Route path="/user/order" element={<ProtectedRoute element={ShowOrder} allowedRoles={['admin']} />} />
        <Route path="/user/product" element={<ProtectedRoute element={ShowProduct} allowedRoles={['admin']} />} />
        <Route path="/user/logout" element={<ProtectedRoute element={Logout} allowedRoles={['admin']} />} />
        <Route path="/user/contact" element={<ProtectedRoute element={ShowContact} allowedRoles={['admin']} />} />

        {/* <Route path="/userdetail" element={<ProtectedRoute element={UserLogout} allowedRoles={['admin']} />} /> */}



        {/* User Protected Routes */}
        <Route path="/" element={<ProtectedRoute element={Home} allowedRoles={['user']} />} />
        <Route path="/shop/:id" element={<ProtectedRoute element={Product} allowedRoles={['user']} />} />
        <Route path="/shop" element={<ProtectedRoute element={Shop} allowedRoles={['user']} />} />
        <Route path="/cart" element={<ProtectedRoute element={Cart} allowedRoles={['user']} />} />
        <Route path="/checkout" element={<ProtectedRoute element={CheckOut} allowedRoles={['user']} />} />
        <Route path="/contact" element={<ProtectedRoute element={Contact} allowedRoles={['user']} />} />
        <Route path="/product" element={<ProtectedRoute element={Product} allowedRoles={['user']} />} />
        <Route path="/userdetail" element={<ProtectedRoute element={UserLogout} allowedRoles={['user']} />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
