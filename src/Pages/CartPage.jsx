import Cart from "../Components/Cart/Cart";
import CartHero from "../Components/CartHero/CartHero";
import SectionHeading from "../Components/SectionHeading";

const CartPage = () => {
  return (
    <div>
      <CartHero />
      <SectionHeading
        title="Your"
        subtitle=" Cart"
        color="rgba(58, 64, 140, 1)"
      />
      <Cart />
    </div>
  );
};

export default CartPage;
