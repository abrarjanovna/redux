import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { clearCart } from "../features/cart/cartSlice";
import { SiGithub } from "react-icons/si";

export default function Products() {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>{total} $</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>
        </footer>
        <footer>
          <a href="https://github.com/abrarjanovna/redux">
            <SiGithub />
          </a>
        </footer>
      </div>
    </section>
  );
}
