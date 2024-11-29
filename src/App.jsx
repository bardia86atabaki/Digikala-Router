import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Singelblogs from './Pages/Singelblogs';
import Bloga from './Pages/Bloga';
import Plus from './Pages/Plus';
import Orders from './Pages/Orders';
import Favorites from './Pages/Favorites';
import Comments from './Pages/Comments';
import Layout from './Commponent/Layout';
import Activiti from './Pages/Activiti';
import CurrentOrders from './Pages/CurrentOrders';
import DeliveredOrders from './Pages/DeliveredOrders';
import ReturnedOrders from './Pages/ReturnedOrders';
import CancelledOrders from './Pages/CancelledOrders';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blogs/:blogsId" element={<Singelblogs />} />
        <Route path="/Bloga" element={<Bloga />} />
        <Route path="/plus" element={<Plus />} />
        <Route path="/orders" element={<Orders />}>
          <Route path="current" element={<CurrentOrders />} />
          <Route path="delivered" element={<DeliveredOrders />} />
          <Route path="returned" element={<ReturnedOrders />} />
          <Route path="cancelled" element={<CancelledOrders />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/Activiti" element={<Activiti />} />
        <Route path="/comments" element={<Comments />} />
      </Route>
    </Routes>
  );
}

export default App;
