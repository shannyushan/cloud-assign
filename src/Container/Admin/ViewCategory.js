import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrum from "../../Component/Breadcrum/Breadcrum";
import Loading from "../../Component/Loading/Loading";
import { fetchGetCategories } from "../../Redux/Category/action";

const headings = [
  {
    id: 1,
    name: "Icon",
  },
  {
    id: 2,
    name: "Name",
  },
];

const ViewCategory = () => {
  const loading = useSelector(
    (state) => state.category.isloading,
    shallowEqual
  );
  const category = useSelector(
    (state) => state.category.category,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetCategories());
  }, []);
  return (
    <div className="mx-6 py-24 w-full h-screen relative font-serif">
      <Breadcrum value="Manage Category" />
      <h1 className="text-xl underline">Manage Category</h1>
      <Link
        to="/admin-dashboard/add-category"
        className="flex justify-end mt-8"
      >
        <h1 className="px-4 py-2 w-fit rounded-md border-gray-300 bg-green-500 text-white">
          Add Category
        </h1>
      </Link>

      <div className="py-2 align-middle min-w-full mt-8">
        <div className="border-b border-gray-200 sm:rounded border">
          <table className="table-auto w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 w-full">
              <tr>
                {headings.map((title) => {
                  return (
                    <th
                      key={title.id}
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-gray-500 uppercase"
                    >
                      {title.name}
                    </th>
                  );
                })}
              </tr>
            </thead>
            {loading ? (
              <div className="flex w-full items-center  justify-center z-10">
                <Loading />
              </div>
            ) : (
              <tbody className="bg-white divide-y divide-gray-200">
                {category && category.length ? (
                  category.map((data) => (
                    <tr key={data._id}>
                      {/* category Image */}
                      <td className="px-2 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <div className="w-14 h-14">
                            <img
                              src={`http://100.26.209.182:8000/${data.image}`}
                              alt={data.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </td>
                      {/*book Name */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600 flex gap-x-2 items-center">
                            {data.name}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <span>No Records Found</span>
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewCategory;
