import axios from "axios";
import React, {  useState } from "react";
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
        <div className=" relative pb-1 sm:pb-0">
            <div className="">
                <form onSubmit={handelSubmit} >
                    <input
                        type="text"
                        id="search"
                        placeholder="Search"
                        className="bg-bodybg  xmd:px-4 py-1 outline-none border-[1px] border-black rounded-md"
                        onChange={handleChange}
                    />
                </form>
            </div>
        </div>
    );
}
