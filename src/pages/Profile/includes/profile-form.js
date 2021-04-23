import {connect} from "react-redux";
import {errorToast, successToast} from "../../../actions/toaster.actions";

const ProfileForm = ({ user, successToast, errorToast }) => {

  const showToaster = () => {
    successToast('gago');
  }

  return (
    <form>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="name" value={user.name} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="text" className="form-control" name="name" value={user.email} />
      </div>

      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-success" onClick={showToaster}>Save</button>
      </div>
    </form>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    errorToast: (message) => dispatch(errorToast(message)),
    successToast: (message) => dispatch(successToast(message)),
  }
}


export default connect(undefined, mapDispatchToProps)(ProfileForm);