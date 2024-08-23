import { useContext, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";

import { PostList } from "../store/post-list-store";

import { MdDeleteForever } from "react-icons/md";

const Post = ({ post }) => {
  const [likeCount, setLikeCount] = useState(0)
  const [disLikeCount, setDisLikeCount] = useState(0)
  const { deletePost } = useContext(PostList);
  return (
    <div className="card postCard">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDeleteForever />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags) => (
          <span key={tags} className="badge text-bg-primary hashtag">
            {tags}
          </span>
        ))}
        <div className="reaction">

          <div className="reaction-like" onClick={() => setLikeCount(prev => prev + 1)} >
            <BiLike> </BiLike>  <div className="LikeCount">{likeCount}</div>

          </div>
          <div className="reaction-dislike">
            <BiDislike style={{ marginLeft: "20px" }} onClick={() => setDisLikeCount(prev => prev + 1)}>
            </BiDislike> <div className="disLikeCount">{disLikeCount}</div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Post;
