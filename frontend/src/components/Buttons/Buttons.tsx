import { buttonProp } from "../../declare";
import { sizeOfMajorText } from "../../defineSize";

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
      <button
        className={`bg-primaryBlue text-bodybg py-1 px-3vw sm:px-4 lg:px-5 ${sizeOfMajorText} 
        items-center rounded-md flex gap-1 sm:gap-2 font-normal sm:font-medium
        whitespace-nowrap`}
      >
        Add to cart
        <img
          src="/icons/whiteCartMedium.svg"
          alt="whiteCart"
          className="hidden sm:block object-cover"
        />
      </button>
    </>
  );
};

export const OptionsPanelBtn = (prop: buttonProp) => {
  if (prop.active) {
    return (
      <>
        <button className="bg-primaryBlue text-bodybg py-1 px-4 xmd:px-8  rounded-sm">
          {prop.text}
        </button>
      </>
    );
  }
  return (
    <>
      <button className=" bg-bgLightBlue text-primaryBlue py-1 px-4 xmd:px-8 rounded-sm">
        {prop.text}
      </button>
    </>
  );
};
