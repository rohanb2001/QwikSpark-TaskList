import useFormState from "../../hooks/useFormState";
import { Container } from "../styles/Container.styled";
import Todo from "../Todo/Todo";

const Form = () => {
  const { formValues, setFormValues, formSubmit, errorMessage } =
    useFormState();

  const onSavePostClicked = (e) => {
    e.preventDefault();
    formSubmit();
  };

  return (
    <>
      <Container>
        <form
          onChange={(e) =>
            setFormValues((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        >
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            placeholder="Title"
            value={formValues?.postTitle}
          />
          <input
            type="text"
            name="postContent"
            placeholder="Content"
            id="postContent"
            value={formValues?.postContent}
          />

          <select
            name="priority"
            id="priority"
            onChange={(e) =>
              setFormValues((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={formValues?.priority}
          >
            {/* <option value="none" selected disabled hidden>
              Select an Option
            </option> */}
            <option value="High">High</option>
            <option value="Low">Low</option>
          </select>

          <button type="submit" className="button" onClick={onSavePostClicked}>
            Save Post
          </button>
        </form>

        <div className="error-msg">{errorMessage}</div>

        <Todo />
      </Container>
    </>
  );
};

export default Form;
