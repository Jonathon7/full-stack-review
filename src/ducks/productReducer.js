import axios from "axios";

const initialState = {
  products: [],
  session: null
};

const GET_PRODUCTS = "GET_PRODUCTS";
const GET_SESSION = "GET_SESSION";

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_PRODUCTS}_FULFILLED`:
      return {
        ...state,
        products: payload
      };
    case `${GET_SESSION}_FULFILLED`:
      console.log(payload);
      return {
        ...state,
        session: payload
      };
    default:
      return state;
  }
}

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
    payload: axios.get("/api/products").then(response => response.data)
  };
};

export const getSession = () => {
  return {
    type: GET_SESSION,
    payload: axios.get("/api/auth/session").then(response => response.data)
  };
};
