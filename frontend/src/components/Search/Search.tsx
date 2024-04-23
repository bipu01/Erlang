import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchedProducts, setSearchedProducts] = useState<Array<any>>([]);
    console.log(searchedProducts)

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setSearchedProducts([]);
    }

    const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:3000/api/search/searchProduct?q=${searchTerm}`);
            if (res.status === 200) {
                setSearchedProducts(res.data);
                navigate(`/searchedProducts?searchTerm=${searchTerm}`, { state: { searchedProducts: res.data } }); //sending searcheddata to the next page in the url as state
            }
        } catch (error) {
            console.log("error finding product:", error);
        }
    }
    
    return (
        <div className=" relative">
            <div className=" bg-bgLightBlue rounded-2xl overflow-hidden">
                <form onSubmit={handelSubmit} className=" flex items-center gap-2">
                    <input
                        type="text"
                        id="search"
                        placeholder="Search item"
                        className=" bg-bgLightBlue px-4 py-2 outline-none"
                        onChange={handleChange}
                    />
                    <div className=" bg-bgLightBlue px-4 pt-1">
                        <button type="submit">
                            <img src="./icons/search.png" alt="" className=" h-5 w-5 object-cover" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}
