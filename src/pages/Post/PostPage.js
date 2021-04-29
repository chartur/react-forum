import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import Loading from "../../components/loading/loading";
import moment from "moment";
import UserAvatar from "../../components/user-avatar/user-avatar";
import PostsService from "../../services/posts.service";
import { connect } from "react-redux";
import {errorToast} from "../../actions/toaster.actions";

const PostPage = ({ errorToaster }) => {
  const postsService = new PostsService();
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await postsService.getPost(postId);
        const { post } = res.data;
        setPost(post);
        setLoading(false);
      } catch (e) {
        errorToaster(e.response.data.message);
      }
    }

    getPost();
  }, [])

  return (
    <>
      {
        loading
          ? <Loading displayed={true} />
          : <div className="row">
              <div className="col-lg-8">
                <h1 className="mt-4">{ post.title }</h1>
                <div className="d-flex justify-content-start align-items-center">
                  <p className="lead m-0 mr-2">
                    <span className="mr-1">by</span>
                    <Link to="#!">{ post.user.name }</Link>
                  </p>
                  <UserAvatar user={post.user} size={30} />
                </div>

                <hr/>
                <p>Posted on {moment(post.createdAt).format('MMMM, ddd, YYYY')}</p>
                <hr/>
                <img className="img-fluid rounded" src="https://via.placeholder.com/900x300" alt="..."/>
                <hr/>
                <div>
                  {post.content}
                </div>
                <hr/>
                <div className="card my-4">
                  <h5 className="card-header">Leave a Comment:</h5>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <textarea className="form-control" rows="3" />
                      </div>
                      <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                  </div>
                </div>
                <div className="media mb-4">
                  <img className="d-flex mr-3 rounded-circle" src="https://via.placeholder.com/50x50" alt="..."/>
                  <div className="media-body">
                    <h5 className="mt-0">Commenter Name</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                  </div>
                </div>
                <div className="media mb-4">
                  <img className="d-flex mr-3 rounded-circle" src="https://via.placeholder.com/50x50" alt="..."/>
                  <div className="media-body">
                    <h5 className="mt-0">Commenter Name</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus
                    odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                    <div className="media mt-4">
                      <img className="d-flex mr-3 rounded-circle" src="https://via.placeholder.com/50x50" alt="..."/>
                      <div className="media-body">
                        <h5 className="mt-0">Commenter Name</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                        purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                    </div>
                    <div className="media mt-4">
                      <img className="d-flex mr-3 rounded-circle" src="https://via.placeholder.com/50x50" alt="..."/>
                      <div className="media-body">
                        <h5 className="mt-0">Commenter Name</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                        purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card my-4">
                  <h5 className="card-header">Search</h5>
                  <div className="card-body">
                    <div className="input-group">
                      <input className="form-control" type="text" placeholder="Search for..."/>
                      <span className="input-group-append"><button className="btn btn-secondary" type="button">Go!</button></span>
                    </div>
                  </div>
                </div>
                <div className="card my-4">
                  <h5 className="card-header">Categories</h5>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                          <li><a href="#!">Web Design</a></li>
                          <li><a href="#!">HTML</a></li>
                          <li><a href="#!">Freebies</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                          <li><a href="#!">JavaScript</a></li>
                          <li><a href="#!">CSS</a></li>
                          <li><a href="#!">Tutorials</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card my-4">
                  <h5 className="card-header">Side Widget</h5>
                  <div className="card-body">You can put anything you want inside of these side widgets. They are easy to
                    use, and feature the new Bootstrap 4 card containers!
                  </div>
                </div>
              </div>
            </div>
      }
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    errorToaster: (message) => dispatch(errorToast(message))
  }
}
export default connect(undefined, mapDispatchToProps)(PostPage);