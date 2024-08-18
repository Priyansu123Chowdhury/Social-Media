import { useContext, useRef } from "react";
import PostList from "./PostList";
const CreatePost = () => {
  const { addPost } = useContext(PostList)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const hashtagsElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postBodyElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const hashtags = hashtagsElement.current.value.split(/(\s+)/);
    addPost(userId, postTitle, postBody, reaction, hashtags)
  }
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User-Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your user Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Tiltle
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Tell us More about it...."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          rows='4'
          type="text"
          className="form-control"
          id="body"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">
          Enter Your Hashtags here...
        </label>
        <input
          type="text"
          ref={hashtagsElement}
          className="form-control"
          id="hashtags"
          placeholder="Please enter tags using space"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          No. of reaction
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="form-control"
          id="reaction"
          placeholder="How many people reacted to this post"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
