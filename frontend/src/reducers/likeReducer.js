import { ADD_TO_LIKE, REMOVE_LIKED_ITEM } from "../constants/likeConstants";

export const likeReducer = (
  state = { cartItems: [], shippingInfo: {} },
  action
) => {
  switch (action.type) {
    case ADD_TO_LIKE:
      const item = action.payload;
      const isItemExist = state.likeItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          likeItems: state.likeItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          likeItems: [...state.likeItems, item],
        };
      }

    case REMOVE_LIKED_ITEM:
      return {
        ...state,
        likeItems: state.likeItems.filter((i) => i.product !== action.payload),
      };

    default:
      return state;
  }
};
