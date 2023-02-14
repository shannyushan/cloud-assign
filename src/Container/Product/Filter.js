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

const Filter = () => {
  return (
    <div className="fixed w-2/12 bg-white border-r overflow-y-hidden hover:overflow-y-auto h-screen">
      <h1
        className="text-center py-2 text-xl"
        style={{ fontFamily: "cursive" }}
      >
        Filter
      </h1>
      <hr className="border-dotted mt-1 border-red-500" />

      {/* search by category */}
      <div className="mt-4 px-5">
        <h1>Search By Category</h1>
        <div className="mt-4">
          {category.map((cat) => {
            return (
              <div className="flex items-center py-1">
                <input
                  type="checkbox"
                  name={cat.id}
                  className="border border-gray-300 w-10 text-center uppercase py-1.5 rounded-md outline-gray-300"
                />
                <label>{cat.name}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-5 mt-4 ">
        <h1 className="font-medium text-sm md:text-base">Price</h1>
        <div className="flex space-x-4 mt-3 w-full">
          <div className="border w-full bg-white">
            <input
              type="number"
              placeholder="Min Price"
              name="minPrice"
              className="px-3 py-2 w-full text-xs outline-none bg-transparent"
            />
          </div>
          <div className="border w-full bg-white">
            <input
              type="number"
              placeholder="Max Price"
              name="maxPrice"
              className="px-3 py-2 w-full text-xs outline-none bg-transparent"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-10 px-5">
        <div className="rounded-md w-5/12 text-center bg-red-300 text-white p-1.5 cursor-pointer hover:bg-gray-200 duration-300">
          <button className="font-medium opacity-75">Clear</button>
        </div>
        <div className="rounded-md w-5/12 bg-blue-300 text-white text-center p-1.5 cursor-pointer bg-listYourItemsHover hover:bg-gray-200 duration-300">
          <button className="font-medium opacity-75">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
