import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import NoMatch from '../Pages/NoMatch';
import { List } from '@mui/material';
import Login from '../Pages/Login';
const RoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default RoutesPage;
