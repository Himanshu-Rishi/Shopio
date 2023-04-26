import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../action/productAction";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loader from "../layout/Loader/Loader";
import { toast, Toaster } from "react-hot-toast";
import ProductCard from './Card/ProductCard'
const SpecificProduct = (props) => {
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  const text = props.sync;
  let { id } = useParams();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch]);

  // error alert
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error]);
  return (
    <>
      <Helmet>
        <title>{props.page} Page</title>
      </Helmet>
      {loading ? <Loader /> : <ProductCard product={product} />}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default SpecificProduct;
