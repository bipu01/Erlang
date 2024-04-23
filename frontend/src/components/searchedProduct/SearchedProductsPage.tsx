import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { paddingForPage } from "../../defineSize";

export default function SearchedProductsPage() {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const searchedProducts: any[] = location.state?.searchedProducts || [];

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchTermParam = params.get("searchTerm");
        if (searchTermParam) {
            setSearchTerm(searchTermParam);
        }
    }, [location.search]);

    const renderStarRating = (starCount: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={i < starCount ? 'text-yellow-500 text-2xl' : 'text-2xl'}>&#9733;</span>
            );
        }
        return stars;
    };
    

    return (
        <div className={`${paddingForPage}`}>
            <div className="mt-5">
                <h1 className='text-4xl text-center font-medium font-serif'>Searched Items</h1>
            </div>
            <div className="my-4">
                <p className="text-xl text-black">{searchedProducts.length} items found for "{searchTerm}"</p>
            </div>
            <div>
                {searchedProducts.length > 0 ? (
                    <div className="flex flex-wrap justify-between rounded-lg">
                        {searchedProducts.map((product, index) => (
                            <div className="bg-gray-200 rounded-lg" key={index}>
                                <div className="flex flex-col">
                                    <div>
                                        <img className='w-60 h-80 object-cover rounded-md' src={product.image.image1} alt="" />
                                    </div>
                                    <div className="w-60">
                                        <p className='text-lg font-medium text-center py-2'>{product.name}</p>
                                        <div className="text-center">
                                        {renderStarRating(product.rating.rate) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex mt-52 ml-96">
                        <div className="flex flex-col items-center">
                            <h1 className='text-6xl font-bold text-center mx-16'>Sorry!!</h1>
                            <h1 className='text-6xl font-bold text-center mx-16'>No such product...</h1>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
