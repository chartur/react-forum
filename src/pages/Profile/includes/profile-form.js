import {connect} from "react-redux";
import {errorToast, successToast} from "../../../actions/toaster.actions";
import {signIn} from "../../../actions/auth.actions";
import {useRef} from "react";
import Loading from "../../../components/loading/loading";
import ProfileService from "../../../services/profile.service";

const ProfileForm = (props) => {

  const formRef = useRef();
  const loadingRef = useRef();
  const profileService = new ProfileService();

  const {
    user,
    successToast,
    errorToast,
    updateDetails
  } = props;

  const saveUserProfileDetails = async () => {
    const fd = new FormData(formRef.current);
    const profileData = {};
    for (let key of fd.keys()) {
      profileData[key] = fd.get(key);
    }

    loadingRef.current.display()
    try {
      const res = await profileService.updateProfileDetails(profileData);
      const { data } = res;
      updateDetails(data);
      successToast('Your profile data successfully updated!')
    } catch (e) {
      errorToast(e.message);
    }
    loadingRef.current.hide()
  }

  return (
    <>
      <form ref={formRef}>
        <div className="form-group">
          <label>Email</label>
          <input disabled type="text" autoComplete="off" className="form-control" defaultValue={user.email} />
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" autoComplete="off" className="form-control" name="name" defaultValue={user.name} />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" autoComplete="off" className="form-control" name="age" defaultValue={user.age} />
        </div>

        <div className="form-group">
          <label>Bio</label>
          <textarea className="form-control" rows="4" name="bio" defaultValue={user.bio} />
        </div>

        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-success" onClick={saveUserProfileDetails}>Save</button>
        </div>
      </form>
      <Loading ref={loadingRef} />
    </>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    errorToast: (message) => dispatch(errorToast(message)),
    successToast: (message) => dispatch(successToast(message)),
    updateDetails: (userDetails) => dispatch(signIn(userDetails))
  }
}


export default connect(undefined, mapDispatchToProps)(ProfileForm);