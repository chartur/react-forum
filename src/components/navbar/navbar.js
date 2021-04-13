import {Link, NavLink} from "react-router-dom";
import {useRef, useState} from "react";
import SignUpModal from "./includes/sign-up-modal";
import SignInModal from "./includes/sign-in-modal";
import {connect} from "react-redux";
import {signIn, signOut} from "../../actions/auth.actions";
import Modal from '../modal/modal'
import AuthService from '../../services/auth.service';

const Navbar = ({ authUser, loginAction, logoutAction }) => {
  const authService = new AuthService();

  const [mobileMenuShow, setShow] = useState(false);

  const signUpModalRef = useRef();
  const signInModalRef = useRef();
  const logOutModalRef = useRef();

  const logoutModalButtons = {
    cancel: {
      text: 'No'
    },
    success: {
      text: 'Yes, logout!',
      handler: () => {
        logOutModalRef.current.close();
        logoutAction()
      }
    }
  };

  const mobileMenuToggle = () => {
    setShow(
      !mobileMenuShow
    )
  };

  const onSignUpFormSubmit = async (userData) => {
    try {
      const { data } = await authService.doRegister(userData);
      console.log(data);
      loginAction(data);
      signUpModalRef.current.close();
      signUpModalRef.current.reset();
    } catch (e) {
      console.error(e);
    }
  };
  const onSignInFormSubmit = async (userData) => {
    try {
      const { data } = await authService.doLogin(userData);
      loginAction(data);
      signUpModalRef.current.close();
      signUpModalRef.current.reset();
    } catch (e) {
      console.error(e);
    }
  };

  const openSignUpModal = () => signUpModalRef.current.open();
  const openSignInModal = () => signInModalRef.current.open();
  const openLogOutModal = () => logOutModalRef.current.open();

  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to='/'>
          <img src="https://onenews.info/images/full_logo.png" height="40"
               className="d-inline-block align-top" alt=""/>
        </Link>
        <button onClick={mobileMenuToggle} className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className={`collapse navbar-collapse justify-content-between ${mobileMenuShow ? 'show' : '' }`}
             id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact activeClassName="active" className="nav-link" to="/">Home <span
                className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/users">Users List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/posts">Posts</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            {
              authUser.loggedIn
                ? (
                  <li className="nav-item">
                    <span className="nav-link cursor-pointer" onClick={openLogOutModal}>
                      <i className="fas fa-sign-out-alt mr-2"/>
                      <span>Log Out</span>
                    </span>
                  </li>
                )
                : (
                  <>
                    <li className="nav-item">
                      <span className="nav-link cursor-pointer" onClick={openSignUpModal}>
                        <i className="fas fa-user-plus mr-2" />
                        <span>Sign Up</span>
                      </span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link cursor-pointer" onClick={openSignInModal}>
                        <i className="fas fa-sign-in-alt mr-2"/>
                        <span>Sign In</span>
                      </span>
                    </li>
                  </>
                )
            }
          </ul>
        </div>
      </nav>

      <SignUpModal onSubmit={onSignUpFormSubmit} ref={signUpModalRef}/>
      <SignInModal onSubmit={onSignInFormSubmit} ref={signInModalRef}/>

      <Modal size="sm" header="Do you want to logout" buttons={logoutModalButtons} ref={logOutModalRef}>
        <p>Are you sure that you want to logout?</p>
      </Modal>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    authUser: state.AuthReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (data) => {
      dispatch(signIn(data));
    },
    logoutAction: () => {
      dispatch(signOut())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);