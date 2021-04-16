const Post = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <span href="#" className="btn btn-primary">Go somewhere</span>
      </div>
    </div>
  )
}

export default Post;