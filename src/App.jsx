import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { useDispatch, useSelector } from "react-redux";
import { total } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);
  return (
    <>
      <Navbar />
      <Products />
    </>
  );
}

export default App;
