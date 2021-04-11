import {Link, NavLink} from "react-router-dom";
import {useRef, useState} from "react";
import SignUpModal from "./includes/sign-up-modal";

const Navbar = () => {
  const signUpModalRef = useRef();
  const [mobileMenuShow, setShow] = useState(false);

  const mobileMenuToggle = () => {
    setShow(
      !mobileMenuShow
    )
  }

  const openSignUpModal = () => signUpModalRef.current.open();

  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to='/'>
          <img src="https://onenews.info/images/full_logo.png" height="40" className="d-inline-block align-top" alt="" />
        </Link>
        <button onClick={mobileMenuToggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse justify-content-between ${mobileMenuShow ? 'show' : '' }`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact activeClassName="active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
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
            <li className="nav-item">
            <span className="nav-link cursor-pointer" onClick={openSignUpModal}>
              <i className="fas fa-sign-in-alt mr-2" />
              <span>Sign Up</span>
            </span>
            </li>
          </ul>
        </div>
      </nav>

      <SignUpModal ref={signUpModalRef}/>
    </>
  )
}

export default Navbar;