import { useContext } from "react";
import { FcLike } from "react-icons/fc";
import { PostList } from "../store/post-list-store";

import { MdDeleteForever } from "react-icons/md";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList)
  return (
    <div className="card postCard" >

      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
            <MdDeleteForever />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text" >{post.body}</p>
        {post.tags.map((tags) => (<span key={tags} className="badge text-bg-primary hashtag">{tags}</span>))}
        <div className="reaction"  ><FcLike />
          <div className="reaction-count">{post.reaction}</div>
        </div>


      </div>
    </div>);
}
export default Post