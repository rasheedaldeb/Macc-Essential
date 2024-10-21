import Covid from "../Components/Covid/Covid";
import HomeHero from "../Components/HomeHero/HomeHero";
import Products from "../Components/Products/Products";
import SectionHeading from "../Components/SectionHeading";
import Discount from "../Components/Selles/Discount";

const Home = () => {
  return (
    <div>
      <HomeHero
        title="PROVIDING SERVICES AT YOUR DOOR"
        subtitle=" has an important role in making supplies and services available to customers and their patients during this critical time. This includes services from various domains. Our aim is to aid you. As much we can."
        btn="LEARN MORE"
      />
      <SectionHeading
        title="NEW"
        subtitle="PRODUCTS"
        color="rgba(58, 64, 140, 1)"
      />
      <Products />
      <Discount img="/images/discount.webp" />

      <Covid />
    </div>
  );
};

export default Home;
