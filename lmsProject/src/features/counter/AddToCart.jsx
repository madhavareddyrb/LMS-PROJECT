import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addItem, removeItem, deleteAll } from "./AddToCart";

export function AddToCart() {
  const value = useSelector((state) => state);
  console.log(value);
}
