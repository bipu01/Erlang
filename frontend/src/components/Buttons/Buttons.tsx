export const PrimaryButton = () => {
  return <div>PrimaryButton</div>;
};

export const SecondaryButton = () => {
  return <div>SecondaryButton</div>;
};

export const TertiaryButton = () => {
  return <div>TertiaryButton</div>;
};

export const AddToCartButton = () => {
  return (
    <>
      <button className=" bg-primaryBlue text-bodybg py-1 lg:py-2 px-2 lg:px-5 text-md lg:text-xl 3xl:text-xl items-center rounded-md flex gap-2 whitespace-nowrap">
        Add to cart
        <img src="/icons/whiteCartMedium.svg" alt="whiteCart" />
      </button>
    </>
  );
};
