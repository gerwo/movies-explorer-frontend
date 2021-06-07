import { useState } from 'react';

const useForm = (initValues) => {
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
  };
  return {
    values, handleChange, errors,
  };
};

export default useForm;
