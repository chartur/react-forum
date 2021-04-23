import './toaster.css';
import {
  hideToast
} from "../../actions/toaster.actions";
import { connect } from "react-redux";
import { useEffect } from "react";

const Toaster = ({ toaster, hide }) => {

  useEffect(() => {
    if(toaster.shown) {
      setTimeout(hide, 3000)
    }
  })

  return (
    <>
      {
        toaster.shown
          ? (<div className={`toaster alert alert-dismissible fade show ${toaster.success ? 'alert-success' : 'alert-danger'}`}>
              <p>{toaster.message}</p>
              <button type="button" className="close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>)
        : ''
      }
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    toaster: state.ToasterReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hide: () => dispatch(hideToast())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);