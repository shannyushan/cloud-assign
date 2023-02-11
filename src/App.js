import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "./Component/Formik/FormikControl";
import Image from "./Component/UploadImage/Image";

const App = () => {
  const initialValues = {
    profile: "",
    firstName: "",
    middleName: "",
    lastName: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log("formik login value", values);

    setTimeout(() => {
      onSubmitProps.resetForm({ values: "" });
      onSubmitProps.setSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      App
      <div className="border border-dotted mt-2 mb-2 rounded-md p-3 bg-gray-50">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validateOnMount
        >
          {(formik) => (
            <Form>
              <div className="grid grid-cols-12">
                <div className="col-span-2">
                  <Image
                    onChange={(e) =>
                      formik.setFieldValue("profile", e.target.files[0])
                    }
                    file={formik.values.profile}
                  />
                </div>
              </div>
              <div className="flex gap-x-5 w-full">
                <div className="w-full">
                  <FormikControl
                    label="First Name"
                    placeholder="First Name"
                    control="input"
                    name="firstName"
                  />
                </div>

                <div className="w-full">
                  <FormikControl
                    label="Middle Name"
                    placeholder="Middle Name"
                    control="input"
                    name="middleName"
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`border px-5 py-1 mt-7 rounded-md hover:bg-blue-400 shadow-md bg-blue-500 text-white
                }`}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;
