import React from "react";
import "./navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "../../redux/features/sidebarSlice";
import { Link, useNavigate } from "react-router-dom";
import CartSidebar from "../../components/cartSidebar/CartSidebar";
import { cartActions } from "../../redux/features/cartSlice";
import { loginActions } from "../../redux/features/loginSlice";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  const items = useSelector((state) => state.cartReducer.carts);
  const user = useSelector((state) => state.loginReducer.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {};
  return (
    <div className="navbar">
      <Sidebar />
      <div className="menu">
        <AiOutlineMenu
          className="menuIcon"
          onClick={() => dispatch(sidebarActions.openSidebar())}
        />
      </div>
      <form className="search" onSubmit={handleSubmit}>
        <input type="text" placeholder="search by category" required />
        <button type="submit" onClick={() => navigate("")}>
          search
        </button>
      </form>
      {user ? (
        <div className="right">
          <Link to="/orders">
            <FaUserAlt style={{ fontSize: "30px", color: "coral" }} />
          </Link>
          <Link onClick={() => dispatch(loginActions.logOut())}>Logout</Link>
        </div>
      ) : (
        <div className="right">
          <Link to="/signup">signup</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
      <Link
        className="cartbtn"
        onClick={() => dispatch(cartActions.showCart())}
      >
        <FiShoppingCart
          className="shoppingCart"
        />
        <p className="cartItemNumber">{items.length}</p>
      </Link>
      <CartSidebar />
    </div>
  );
};

export default Navbar;
