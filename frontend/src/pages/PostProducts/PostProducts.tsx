import { useEffect, useState } from "react";
import { paddingForPage } from "../../defineSize";
import axios from "axios";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const PostProducts = () => {
  const [image, setImage] = useState<File>();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(Number);
  const [isFeatured, setIsFeatured] = useState(false);
  const [category, setCategory] = useState("dress");
  const [postStatus, setPostStatus] = useState(99);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.currentTarget.value);
  };
  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.currentTarget.value);
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(e.currentTarget.value));
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgPreview = document.getElementById("img-preview");
    if (e.currentTarget.files) {
      setImage(e.currentTarget.files[0]);
      const imgURL = URL.createObjectURL(e.currentTarget.files[0]);
      if (imgPreview) {
        imgPreview.style.backgroundImage = `url(${imgURL})`;
      }
    }
  };

  let imgURL: string;
  const uploadAndGetImgURL = async () => {
    if (image == null) return;

    const imgRef = ref(storage, `/products/dress/${image.name + v4()}`);
    try {
      await uploadBytes(imgRef, image);
      const productImgUrl = await getDownloadURL(imgRef);
      imgURL = productImgUrl;
      // setUploadedImgUrl(productImgUrl);
    } catch (error) {
      alert(error);
    }
  };
  const uploadAllData = async () => {
    if (title != "" && desc != "" && price != null && image != null) {
      setPostStatus(1); //Uploads the image selected by the user
      await axios.post(`http://localhost:3000/api/postProduct`, {
        title: title,
        price: price,
        desc: desc,
        image: imgURL,
        rating: {
          rate: 0,
          count: 0,
        },
        category: category,
        featured: isFeatured,
      });
      console.log("upload all data is fired ");
    } else {
      setPostStatus(0);
    }
  };

  // It checks if the form is filled and help to throw dialouge box
  const handleSubmit = async () => {
    await Promise.all([uploadAndGetImgURL()]);
    console.log("handle submit is fired");
    await uploadAllData();
  };

  useEffect(() => {
    if (postStatus == 1) {
      const postSuccessCard = document.getElementById(
        "postSuccessCardContainer"
      );
      if (postSuccessCard) {
        postSuccessCard.style.display = `block`;
        //   e.currentTarget.style.visibility = `hidden`;
      }
    } else if (postStatus == 0) {
      const postFailedCard = document.getElementById("postFailedCardContainer");
      if (postFailedCard) {
        postFailedCard.style.display = `block`;
        //   e.currentTarget.style.visibility = `hidden`;
      }
    }
  }, [postStatus]);

  useEffect(() => {
    makeFailedDialougeBoxInvisible();
    makeSuccessDialougeBoxInvisible();
    console.log(postStatus);
  }, []);

  const makeFailedDialougeBoxInvisible = () => {
    const postFailedCard = document.getElementById("postFailedCardContainer");
    if (postFailedCard) {
      postFailedCard.style.display = `none`;
      setPostStatus(99);
    }
  };

  const makeSuccessDialougeBoxInvisible = () => {
    const postSuccessCard = document.getElementById("postSuccessCardContainer");
    if (postSuccessCard) {
      postSuccessCard.style.display = `none`;
      setPostStatus(99);
    }
  };

  return (
    <>
      <div className={` ${paddingForPage} mt-5vh pb-24 `}>
        {postStatus ? (
          <div
            id="postSuccessCardContainer"
            onClick={makeSuccessDialougeBoxInvisible}
            className=" absolute w-100vw h-120vh top-0 left-0 bg-[rgba(0,0,0,0.3)]"
          >
            <div
              //   id="postSuccessCard"
              className=" fixed top-8vh left-25vw rounded-md text-center py-4 text-xl font-medium text-bodybg w-50vw  bg-primaryBlue"
            >
              Product Successfully Posted <br />
              <span className=" text-base font-base">"Click anywhere "</span>
            </div>
          </div>
        ) : (
          <div
            id="postFailedCardContainer"
            onClick={makeFailedDialougeBoxInvisible}
            className="  absolute w-100vw h-120vh top-0 left-0 bg-[rgba(0,0,0,0.3)]"
          >
            <div
              //   id="postFailedCard"
              className=" fixed top-8vh left-25vw rounded-md text-center py-4 text-xl font-medium text-bodybg w-50vw  bg-red-950"
            >
              Product post failed <br />
              <span className=" text-base font-base">
                "Fill the form completely"
              </span>
            </div>
          </div>
        )}

        <h1 className=" text-2xl font-bold text-primaryBlue ">
          Upload Products
        </h1>

        <label htmlFor="title">
          <h1 className="mt-8 font-semibold mb-2 text-primaryBlue">
            Name of the product:
          </h1>
          <textarea
            required
            name="title"
            id="title"
            placeholder="Title here"
            className="w-95vw sm:w-35vw h-12 p-2 rounded-md border-solid border-gray-600 border-2 "
            onChange={handleTitleChange}
          ></textarea>
        </label>

        <label htmlFor="des">
          <h1 className="mt-8 font-semibold mb-2 text-primaryBlue">
            Description the post:
          </h1>
          <textarea
            required
            name="desc"
            id="desc"
            placeholder="Description here"
            className="w-95vw sm:w-35vw h-32 p-2 rounded-md border-solid border-gray-600 border-2 "
            onChange={handleDescChange}
          ></textarea>
        </label>

        <label htmlFor="price">
          <h1 className="mt-8 font-semibold mb-2 text-primaryBlue">
            Price of the product:
          </h1>
          <input
            required
            type="number"
            id="price"
            placeholder="Price here"
            className="w-95vw sm:w-35vw h-12 p-2 rounded-md border-solid border-gray-600 border-2 "
            onChange={handlePriceChange}
          />
        </label>

        <label htmlFor="imgUpload" className="w-95vw sm:w-35vw  ">
          <h1 className="mt-8 font-semibold mb-2 text-primaryBlue">
            Drag and drop or click for the image:
          </h1>
          <input
            required
            type="file"
            id="imgUpload"
            placeholder="Drag and drop or click for the image"
            className="hidden w-95vw sm:w-35vw h-32 "
            accept="image"
            onChange={handleImgChange}
          />
          <div
            id="img-preview"
            className=" bg-cover w-95vw sm:w-35vw h-32 p-2 rounded-md border-solid border-gray-600 border-2 hover:cursor-pointer text-primaryBlue"
          >
            Click here to add image
          </div>
        </label>
        <div className="mt-8 gap-4 items-center">
          <h1 className=" font-semibold mb-4 text-primaryBlue">Category:</h1>
          <select
            name="categoy"
            id="category"
            className="h-8 w-95vw sm:w-35vw border-solid border-black border-2 rounded-md mb-8"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setCategory(e.currentTarget.value);
            }}
          >
            <option value="dress">Dress</option>
            <option value="jewellery">Jewellery</option>
            <option value="footwear">Footwear</option>
          </select>
        </div>
        <div>
          <h1 className=" font-semibold mb-4 text-primaryBlue">Is Featured:</h1>
          <select
            name="isFeatured"
            id="isFeatured"
            className="h-8 w-95vw sm:w-35vw border-solid border-black border-2 rounded-md "
            onChange={() => {
              setIsFeatured(!isFeatured);
            }}
          >
            <option value={0}>False</option>
            <option value={1}>true</option>
          </select>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-12 bg-primaryBlue rounded-md p-4 w-95vw sm:w-35vw  text-white font-bold"
        >
          Submit
        </button>
        {/* <button
          className="mt-12 bg-primaryBlue rounded-md p-4 w-95vw sm:w-35vw  text-white font-bold absolute right-0 top-80vh"
          onClick={() => {
            console.log(featured);
          }}
        >
          status
        </button> */}
      </div>
    </>
  );
};

export default PostProducts;
