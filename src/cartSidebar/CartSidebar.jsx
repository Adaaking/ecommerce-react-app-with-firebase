import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../redux/features/cartSlice";
import "./cartSidebar.scss";
const CartSidebar = () => {
  const cartItems = useSelector((state) => state.cartReducer.carts);
  const showCart = useSelector((state) => state.cartReducer.showCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let total = 0;
  cartItems.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <div className={showCart ? "cartSidebar active" : "cartSidebar inactive"}>
      {cartItems.length > 0 ? (
        <>
          <div className="cartHeader">
            <h3>name</h3>
            <h3>price</h3>
            <h3>total price</h3>
            <h3>quantity</h3>
          </div>
          <div className="cartItems">
            {cartItems.map((cartItem, indx) => (
              <div className="cartItem" key={indx}>
                <h4>{cartItem.name}</h4>
                <p>{cartItem.price}</p>
                <p>{cartItem.totalPrice}</p>
                <div className="quantity">
                  <button
                    onClick={() =>
                      dispatch(cartActions.decreaseItem(cartItem.id))
                    }
                  >
                    -
                  </button>
                  <h3 style={{ color: "red" }}>{cartItem.quantity}</h3>
                  <button
                    onClick={() =>
                      dispatch(
                        cartActions.increaseItem({
                          id: cartItem.id,
                          name: cartItem.name,
                          price: Number(cartItem.price),
                          quantity: cartItem.quantity,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <hr className="hr" />
          <div className="total">
            <p>total price: <span style={{color:"red"}}>{total} birr</span></p>
            <button onClick={() => navigate("/cart")}>CheckOut</button>
          </div>
        </>
      ) : (
        <div className="emptyCart">
          <h1>you cart is empty</h1>
          <button onClick={() => navigate("/")}>shop now</button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
