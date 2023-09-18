import useFormState from "../../hooks/useFormState";
import { TodoList } from "./Todo.styled";
import { deletePost, completeTask } from "../../slice/postsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const TodoLi = ({ title, content, priority, id, completed }) => {
  const { setFormValues, setIsEdit, posts } = useFormState();
  const dispatch = useDispatch();

  const handleEditPost = (e) => {
    e.preventDefault();
    setFormValues({
      postTitle: title,
      postContent: content,
      priority: priority,
    });
    setIsEdit({
      value: true,
      id: id,
    });
  };

  const handleDeletePost = (e) => {
    e.preventDefault();
    dispatch(deletePost(id));
  };

  const handleCompleteTasks = (e) => {
    dispatch(completeTask(id));
    console.log(posts);
  };

  return (
    <TodoList key={id}>
      {completed ? (
        <h3>
          <s>{title}</s>
        </h3>
      ) : (
        <h3>{title}</h3>
      )}
      {completed ? (
        <p>
          <s>{content}</s>
        </p>
      ) : (
        <p>{content}</p>
      )}
      <div className="buttons-container">
        <ul>
          <li
            className={completed ? "task-complete" : "task-incomplete"}
            onClick={handleCompleteTasks}
          >
            {completed ? "Completed" : "Incomplete"}
          </li>
          {!completed && (
            <li className={priority === "High" ? "high" : "low"}>{priority}</li>
          )}
        </ul>{" "}
        {completed ? (
          <button className="edit-btn disable" onClick={handleEditPost}>
            Edit
          </button>
        ) : (
          <button className="edit-btn" onClick={handleEditPost}>
            Edit
          </button>
        )}
        <button className="delete-btn" onClick={handleDeletePost}>
          Delete
        </button>
      </div>
    </TodoList>
  );
};

export default TodoLi;
