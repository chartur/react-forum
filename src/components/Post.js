import moment from "moment";

const Post = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title text-center">{post.title}</h3>
        <p className="card-text text-justify">{post.content}</p>
        <div className="d-flex justify-content-between align-items-start">
          <span href="#" className="btn btn-primary">Go to post</span>
          <span className="text-muted small">{moment(post.createdAt).format('MMM DD, yyyy HH:mm')}</span>
        </div>
      </div>
    </div>
  )
}

export default Post;