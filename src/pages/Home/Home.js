import { connect } from "react-redux";
import {storeLastPosts} from "../../actions/posts.actions";
import Post from "../../components/Post";
import {useEffect, useRef, useState} from "react";
import InnerLoading from "../../components/loading/inner-loading";
import PostsService from "../../services/posts.service";
import {errorToast} from "../../actions/toaster.actions";

const Home = (props) => {

  const {
    lastPosts,
    storeLastPosts,
    errorToaster
  } = props;
  const postsService = new PostsService();
  const [lastPostsLoading, setLastPostsLoading] = useState(true);

  const getLastPosts = async () => {
    try {
      const res = await postsService.getLastPosts();
      const { data } = res;
      storeLastPosts(data.posts);
    } catch (e) {
      errorToaster(e.message);
    }
    setLastPostsLoading(false);
  }

  useEffect(() => {
    if(!lastPosts.loaded) {
      getLastPosts();
    }else{
      setLastPostsLoading(false);
    }
  }, [lastPostsLoading])

  return (
    <>
      <h1>Last Post</h1>
      <hr/>
      {
        !lastPostsLoading ?
          lastPosts.posts.length
            ? <div className="row">
                {lastPosts.posts.map((post, index) => (
                  <div key={post._id} className="col-12 col-md-6 mb-3">
                    <Post post={post} showSortDesc={true} />
                  </div>
                ))}
              </div>
            : <p className="text-muted text-center">
                There are no posts
              </p>
          : <InnerLoading />
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    lastPosts: state.PostsReducer.lastPosts,
  }
};

const mapDispatchToProp = (dispatch) => {
  return {
    storeLastPosts: (posts) => dispatch(storeLastPosts(posts)),
    errorToaster: (message) => dispatch(errorToast(message))
  }
};

export default connect(mapStateToProps, mapDispatchToProp)(Home)
