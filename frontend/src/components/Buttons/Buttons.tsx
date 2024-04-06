import CartIcon from "../../SVG/CartIcon";
import { buttonProp, buttonPropInterface } from "../../declare";
import { sizeOfLessMajorText } from "../../defineSize";

export const BuyNowBtn = (prop: buttonPropInterface) => {
  return (
    <button
      className={`${
        prop.primary
          ? "bg-primaryBlue text-bodybg rounded-full"
          : "bg-bodybg text-primaryBlue rounded-full"
      } px-3vw sm:px-5vw py-2 sm:py-3 ${sizeOfLessMajorText}  
  items-center flex gap-1 sm:gap-2 font-normal sm:font-medium
  whitespace-nowrap`}
    >
      {prop.text}
    </button>
  );
};

export const SecondaryButton = () => {
  return <div>SecondaryButton</div>;
};

export const TertiaryButton = () => {
  return <div>TertiaryButton</div>;
};

export const AddToCartButton = (prop: buttonPropInterface) => {
  return (
    <>
      <button
        className={`${
          prop.primary
            ? "bg-primaryBlue text-bodybg rounded-md px-3vw sm:px-4 lg:px-5"
            : "bg-bodybg text-primaryBlue rounded-full py-2 sm:py-3 px-3vw sm:px-4vw "
        } ${sizeOfLessMajorText}  py-2 sm:py-3
        items-center flex gap-1 sm:gap-2 font-normal sm:font-medium
        whitespace-nowrap`}
      >
        {prop.text}
        <CartIcon borderColor="#1C244B" custom="h-6 w-6" borderThickness={2} />
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
