import * as ActionTypes from "./actionTypes";

const initialState = {
  isloading: true,
  success: "",
  message: "",
  totalData: "",
  products: [],
  product: "",
  recentlyAdded: [],
  errMsg: "",
};

export const Product = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        isloading: false,
        // success: action.payload.success,
        message: action.payload.message,
      };

    case ActionTypes.GET_ALL_PRODUCT:
      return {
        ...state,
        isloading: false,
        success: action.payload.success,
        products: action.payload.data,
        totalData: action.payload.totalData,
      };

    case ActionTypes.GET_PRODUCT_BY_ID:
      return {
        ...state,
        isloading: false,
        success: action.payload.success,
        product: action.payload.data,
      };

    case ActionTypes.GET_RECENTLY_ADDED_PRODUCT:
      return {
        ...state,
        isloading: false,
        success: action.payload.success,
        recentlyAdded: action.payload.data,
      };

    default:
      return state;
  }
};
