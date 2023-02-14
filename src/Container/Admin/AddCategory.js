import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FormikControl from "../../Component/Formik/FormikControl";
import Message from "../../Component/Message/Message";
import Image from "../../Component/UploadImage/Image";
import { fetchAddCategory } from "../../Redux/Category/action";

const AddCategory = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const msg = useSelector((state) => state.category.message, shallowEqual);
  const navigate = useNavigate();

  useEffect(() => {
    setMessage(msg);
  }, [msg]);

  const initialValues = {
    image: "",
    name: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    const formData = new FormData();
    formData.append("image", values.image);
    formData.append("name", values.name);
    dispatch(fetchAddCategory(formData));
    setTimeout(() => {
      onSubmitProps.resetForm({ values: "" });
      onSubmitProps.setSubmitting(false);
    }, 1000);

    window.scrollTo(0, 0);
  };

  return (
    <div className="mx-6 py-24 w-full h-screen relative font-serif">
      {message && (
        <Message
          className="flex justify-end absolute right-0 shadow-md px-3 py-2 items-center bg-green-500 text-white rounded-md w-fit"
          message={message}
          setMessage={setMessage}
        />
      )}

      <div className="flex items-center justify-end">
        <Link to="/admin-dashboard">
          <h1 className="text-blue-500 cursor-pointer">Dashboard</h1>
        </Link>
        <IoIosArrowForward className="m-1 text-gray-500" />
        <Link to="/admin-dashboard/manage-library">
          <p className="text-blue-500 cursor-pointer">Category</p>
        </Link>
        <IoIosArrowForward className="m-1 text-gray-500" />
        <p className=" text-gray-500">Add Category</p>
      </div>
      <h1 className="text-xl underline">Add Category</h1>

      <div className="w-2/3 mx-auto border border-gray-300 rounded-md h-fit mt-8">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validateOnMount
        >
          {(formik) => (
            <Form>
              <div className=" mt-4 w-1/3 text-center mx-auto">
                <Image
                  onChange={(e) =>
                    formik.setFieldValue("image", e.target.files[0])
                  }
                  file={formik.values.image}
                />
              </div>

              <div className="flex gap-x-5 w-full mt-8 px-7">
                <div className="w-full">
                  <FormikControl
                    label="Category Name"
                    placeholder="Category Name"
                    control="input"
                    name="name"
                  />
                </div>
              </div>

              <div className="px-7 pb-4">
                <button
                  type="submit"
                  className="border px-5 py-1 mt-7 rounded-md hover:bg-blue-400 shadow-md bg-blue-500 text-white"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddCategory;
