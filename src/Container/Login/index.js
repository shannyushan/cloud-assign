import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Component/Button";
import FormikControl from "../../Component/Formik/FormikControl";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    // dispatch(userLogin(values));
    console.log("login values", values);
    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
    }, 1000);
  };

  return (
    <section className="flex min-h-screen items-center justify-center gap-x-7 bg-white relative">
      <div className="lg:w-1/2 w-full flex items-center justify-center  ">
        <div className="w-full py-6 z-20">
          <h1 className="text-4xl tracking-wide font-serif text-center sm:text-start ">
            Welcome Back !!
          </h1>
          <p className="text-gray-400 mt-2 font-serif text-2xl text-center sm:text-start">
            Login to continue
          </p>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validateOnMount
          >
            {(formik) => (
              <Form>
                <div className="sm:w-3/5 w-full px-4 mt-8 lg:px-0 ">
                  <FormikControl
                    label="Email"
                    placeholder="Enter Your Emai"
                    control="input"
                    name="email"
                    type="email"
                  />
                  <div className="mt-5">
                    <FormikControl
                      label="Password"
                      placeholder="Enter Your Password"
                      control="input"
                      name="password"
                      type="password"
                    />
                  </div>
                  <Link to="/forget-password?forget-password" className="mt-2">
                    <h1 className="text-blue-600 hover:underline cursor-pointer">
                      Forgotten Password?
                    </h1>
                  </Link>
                  <div className="mt-5">
                    <Button
                      type="button"
                      className="bg-blue-500 py-2 tracking-wide hover:bg-blue-400 font-serif text-white w-full"
                      value="Login"
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Login;
