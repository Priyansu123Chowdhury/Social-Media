import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === 'DELETE_POST') {
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
  }
  else if (action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList
}
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, [{
    id: '1',
    title: 'Goging to Kolkata',
    body: 'Vekjdfhwfhwhfwjhefwlejhfefjkejtghththwrtre',
    reaction: 2,
    userId: 'MePriYansu',
    tag: ["vacation", "Kolkata", "Nice_Place"]
  },
  {
    id: '2',
    title: ' Kolkata',
    body: 'yf352433dgwhfwjhefwlejhfefjkejtghththwrtre',
    reaction: 2,
    userId: 'MePriYansu1',
    tag: ["0k", "done", "Place"]
  }
  ]);
  const addPost = (userId, postTitle, postBody, reaction, hashtags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: userId,
        tag: hashtags,
      }
    })
  };
  const deletePost = (postId) => {
    dispatchPostList(
      {
        type: "DELETE_POST",
        payload: { postId, },
      }
    )
  };
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
