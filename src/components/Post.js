import moment from "moment";
import UserAvatar from "./user-avatar/user-avatar";
import {Link} from "react-router-dom";

const Post = ({ post, showSortDesc = false }) => {

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <h3 className="card-title">{post.title}</h3>
            <div>
              <UserAvatar user={post.user} />
            </div>
          </div>
          <p className="card-text text-justify">{showSortDesc ? post.content.substring(0, 50) : post.content}</p>
          <div className="d-flex justify-content-between align-items-start">
            <Link to={`/post/${post._id}`} className="btn btn-primary">Go to post</Link>
            <span className="text-muted small">{moment(post.createdAt).format('MMM DD, yyyy HH:mm')}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post;