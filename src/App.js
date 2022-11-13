
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import AddProduct from './pages/AddProducts/AddProduct';
import Cart from './pages/cart/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Navbar from './pages/Navbar/Navbar';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Products from './pages/products/Products';
import SignUp from './pages/SignUp/SignUp';
import Search from './components/search/Search';
import Loading from './components/loading/Loading';
import { useSelector } from 'react-redux';

function App() {
  const IsLoading = useSelector(state => state.loader.IsLoading)
  return (
    <Router>
      {IsLoading && <Loading/>}
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
