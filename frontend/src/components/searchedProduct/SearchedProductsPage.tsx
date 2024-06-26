// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { product } from "../../store/type";
import Star from "../../SVG/Star";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { addOpenedProduct } from "../../store/openedPostSlice";

export default function SearchedProductsPage() {
  const [searchedProducts, setSearchedProducts] = useState([]);

  // showing rating based on the rate
  type Rating = {
    ratingRate: number;
    ratingCount: number;
  };
  const renderStarRating = (prop: Rating) => {
    const stars = [];
    for (let i = 0; i < Math.ceil(prop.ratingRate); i++) {
      stars.push(<Star key={i + 900} />);
    }
    const emptyStars = 5 - Math.ceil(prop.ratingRate);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={i} fillColor="transparent" />);
    }
    // let int = 123;
    return stars;
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const sessionSearchedProducts = JSON.parse(
      sessionStorage.getItem("searchedProducts") || ""
    );
    sessionStorage.setItem(
      "lastVisitedPage",
      JSON.stringify(window.location.href)
    );

    const findClickedProduct = sessionSearchedProducts.filter(
      (currentValue: product) => {
        return currentValue._id === e.currentTarget.id;
      }
    );

    sessionStorage.setItem(
      "openedProduct",
      JSON.stringify(findClickedProduct[0])
    );
  };
  const searchStatus = useSelector((state: Array<product>) => {
    return state[0];
  });

  useEffect(() => {
    setSearchedProducts(
      JSON.parse(sessionStorage.getItem("searchedProducts") || "")
    );
  }, [searchStatus]);

  return (
    <div className=" bg-bodybg h-screen ">
      <div className="px-2 sm:px-5 md:px-10 pb-15vh">
        <div className="py-12 pt-16">
          <h1 className="text-2xl font-semibold text-primaryBlue">
            Similar results:
          </h1>
        </div>
        <div>
          {searchedProducts ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-10 ">
              {searchedProducts.map((product: product) => (
                <Link to={"/product"} key={product._id}>
                  <div
                    id={product._id}
                    className="bg-bodybg shadow-customSearchProduct rounded-lg  p-2 pb-6 hover:cursor-pointer"
                    onClick={handleClick}
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
                        <p className=" text-lg font-semibold pt-4 px-2 text-primaryBlue line-clamp-2">
                          {product.name}
                        </p>
                      </div>
                      <div className=" flex justify-between pt-4 px-2">
                        <div className=" flex gap-4 opacity-70 items-center ">
                          <div className=" flex gap-1">
                            {renderStarRating({
                              ratingRate: product.ratingRate,
                              ratingCount: product.ratingCount,
                            } as Rating)}
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
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-16">
              <h1 className="text-2xl font-medium text-center text-primaryBlue opacity-40">
                Sorry!! <br />
                No such product
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
