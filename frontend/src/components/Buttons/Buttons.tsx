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
      <button className=" bg-primaryBlue text-bodybg py-2 px-5 rounded-md flex gap-2">
        Add to cart
        <img src="/icons/whiteCartMedium.svg" alt="whiteCart" />
      </button>
    </>
  );
};
