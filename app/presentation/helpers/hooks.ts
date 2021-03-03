import { useState } from "react";
import { Validation } from "../protocols/validation";

export const useFormFields = (initialState: any, validator: Validation): [any, any, (key: string, value: any) => void] => {
  const [fields, setValues] = useState(initialState);
  const [errors, setErrors] = useState([])
  const handleFieldChange = (key: string, value: any) => {
    const changedFields = {
      ...fields,
      [ key ]:  value
    }
    setValues(changedFields);
    const validationErrors = validator.validate(changedFields)
    console.log(validationErrors)
    setErrors(validationErrors)
  }
  return [
    fields,
    errors,
    handleFieldChange,
  ];
}
