import ProfileForm from "./includes/profile-form";
import { connect } from 'react-redux'
import ProfileImage from "./includes/profile-image/profile-image";

const Profile = ({ user }) => {
  return (
    <>
      <h1>Profile</h1>
      <div className="row">
        <div className="col-4 col-md-2">
          <ProfileImage user={user.authUser}/>
        </div>
        <div className="col-8 col-md-4">
          <ProfileForm user={user.authUser} />
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

export default connect(mapPropsToState)(Profile);