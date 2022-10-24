import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";
import "./cart.scss";
import { cartActions } from "../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";
import { loadingActions } from "../../redux/features/LoadingSlice";

const Cart = () => {
  const [carts,setCarts] = useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch();
 useEffect(() => {
       const cart = JSON.parse(localStorage.getItem("carts"))
       setCarts(cart)
  },[carts.length,dispatch])
  let total = 0;
  carts.forEach((cartItem) => {
    total += cartItem.totalPrice;
  });

  return (
    <div className="cart">
      {carts.length > 0 ? (
        <div className="left-container">
          <div className="headers">
            <h3>Product</h3>
            <h3>Name</h3>
            <h3>Price</h3>
            <h3>quantity</h3>
            <h3>Total Price</h3>
          </div>
          <div className="cartItems">
            {carts.map((item, indx) => (
              <div className="item" key={indx}>
                <img src={item.img} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>{item.totalPrice}</p>
                <button>
                  <MdOutlineDelete
                    className="icon"
                    onClick={() => {
                      dispatch(cartActions.removeItem(item));
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
          <button
        style={{
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          fontSize: "15px",
          cursor: "pointer",
          width:"20%",
          margin:"5% 20%"
        }}
        onClick={() => navigate(-2)}
      >
        back to shopping
      </button>
        </div>
      ) : (
        <div className="emptyOrder">
          <h1>your cart is empty</h1>
          <button onClick={() => navigate("/")}>back to home</button>
        </div>
      )}
      {carts.length > 0 && (
        <div className="checkOut">
          <div>
            <h1>Cart Total</h1>
            <h3>subtotal: {total} birr</h3>
            <h3>discount: 0.00 birr</h3>
            <h3>total : {total} birr</h3>
          </div>
          <button>CHECK OUT NOW</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
