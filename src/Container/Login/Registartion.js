import React from "react";

const Registartion = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    dispatch(userLogin(values));
    setTimeout(() => {
      onSubmitProps.setSubmitting(false);
    }, 1000);

    errMsg && setErrMessage(errMsg);
    successMsg && setSuccessMsg(msg);
  };

  return <div>Registartion</div>;
};

export default Registartion;
