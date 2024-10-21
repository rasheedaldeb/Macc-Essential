/* eslint-disable react/prop-types */
import "./HomeHero.scss";
const HomeHero = ({ title, subtitle, btn }) => {
  return (
    <section
      className=" gap-5 md:justify-between
    p-[120px_20px_55px] md:p-[150px_49px_55px] md:mb-24 mb-16  flex flex-col md:flex-row items-center justify-center"
    >
      <div className="left lg:w-[47%] md:w-1/2 w-full">
        <h1 className="text-[40px] lg:text-[54px] font-bold text-primary pt-5">
          {title}
        </h1>
        <p className="text-text leading-7">
          <span className="font-bold">MACC Essentials</span>
          {subtitle}
        </p>
        <button className="mt-5">{btn}</button>
      </div>
      <div className="right lg:w-[47%] lg:h-[500px] md:w-1/2 w-full pt-10">
        <img src="/images/home-hero.png" alt="" className="h-full w-full" />
      </div>
    </section>
  );
};

export default HomeHero;
