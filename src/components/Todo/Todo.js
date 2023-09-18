import { TodoWrapper, TodoUl } from "./Todo.styled";
import TodoLi from "./TodoLi";
import useFormState from "../../hooks/useFormState";
import { useState } from "react";

const Todo = () => {
  const { posts } = useFormState();
  const [selectFilter, setSelectFilter] = useState("");

  const renderedPosts = () => {
    return posts
      .filter((item) => {
        if (selectFilter.length && selectFilter === "Completed") {
          return item.completed === true;
        } else if (selectFilter.length && selectFilter === "Incomplete") {
          return item.completed === false;
        } else {
          return item;
        }
      })
      .map((post) => (
        <TodoLi
          key={post.id}
          title={post.postTitle}
          content={post.postContent}
          priority={post.priority}
          id={post.id}
          completed={post.completed}
        />
      ));

    // return (
    //   <>
    //     <TodoLi
    //       key="1"
    //       title="Rohan"
    //       content="Banerjee"
    //       priority="High"
    //       id="1"
    //     />
    //     <TodoLi
    //       key="2"
    //       title="Rohan"
    //       content="Banerjee"
    //       priority="Low"
    //       id="2"
    //     />
    //   </>
    // );
  };

  return (
    <>
      <TodoWrapper>
        <select
          name="filter"
          id="filter"
          className="filter"
          onChange={(e) => setSelectFilter(e.target.value)}
          defaultValue={"Select"}
        >
          <option value="Select" disabled>
            Select priority
          </option>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
        <TodoUl>{renderedPosts()}</TodoUl>
      </TodoWrapper>
    </>
  );
};

export default Todo;
