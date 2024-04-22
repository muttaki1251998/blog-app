import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const Addpost = () => {
  const handleSubmit = async (values: any) => {
    try {
      const res = await axios.post("http://localhost:8000/api/add", values);
      console.log("Post added", res);
    } catch (e) {
      console.log("Unable to add post", e);
    }
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Required")
      .min(4, "Too Short!")
      .max(15, "Too Long!"),
    description: Yup.string()
      .required("Required")
      .min(10, "Too Short!")
      .max(50, "Too Long!"),
  });

  const initialValues = {
    title: "",
    description: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form
          className="flex items-center justify-center"
          style={{ height: "calc(100vh - 64px)", overflowY: "auto" }}
        >
          <div className="w-full max-w-md">
            <label className="text-lg text-gray-800 tracking-wide text-center block mb-4">
              Create a post
            </label>
            <div className="mb-3">
              <Field
                type="text"
                name="title"
                data-testid="title"
                placeholder="Title"
                className={`shadow appearance-none border ${
                  errors.title && touched.title
                    ? "border-red-500"
                    : "border-gray-200"
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-100`}
              />
              {errors.title && touched.title && (
                <div className="text-red-500 text-xs mt-1">{errors.title}</div>
              )}
            </div>
            <div className="mb-3">
              <Field
                as="textarea"
                data-testid="description"
                name="description"
                placeholder="Description"
                className={`shadow appearance-none border ${
                  errors.description && touched.description
                    ? "border-red-500"
                    : "border-gray-200"
                } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-100 h-32`}
              />
              {errors.description && touched.description && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.description}
                </div>
              )}
            </div>
            <button
              type="submit"
              data-testid="submit-btn"
              disabled={errors.title || errors.description ? true : false}
              className={`bg-black text-white rounded py-2 px-4 hover:bg-gray-600 transition duration-300 ease-in-out ${
                errors.title || errors.description
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-600"
              }`}
            >
              Create
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Addpost;
