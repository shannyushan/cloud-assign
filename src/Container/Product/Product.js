import React from "react";
import Card from "../../Component/Card/Card";

const products = [
  {
    id: 1,
    img: "https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg",
    name: "Cake 1",
    price: "1000",
  },
  {
    id: 2,
    img: "https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg",
    name: "Cake 2",
    price: "1000",
  },
  {
    id: 3,
    img: "https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg",
    name: "Cake 3",
    price: "1000",
  },
  {
    id: 4,
    img: "https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg",
    name: "Cake 4",
    price: "1000",
  },
  {
    id: 5,
    img: "https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg",
    name: "Cake 5",
    price: "1000",
  },
  {
    id: 6,
    img: "https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg",
    name: "Cake 6",
    price: "1000",
  },
  {
    id: 7,
    img: "https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg",
    name: "Cake 7",
    price: "1000",
  },
];

const Product = () => {
  return (
    <div
      className="py-2 text-xl text-center text-red-600"
      style={{ fontFamily: "cursive" }}
    >
      Explore our Cakes
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 mb-5 mt-8">
        {products.map((prod) => {
          return <Card product={prod} />;
        })}
      </div>
    </div>
  );
};

export default Product;
