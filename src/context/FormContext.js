import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost, postAdded, selectAllPosts } from "../slice/postsSlice";

export const FormContext = createContext(null);

const FormContextProvider = ({ children }) => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    postTitle: "",
    postContent: "",
    priority: "High",
  });
  const [isEdit, setIsEdit] = useState({
    value: false,
    id: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const formSubmit = () => {
    const { postTitle, postContent, priority } = formValues;
    if (postTitle && postContent && priority) {
      if (!isEdit.value) {
        dispatch(postAdded(postTitle, postContent, priority));
      } else {
        console.log({
          ...formValues,
          id: isEdit.id,
        });
        dispatch(
          editPost({
            ...formValues,
            id: isEdit.id,
          })
        );
      }
    } else {
      setErrorMessage("Please fill the mandatory fields!");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }

    setFormValues({ postTitle: "", postContent: "", priority: "High" });
  };

  return (
    <FormContext.Provider
      value={{
        posts,
        formValues,
        setFormValues,
        formSubmit,
        setIsEdit,
        errorMessage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
