import { useLocation } from "react-router-dom";

export default function SearchedProductsPage() {
  const location = useLocation();
  const searchedProducts: any[] = location.state?.searchedProducts || [];

  // showing rating based on the rate
  const renderStarRating = (starCount: number) => {
    const stars = [];
    const filledStarUrl = "/icons/filledStar.svg";
    const emptyStarUrl = "/icons/unfilledStar.svg";
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          key={i}
          src={i < starCount ? filledStarUrl : emptyStarUrl}
          alt={i < starCount ? "filled star" : "empty star"}
          className="w-4 h-4"
        />
      );
    }
    return stars;
  };

  return (
    <div className=" bg-bodybg h-screen ">
      <div className="px-2 sm:px-5 md:px-10 ">
        <div className="py-12 pt-16">
          <h1 className="text-2xl font-semibold text-primaryBlue">
            Similar results:
          </h1>
        </div>
        <div>
          {searchedProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-10 ">
              {searchedProducts.map((product, index) => (
                <div
                  className="bg-bodybg shadow-customSearchProduct rounded-lg  p-2 pb-6 "
                  key={index}
                >
                  <div className="rounded-lg w-full ">
                    <div className="h-25rem">
                      <img
                        className=" w-100% h-100% aspect-square object-cover object-top rounded-lg "
                        src={product.img1}
                        alt={product.img1}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <p className=" text-base font-medium pt-4 px-2 text-primaryBlue">
                        {product.name}
                      </p>
                    </div>
                    <div className=" flex justify-between pt-4 px-2">
                      <div className=" flex gap-4 opacity-70 items-center ">
                        <div className=" flex gap-1">
                          {renderStarRating(product.ratingRate)}
                        </div>
                        <p className=" text-base font-bold opacity-100 text-primaryBlue">
                          {product.ratingCount}
                        </p>
                      </div>
                      <div className="text-base font-medium opacity-70">
                        <p className=" "> NPR {product.priceCurrent}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex mt-52 ml-96">
              <div className="flex flex-col items-center">
                <h1 className="text-6xl font-bold text-center mx-16">
                  Sorry!!
                </h1>
                <h1 className="text-6xl font-bold text-center mx-16">
                  No such product...
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
