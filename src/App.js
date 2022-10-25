
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import AddProduct from './pages/AddProducts/AddProduct';
import Cart from './pages/cart/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Navbar from './pages/Navbar/Navbar';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Products from './pages/products/Products';
import SignUp from './pages/SignUp/SignUp';
import Search from './search/Search';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path="/products/:category" element={<Products/>}/>
        <Route path="products/:category/:id" element={<ProductDetail/>}/>
        <Route element={<AddProduct/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;
