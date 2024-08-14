import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import AdminDashboard from './AdminDashboard';
import AddCategory from '../components/Product/AddCategory';
import HomeDashboard from './HomeDashboard';
import './Admin.css';
import ShowCategory from '../components/Product/ShowCategory';


const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      {/* <Sidebar /> */}
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          {/* <Route path="/" element={<HomeDashboard />} /> */}
          {/* <Route path="/addcategory" element={<AddCategory />} /> */}
          <Route path="/addcategory" element={<ShowCategory />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
