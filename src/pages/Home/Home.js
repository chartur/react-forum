import { connect } from "react-redux";
import { storeUsers } from "../../actions/users.actions";

const Home = (props) => {
  const getUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
      props.storeUsers(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button className="btn btn-success" onClick={getUsers}>Get users</button>
  )
};

const mapStateToProps = (state) => {
  return {
    users: state.UserReducer,
  }
};

const mapDispatchToProp = (dispatch) => {
  return {
    storeUsers: (users) => {
      dispatch(storeUsers(users));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProp)(Home)
