import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Subscribe from './pages/Subscribe/Subscribe';
import ListingNew from './pages/ListingNew/ListingNew';
// import Subscribe from './pages/Subscribe/Subscribe';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/listing/new" element={<ListingNew />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
