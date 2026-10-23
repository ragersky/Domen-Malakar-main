const PricingPlanTitle = (props) => {
  return (
    <div>
      <h3 className="text-[35px] lg:text-[40px] leading-none mb-5 font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_1.5px_1.5px_rgba(0,0,255,0.75)]">
        {props?.planTitle}
      </h3>
      <p className="!mb-9 !text-xl md:w-10/12 w-full mx-auto !text-center ">
        {props?.planDescription}
      </p>
    </div>
  );
};

export default PricingPlanTitle;
