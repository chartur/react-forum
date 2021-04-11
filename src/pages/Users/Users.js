import { connect } from "react-redux";

const Users = ({ users }) => {

  console.log(users);
  return(
    <>
      <h1>This is Users page</h1>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    users: state.UsersReducer,
  }
}
export default connect(mapStateToProps)(Users)