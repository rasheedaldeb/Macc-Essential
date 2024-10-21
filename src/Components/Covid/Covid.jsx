import SectionHeading from "../SectionHeading";
const Covid = () => {
  return (
    <div className="md:pt-[80px] pt-[50px] pb-[40px] flex flex-col items-center ">
      <SectionHeading
        title="COVID-19"
        subtitle="GUIDELINES"
        color="rgba(74, 75, 77, 1)"
      />
      <p className="max-w-[650px] text-center text-text">
        Please remember to adhere all covid-19 guidelines. Precaution is key to
        survive this pandemic. Stay at home and Stay safe.
      </p>
    </div>
  );
};

export default Covid;
