import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
  posts: localStorage.getItem("todo-list")
    ? JSON.parse(localStorage.getItem("todo-list"))
    : [],
  isEdit: false,
  titleData: "",
  contentData: "",
  postId: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        console.log(action.payload);
        state.posts.push(action.payload);
        localStorage.setItem("todo-list", JSON.stringify(state.posts));
      },
      prepare(title, content, priority) {
        return {
          payload: {
            id: nanoid(),
            postTitle: title,
            postContent: content,
            priority: priority,
            completed: false,
          },
        };
      },
    },
    editPost: (state, action) => {
      console.log(action.payload);
      const post = action.payload;

      let selectedPostIndex = state.posts.findIndex(
        (eachPost) => eachPost.id === post.id
      );
      console.log(selectedPostIndex);
      state.posts.splice(selectedPostIndex, 1, post);
      localStorage.setItem("todo-list", JSON.stringify(state.posts));
    },

    deletePost: (state, action) => {
      const postId = action.payload;
      console.log(postId);
      const posts = state.posts.filter((post) => post.id !== postId);
      localStorage.setItem("todo-list", JSON.stringify(posts));
      state.posts = posts;
    },

    completeTask: (state, action) => {
      const postId = action.payload;
      state.posts.forEach((item) => {
        if (item.id === postId) {
          item.completed = true;
        }
      });
      localStorage.setItem("todo-list", JSON.stringify(state.posts));
    },
  },
});

export const selectAllPosts = (state) => state.posts.posts;

export const { postAdded, editPost, deletePost, completeTask } =
  postsSlice.actions;

export default postsSlice.reducer;
