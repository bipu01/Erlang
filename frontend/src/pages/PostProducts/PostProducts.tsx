import { useEffect, useState } from "react";
import { paddingForPage } from "../../defineSize";
import axios from "axios";

const PostProducts = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(Number);
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
    if (e.currentTarget.files?.[0]) {
      setImage(e.currentTarget.files?.[0].name || "");
      const imgURL = URL.createObjectURL(e.currentTarget.files?.[0]);
      if (imgPreview) {
        imgPreview.style.backgroundImage = `url(${imgURL})`;
      }
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title != "" && desc != "" && price != null && image != "") {
      const response = await axios.post("http://localhost:3000/postProduct", {
        title: title,
        price: price,
        desc: desc,
        image: image,
        rating: {
          rate: 0,
          count: 0,
        },
      });
      setPostStatus(1);
      console.log(postStatus);
      console.log(response);
    } else {
      setPostStatus(0);
      console.log(postStatus);
      console.log("not posted");
    }
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
      <div className={` ${paddingForPage} mt-5vh pb-24`}>
        {postStatus ? (
          <div
            id="postSuccessCardContainer"
            onClick={makeSuccessDialougeBoxInvisible}
            className=" absolute w-100vw h-120vh top-0 left-0 bg-[rgba(0,0,0,0.3)]"
          >
            <div
              //   id="postSuccessCard"
              className=" fixed top-8vh left-25vw rounded-md text-center py-4 text-xl font-medium text-bodybg w-50vw h-16 bg-primaryBlue"
            >
              Product Successfully Posted
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
              className=" fixed top-8vh left-25vw rounded-md text-center py-4 text-xl font-medium text-bodybg w-50vw h-16 bg-primaryBlue"
            >
              Product post failed
            </div>
          </div>
        )}

        <h1 className=" text-xl font-bold ">Enter products to upload</h1>

        <label htmlFor="title">
          <h1 className="mt-8 font-semibold mb-2">Name of the product</h1>
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
          <h1 className="mt-8 font-semibold mb-2">Description the post</h1>
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
          <h1 className="mt-8 font-semibold mb-2">Price of the product</h1>
          <input
            required
            type="number"
            id="price"
            placeholder="Price here"
            className="w-95vw sm:w-35vw h-12 p-2 rounded-md border-solid border-gray-600 border-2 "
            onChange={handlePriceChange}
          />
        </label>

        <label htmlFor="imgUpload">
          <h1 className="mt-8 font-semibold mb-2">
            Drag and drop or click for the image
          </h1>
          <input
            required
            type="file"
            id="imgUpload"
            placeholder="Drag and drop or click for the image"
            className="hidden"
            accept="image"
            onChange={handleImgChange}
          />
          <div
            id="img-preview"
            className=" bg-cover w-95vw sm:w-35vw h-32 p-2 rounded-md border-solid border-gray-600 border-2 hover:cursor-pointer"
          >
            Click here to add image
          </div>
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
          className=" bg-red-400 rounded-md p-4 px-6 mt-4 text-white font-bold"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default PostProducts;
