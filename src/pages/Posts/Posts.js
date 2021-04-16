import Post from "../../components/Post";
import {connect} from "react-redux";
import {savePost, storePosts} from "../../actions/posts.actions";
import {useEffect, useRef} from "react";
import './Posts.css';
import AddPostModal from "./includes/AddPostModal";

export const Posts = ({ postsData, storeAllLoadedUsers }) => {
    const modal = useRef();

    useEffect( () => {
      const getPosts = async () => {
        try {
          const loadedUsers = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
          return storeAllLoadedUsers(loadedUsers);
        } catch (e) {
          console.error(e);
        }
      };

      if(!postsData.loaded) {
        (async function () {
          await getPosts();
        })()
      }
    },
      [
        postsData,
        storeAllLoadedUsers
      ]
    );


    const getNewPostData = (data) => {

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
            postsData?.posts.length
              ? postsData.posts.map((p) => (
                <div className="col-sm-6 mb-4" key={p.id}>
                  <Post post={p} />
                </div>
              ))
              : (
                <div className="col-12 mt-5">
                  <p className="text-muted text-center">There are no posts yet.</p>
                </div>
              )
          }
        </div>

        <AddPostModal modal={modal} getNewPostData={getNewPostData}/>
      </>
    )
}

const mapStatToProps = (state) => {
  return {
    postsData: state.PostsReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeAllLoadedUsers: (users) => dispatch(storePosts(users)),
    saveNewPost: (post) => dispatch(savePost(post))
  }
}

export default connect(mapStatToProps, mapDispatchToProps)(Posts)