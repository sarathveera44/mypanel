import React from 'react';

const adminRoutes = [
  { path: '/admin/registerall', element: <RegisterAll /> },
  { path: '/admin/login', element: <AdminLogin /> },

  {path:'/admin/checkup' ,element:<DriverCheckup />},
  {path:'/empnav' ,element:<EmployeeNavbar />}
];

export default adminRoutes;
