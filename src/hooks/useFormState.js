import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const useFormState = () => {
  const formContext = useContext(FormContext);

  if (!formContext) {
    throw new Error("Error with the provider!");
  }

  return formContext;
};

export default useFormState;
