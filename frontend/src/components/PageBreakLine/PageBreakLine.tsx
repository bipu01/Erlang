const PageBreakLine = () => {
  return (
    <div className="space-y-2 relative">
      <div className=" w-100% h-1 bg-lineColor"></div>
      <div className=" w-100% h-1 bg-lineColor"></div>
      <img
        src="/icons/lineDesign.svg"
        alt=""
        className="absolute h-12 -top-6 w-20vw lg:w-15vw left-40vw lg:left-42vw "
      />
    </div>
  );
};

export default PageBreakLine;
