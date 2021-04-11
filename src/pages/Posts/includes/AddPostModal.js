import Modal from "../../../components/modal/modal";
import {useRef} from "react";

const AddPostModal = ({ modal, getNewPostData }) => {
  const newPostForm = useRef();

  const saveNewPostData = () => {
    const formData = new FormData(newPostForm.current);
    const data = {};
    for (let key of formData.keys()) {
      data[key] = formData.get(key);
    }

    return getNewPostData(data);
  }

  return (
    <Modal
      header="Create new Post"
      buttons={
        {
          cancel: {
            text: 'Փակել'
          },
          success: {
            text: 'Ավելացնել',
            handler: saveNewPostData
          }
        }
      }
      ref={modal}>
      <form ref={newPostForm}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type='text' placeholder="Input your post title" className="form-control form-control-sm"/>
        </div>

        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea id="body" name="body" placeholder="Input your post body" className="form-control form-control-sm" rows="4" />
        </div>
      </form>
    </Modal>
  )
}

export default AddPostModal;