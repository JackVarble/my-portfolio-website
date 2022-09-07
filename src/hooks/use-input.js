import { useState } from "react";

const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validateValue(inputValue);
  const hasError = !inputIsValid && inputIsTouched;

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onTouched = () => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setInputIsTouched(false);
  };

  return {
    value: inputValue,
    isValid: inputIsValid,
    hasError,
    onChange,
    onTouched,
    reset,
  };
};

export default useInput;
