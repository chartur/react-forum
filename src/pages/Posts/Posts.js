import Post from "../../components/Post";
import {connect} from "react-redux";
import { useRef } from "react";
import './Posts.css';
import AddPostModal from "./includes/AddPostModal";
import {createNewPost} from "../../actions/posts.actions";
import Loading from "../../components/loading/loading";
import PostsService from "../../services/posts.service";
import {errorToast} from "../../actions/toaster.actions";

export const Posts = (props) => {

  const postsService = new PostsService();
  const {
    allPosts,
    createPost,
    errorToaster
  } = props;

  const modal = useRef();
  const loadingRef = useRef();

  const savePost = async (data) => {
    loadingRef.current.display();

    try {
      const res = await postsService.createPost(data);
      const postData = res.data.post;
      createPost(postData);
    } catch (e) {
      errorToaster(e.message)
    }
    loadingRef.current.hide()
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>
          Posts
        </h1>
        <button className="btn btn-success" onClick={() => modal.current.open()}>
          Add a post
        </button>
      </div>
      <div className="row mt-5">
        {
          allPosts.length
            ? allPosts.map((p) => (
              <div className="col-sm-6 mb-4" key={p.id}>
                <Post post={p}/>
              </div>
            ))
            : (
              <div className="col-12 mt-5">
                <p className="text-muted text-center">There are no posts yet.</p>
              </div>
            )
        }
      </div>

      <AddPostModal modal={modal} getNewPostData={savePost}/>
      <Loading ref={loadingRef} />
    </>
  )
}

const mapStatToProps = (state) => {
  return {
    allPosts: state.PostsReducer.all,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (postData) => dispatch(createNewPost(postData)),
    errorToaster: (message) => dispatch(errorToast(message))
  }
}

export default connect(mapStatToProps, mapDispatchToProps)(Posts)