
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCatagory from './Pages/ShopCatagory';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Items/banner_man.avif'
import women_banner from './Components/Items/banner_women.avif'
import kids_banner from './Components/Items/banner_kids.jpg'

function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop catagory="Shop"/>}/>
        <Route path='/mens' element={<ShopCatagory banner={men_banner}catagory="men"/>}/>
        <Route path='/womens' element={<ShopCatagory banner={women_banner}catagory="women"/>}/>
        <Route path='/kids' element={<ShopCatagory banner={kids_banner}catagory="kid"/>}/>

        <Route path="/product" element={<Product/>}>
        <Route path="/productId" element={<Product/>}/>
        </Route>
   
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>



        
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
