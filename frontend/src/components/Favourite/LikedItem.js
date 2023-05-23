import React, { Fragment } from 'react'
import '../cart/cart.css'
import Footer from '../layout/Footer/Footer'
import SignInHeader from '../layout/Header/SignInHeader'
import Header from '../layout/Header/Header'
import { Toaster } from 'react-hot-toast'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { Link} from 'react-router-dom'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { removeItemsFromLike } from '../../action/likeAction'
const Liked = (props) => {
    const dispatch = useDispatch();
    const { likeItems } = useSelector((state) => state.favourite);
    const removeLikedItems = (id)=>
    {
        dispatch(removeItemsFromLike(id));
    }
  return (
    <Fragment>
      <Helmet>
        <title>Favourite</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      {props.isAuthenticated ? (
        <Header user={props.user} isAuthenticated={props.isAuthenticated} />
      ) : (
        <SignInHeader />
      )}
      {likeItems.length === 0 ? (
        <div className="emptyCart">
          <FavoriteBorderIcon />

          <Typography>No Product to show</Typography>
          <Link
            style={{ borderRadius: "4px", marginTop: "0.5rem" }}
            to="/products"
          >
            View Products
          </Link>
        </div>
      ) : (
        <div className="cartPage">
          <div className="cartHeader">
            <p style={{ textAlign: "left" }}>Products</p>
          </div>

          {likeItems &&
            likeItems.map((item) => (
              <div className="cartContainer" key={item.product}>
                <div
                  className="CartItemCard card__responsive"
                >
                  <img src={item.image} alt="ssa" />
                  <div>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                    <span>{`Price: ₹${item.price}`}</span>
                  </div>
                  <p className='remove__button' onClick={() => removeLikedItems(item.product)}>Remove</p>
                </div>
              </div>
            ))}
        </div>
      )}
      <Footer />
    </Fragment>
  );
}

export default Liked;