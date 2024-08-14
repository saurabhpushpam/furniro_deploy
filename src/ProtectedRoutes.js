// // ProtectedRoute.js
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// const ProtectedRoutes = ({ element: Component, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem('token'); // Check for a token in local storage

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? Component : <Redirect to="/signup" />}
//     />
//   );
// };



// export default ProtectedRoutes;


// // ProtectedRoute.js
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const ProtectedRoutes = ({ element: Component, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem('token'); // Check for a token in local storage

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? Component : <Navigate to="/signup" />}
//     />
//   );
// };

// export default ProtectedRoutes;



// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element: Component }) => {
//   const token = localStorage.getItem('token'); // Check if the token is saved

//   return token ? <Component /> : <Navigate to="/signup" />;
// };

// export default ProtectedRoute;






// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element: Component, allowedRoles }) => {
//   const token = localStorage.getItem('token');
//   const usertype = localStorage.getItem('usertype');

//   // Check if the user is logged in
//   if (!token) {
//     return <Navigate to="/signup" replace />;
//   }

//   // Check if the usertype is allowed to access this route
//   if (allowedRoles && !allowedRoles.includes(usertype)) {
//     return <Navigate to="/" replace />;
//   }

//   return <Component />;
// };

// export default ProtectedRoute;





import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, allowedRoles }) => {
  const usertype = localStorage.getItem('usertype'); // Assuming you store the user's role in localStorage

  if (!usertype) {
    // If the user is not logged in or role is not available, redirect to login
    return <Navigate to="/signup" replace />;
  }

  if (!allowedRoles.includes(usertype)) {
    // Redirect to the appropriate dashboard based on the user's role
    if (usertype === 'admin') {
      return <Navigate to="/user" replace />;
    }
    // You can add more role-based redirects here if necessary
    return <Navigate to="/" replace />;
  }

  return <Component />;
};

export default ProtectedRoute;
