/* eslint-disable react/prop-types */
const SectionHeading = ({ title, subtitle, color }) => {
  return (
    <div className="flex items-center justify-center">
      <h2
        className=" mb-[30px]
      text-[25px] md:text-[36px] font-bold "
        style={{ color: `${color}` }}
      >
        <span className="text-secondary">{title}</span>
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionHeading;
