import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';
import { Button } from '@mui/material';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <NavigationButtons />
    </Router>
  );
}

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div>
      <Button variant="contained" onClick={() => navigate('/')}>
        Go to Home
      </Button>
      <Button variant="contained" onClick={() => navigate('/products')}>
        Go to Products
      </Button>
      <Button variant="contained" onClick={() => navigate('/admin')}>
        Go to Admin
      </Button>
    </div>
  );
}

export default App;

