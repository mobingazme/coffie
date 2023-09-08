import React, { useEffect, useState } from "react";
import * as yup from "yup";

export const customYup = {
  ...yup,
  isIranMobile: (message) =>
    yup
      .string()
      .required("اجباری است ")
      .matches(/^09\d{9}$/g, message),
  isIranPostalCode: (message) =>
    yup
      .string()
      .required(message)
      .matches(/\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/gm, message),
  isIranNationalCode: (message) =>
    yup
      .string()
      .required(message)
      .matches(/^\d{10}$/, message),
  isIranBankCardNumber: (message) =>
    yup
      .string()
      .required(message)
      .matches(/^(4|5|6)\d{15}$/, message),
};

const useValidation = ({ schema = {}, data = {} } = {}) => {
  const [validationErrors, setValidationErrors] = useState([]);

  const checkFieldValidation = async (
    data,
    item = { lastName: yup.string() }
  ) => {
    const userSchema = yup.object().shape(item);
    try {
      await userSchema.validate({ lastName: data });
      setValidationErrors((prev) =>
        prev.filter((x) => x.key !== item.lastName)
      );
    } catch ({ path, message }) {
      setValidationErrors((prev) => [
        ...prev.filter((x) => x.key !== path),
        { key: path, message },
      ]);
    }
  };

  const checkValidation = async ({
    schemaParams = schema,
    dataParams = data,
  } = {}) => {
    try {
      await yup
        .object()
        .shape(schemaParams)
        .validate(dataParams, { abortEarly: false });
      setValidationErrors([]);
    } catch ({ inner }) {
      const errors = inner.map(({ path, message }) => ({ key: path, message }));
      setValidationErrors(errors);
    }
  };

  useEffect(() => {
    checkValidation({ schemaParams: schema, dataParams: data });
  }, [schema, data]);

  const getValidationError = (fieldName) =>
    validationErrors.find((x) => x.key === fieldName) || null;

  return {
    isHaveError: validationErrors.length > 0,
    fieldValidation: checkFieldValidation,
    errors: validationErrors,
    getError: getValidationError,
    yup: customYup,
  };
};

export default useValidation;
