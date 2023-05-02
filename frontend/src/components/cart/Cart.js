import React, { Fragment } from 'react'
import './cart.css'
import Footer from '../layout/Footer/Footer'
import SignInHeader from '../layout/Header/SignInHeader'
import Header from '../layout/Header/Header'
import { Toaster } from 'react-hot-toast'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import CartItemCard from './CartItemCard'
import { addItemsToCart, removeItemsFromCart } from '../../action/cartAction'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
const Cart = (props) => {
    const dispatch = useDispatch();
    const {cartItems} = useSelector((state)=>state.cart)
    const increaseQuantity = (id, quantity, stock)=>{
        const qty = quantity+1;
        if(stock <= quantity)
        {
            return;
        }
        dispatch(addItemsToCart(id, qty))
    }
    const decreaseQuantity = (id, quantity)=>{
        const qty = quantity-1;
        if(1 >= quantity)
        {
            return;
        }
        dispatch(addItemsToCart(id, qty))
    }
    const removeCartItems = (id)=>
    {
        dispatch(removeItemsFromCart(id));
    }
  return (
    <Fragment>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      {props.isAuthenticated ? (
        <Header user={props.user} isAuthenticated={props.isAuthenticated} />
      ) : (
        <SignInHeader />
      )}
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <div className="cartPage">
          <div className="cartHeader">
            <p>Product</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>

          {cartItems &&
            cartItems.map((item) => (
              <div className="cartContainer" key={item.product}>
                <CartItemCard deleteCartItems={removeCartItems} item={item} />
                <div className="cartInput">
                  <button
                    onClick={() =>
                      decreaseQuantity(item.product, item.quantity)
                    }
                    className="quantity__button"
                  >
                    -
                  </button>
                  <input
                    className="quantity__input"
                    value={item.quantity}
                    type="number"
                    readOnly={true}
                  />
                  <button
                    onClick={() =>
                      increaseQuantity(item.product, item.quantity, item.stock)
                    }
                    className="quantity__button"
                  >
                    +
                  </button>
                </div>
                <p className="cartSubtotal">{`₹${
                  item.price * item.quantity
                }`}</p>
              </div>
            ))}

          <div className="cartGrossProfit">
            <div></div>
            <div className="cartGrossProfitBox">
              <p>Gross Total</p>
              <p>{`₹${cartItems.reduce(
                (acc, item) => acc + item.quantity * item.price,
                0
              )}`}</p>
            </div>
            <div></div>
            <div className="checkOutBtn">
              <button>Check Out</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </Fragment>
  );
}

export default Cart