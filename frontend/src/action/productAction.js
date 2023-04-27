import axios from 'axios'
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_DEATILS_FAIL,
  PRODUCT_DEATILS_SUCCESS,
  PRODUCT_DEATILS_REQUEST,
} from "../constants/productConstants";
export const getProduct =
  (keyword = "", currentPage = 1, price = [0, 25000], category, Ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_PRODUCT_REQUEST,
      });

      let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gt]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${Ratings}`;
      if (category) {
        if (category === "All") {
          link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gt]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${Ratings}`;
        } else {
          link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gt]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${Ratings}`;
        }
      }
      const { data } = await axios.get(link);
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DEATILS_REQUEST,
    });
    const { data } = await axios.get(`/api/v1/product/${id}`);
    dispatch({
      type: PRODUCT_DEATILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DEATILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = ()=>async(dispatch)=>
{
    dispatch({
        type: CLEAR_ERRORS
    })
}