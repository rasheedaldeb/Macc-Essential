import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import ProductDetail from "./ProductDetail/ProductDetail";
import Products from "./Products/Products";
import SectionHeading from "./SectionHeading";

const ProductDetailsSection = () => {
  const { id } = useParams();
  const [singleData, setsingleData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/${id}`
        );
        const products = await response.data.data;
        setsingleData(products);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ClipLoader size={100} />
      </div>
    );
  }
  return (
    <div className="w-full">
      <ProductDetail
        img={`${import.meta.env.VITE_API_URL}/${singleData.image}`}
        price={singleData.price - singleData.discount * 0.01 * singleData.price}
        name={singleData.name}
        id={singleData.id}
        dis={singleData.discount}
      />
      <SectionHeading
        subtitle="YOU MAY ALSO LIKE"
        color="rgba(34, 34, 34, 1)"
      />
      <Products />
    </div>
  );
};

export default ProductDetailsSection;
