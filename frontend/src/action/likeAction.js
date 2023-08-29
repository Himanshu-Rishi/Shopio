import axios from "axios";
import { ADD_TO_LIKE, REMOVE_LIKED_ITEM } from "../constants/likeConstants";
const url = "https://shopio-backend.onrender.com";

export const addItemsToLike = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`${url}/api/v1/product/${id}`);
  dispatch({
    type: ADD_TO_LIKE,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.stock,
      quantity,
    },
  });
  localStorage.setItem(
    "likeItems",
    JSON.stringify(getState().favourite.likeItems)
  );
};

export const removeItemsFromLike = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_LIKED_ITEM,
    payload: id,
  });
  localStorage.setItem(
    "likeItems",
    JSON.stringify(getState().favourite.likeItems)
  );
};
