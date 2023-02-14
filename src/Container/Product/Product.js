import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Card from "../../Component/Card/Card";
import { fetchGetProducts } from "../../Redux/Product/action";

const Product = () => {
  const products = useSelector((state) => state.product.products, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetProducts());
  }, []);
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
