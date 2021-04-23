import ProfileForm from "./includes/profile-form";
import { connect } from 'react-redux'
import ProfileImage from "./includes/profile-image/profile-image";
import {
  errorToast,
  successToast
} from "../../actions/toaster.actions";

const Profile = ({ user }) => {
  return (
    <>
      <h1>Profile</h1>
      <div className="row">
        <div className="col-4 col-md-2">
          <ProfileImage user={user.authUser}/>
        </div>
        <div className="col-8 col-md-4">
          <ProfileForm user={user} />
        </div>
      </div>
    </>
  )
};

const mapPropsToState = (state) => {
  return {
    user: state.AuthReducer,
  }
};

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapPropsToState)(Profile);