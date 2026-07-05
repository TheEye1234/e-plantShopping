import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../features/cart/cartSlice";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalPlants = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <div className="cart-summary">
        <h3>Total Plants: {totalPlants}</h3>
        <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
      </div>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="cart-image"
            />

            <div className="cart-details">
              <h2>{item.name}</h2>
              <p>Unit Price: ${item.price}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>

              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item)}>
                  +
                </button>
              </div>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}

      <div className="cart-buttons">
        <Link to="/products">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>

        <button
          className="checkout-btn"
          onClick={() => alert("Coming Soon!")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
