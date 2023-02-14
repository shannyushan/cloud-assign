import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-100 px-5 py-24 w-full min-h-screen">
      <div className="flex items-center justify-end">
        <h1>Home</h1>
        <MdOutlineKeyboardArrowRight />
        <h1>Name</h1>
      </div>
      <div className="w-2/3 mx-auto mt-10 flex gap-x-20 py-4">
        <div className="w-9/12 h-full">
          <img
            src="https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg"
            alt="img"
          />
        </div>
        <div className="w-full">
          <h1
            className="text-2xl text-green-500"
            style={{ fontFamily: "cursive" }}
          >
            PineApple Cake
          </h1>
          <h1
            className="text-center text-red-500 text-xl"
            style={{ fontFamily: "cursive" }}
          >
            Rs. 1000
          </h1>

          <div className="flex gap-x-8 mt-6">
            <h1>Description:</h1>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>

          <div className="flex gap-x-20 mt-6">
            <h1>Type:</h1>
            <p className="text-justify">Red Velvet Cake</p>
          </div>

          <div className="flex gap-x-5 items-center mt-6">
            <div className="flex gap-x-12  items-center">
              <h1>Quantity:</h1>
              <input
                type="number"
                placeholder="Quantity (Pound)"
                className="px-2 py-1.5 outline-none rounded-sm"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <h1 className="text-sm text-red-300">Minimum Quantity: 1 Pound</h1>
          </div>

          <div className="flex gap-x-12 items-center w-full mt-6 pr-3">
            <h1>Message:</h1>
            <input
              type="test"
              className="px-2 py-2 w-full outline-none rounded-sm"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="mt-6 flex justify-center">
            <button className="border py-2 px-5 rounded-md bg-red-500 text-white text-center hover:bg-red-400">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
