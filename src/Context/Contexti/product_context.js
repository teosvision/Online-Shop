import { useContext } from "react";
import { createContext } from "react";
import { useState, useEffect, useReducer } from "react";
import products_reducer from "../reducer/products_reducer";
import axios from "axios";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../utilis/actions";

const initalState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = createContext();
const url = "https://course-api.com/react-store-products";

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(products_reducer, initalState);

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios(url);
      const products = response.data;
      console.log({ products });
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const resp = await axios.get(url);
      const singleProduct = resp.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  {
    return (
      <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
        {children}
      </ProductsContext.Provider>
    );
  }
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
