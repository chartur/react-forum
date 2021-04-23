import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

const ProfileDropdown = ({ authUser, logoutAction }) => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    document.addEventListener('click', hide);

    return () => {
      document.removeEventListener('click', hide);
    }
  }, []);

  // const show = () => {
  //   setVisibility(true);
  // };

  const hide = () => {
    setVisibility(false);
  };

  const toggle = (event) => {
    event.nativeEvent.stopPropagation();
    setVisibility(!visibility);
  };

  return (
    <>
      <div className="position-relative cursor-pointer">
        <div className="nav-link dropdown-toggle" onClick={toggle}>
          <span>{authUser.authUser.name}</span>
        </div>
        <div className={`text-left dropdown-menu dropdown-menu-right ${visibility ? 'show' : ''}`} >
          <NavLink to="/profile" className="dropdown-item">
            <span className="fas fa-user mr-2" />
            <span>Profile</span>
          </NavLink>
          <NavLink to="/my-posts" className="dropdown-item">
            <span className="fas fa-newspaper mr-2" />
            <span>My Posts</span>
          </NavLink>
          <div className="dropdown-divider" />
          <div className="dropdown-item" onClick={logoutAction}>
            <span>
              <i className="fas fa-sign-out-alt mr-2"/>
              <span>Log Out</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
};

const mapPropsToState = (state) => {
  return {
    authUser: state.AuthReducer
  }
};

export default connect(mapPropsToState)(ProfileDropdown);