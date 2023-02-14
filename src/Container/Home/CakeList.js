import React from "react";

const category = [
  {
    id: 1,
    img: "https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg",
    name: "Black Forest Cake",
  },

  {
    id: 2,
    img: "https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg",
    name: "Red Velvet Cake",
  },

  {
    id: 3,
    img: "https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg",
    name: "Eggless Cake",
  },

  {
    id: 4,
    img: "https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg",
    name: "Strawberry Cake",
  },

  {
    id: 5,
    img: "https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg",
    name: "Fruit Cake",
  },
  {
    id: 5,
    img: "https://img.taste.com.au/qHHgZYey/taste/2022/03/german-chocolate-cake-177122-1.jpg",
    name: "Cheese Cake",
  },
];

const CakeList = () => {
  return (
    <div class="mt-12 bg-clip-content p-6 border-4 border-red-200 rounded-xl border-dashed mx-2">
      <h1
        className="text-center text-red-600 text-xl"
        style={{ fontFamily: "cursive" }}
      >
        Cake List
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 mb-5 mt-8">
        {category.map((cat) => {
          return (
            <div className="bg-slate-100 p-3 py-6 w-full cursor-pointer hover:shadow-md rounded-md shadow-sm border border-slate-300">
              {/* img div */}
              <div className="flex justify-center h-36 md:h-48">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="h-full object-contain w-full"
                />
              </div>

              {/* content div */}
              <div className=" mt-4 p-1">
                <h1
                  className="text-sm md:text-base text-center overflow-hidden"
                  style={{ fontFamily: "cursive" }}
                >
                  {cat.name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CakeList;
