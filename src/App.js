import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCatagory from './Pages/ShopCatagory';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Items/banner_man.avif';
import women_banner from './Components/Items/banner_women.avif';
import kids_banner from './Components/Items/banner_kids.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop catagory="Shop" />} />
          // In your routes file (App.js or wherever you define the routes)
<Route path="/mens" element={<ShopCatagory category="men" banner={men_banner} />} />
<Route path="/womens" element={<ShopCatagory category="women" banner={women_banner} />} />
<Route path="/kids" element={<ShopCatagory category="kid" banner={kids_banner} />} />

          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
