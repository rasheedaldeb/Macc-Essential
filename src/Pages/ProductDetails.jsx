import ProductDetail from "../Components/ProductDetail/ProductDetail";
import Products from "../Components/Products/Products";
import SectionHeading from "../Components/SectionHeading";

const ProductDetails = () => {
  return (
    <div>
      <ProductDetail />
      <SectionHeading
        subtitle="YOU MAY ALSO LIKE"
        color="rgba(34, 34, 34, 1)"
      />
      <Products />
    </div>
  );
};

export default ProductDetails;
