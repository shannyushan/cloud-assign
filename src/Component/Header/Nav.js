import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormikControl from "../Formik/FormikControl";

const Nav = () => {
  const [headerShadow, setHeaderShadow] = useState(false);

  const applyShadow = () => {
    if (window.scrollY >= 30) {
      setHeaderShadow(true);
    } else {
      setHeaderShadow(false);
    }
  };

  window.addEventListener("scroll", applyShadow);

  const initialValues = {
    search: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log("formik search value", values);

    setTimeout(() => {
      onSubmitProps.resetForm({ values: "" });
      onSubmitProps.setSubmitting(false);
    }, 1000);
  };

  return (
    <header
      className={`bg-white border-b fixed w-full left-0 top-0 z-10 ${
        headerShadow ? "shadow-sm" : " "
      } `}
    >
      <div className="mx-10 grid grid-cols-12 place-items-center py-4 gap-x-7">
        <div className="px-3 col-span-2">
          <h1>Cake Hub</h1>
        </div>
        <div className="col-span-4 w-full">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validateOnMount
          >
            {(formik) => (
              <Form>
                <div>
                  <FormikControl
                    placeholder="Search"
                    control="input"
                    name="search"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="col-start-7 col-end-13 w-full">
          <div className="flex items-center gap-x-8 justify-end">
            <Link className="hover:text-blue-500">
              <h1>Home</h1>
            </Link>

            <Link className="hover:text-blue-500">
              <h1>About</h1>
            </Link>
            <Link className="hover:text-blue-500">
              <h1>Products</h1>
            </Link>
            <Link className="hover:text-blue-500">
              <h1>Category</h1>
            </Link>
            <Link className="hover:text-blue-500">
              <h1>Login</h1>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
