import {forwardRef, useImperativeHandle, useState} from "react";
import PropTypes from 'prop-types';

export const Modal = forwardRef((props, ref) => {

  useImperativeHandle(
    ref,
    () => ({
      open,
      close
    }),
  )

  const [modalShow, setShow] = useState(false);

  const open = () => {
    setShow(true);
  }

  const close = () => {
    setShow(false);
    props.onClose();
  }

  const onDismiss = () => {
    if(props.onDismissable) {
      close();
    }
  }

  return(
    <>
      <div className={`modal fade ${modalShow ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{display: modalShow ? 'block' : 'none'}}>
        <div className={`modal-dialog ${props.size ? 'modal-'+props.size : ''}`} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.header}</h5>
              <button onClick={close} type="button" className="close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.children}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={close}>{props.buttons.cancel.text}</button>
              <button onClick={props.buttons.success.handler} type="button" className="btn btn-primary">{props.buttons.success.text}</button>
            </div>
          </div>
        </div>
      </div>
      { modalShow ? (<div onClick={onDismiss} className="modal-backdrop fade show" />) : '' }
    </>
  )
})

Modal.propTypes = {
  size: PropTypes.string,
  header: PropTypes.string.isRequired,
  onDismissable: PropTypes.bool,
  onClose: PropTypes.func,
  buttons: PropTypes.shape({
    cancel: PropTypes.shape({
      text: PropTypes.string,
    }),
    success: PropTypes.shape({
      text: PropTypes.string,
      handler: PropTypes.func
    })
  })
}

Modal.defaultProps = {
  size: '',
  header: 'Modal',
  onDismissable: false,
  onClose: () => {},
  buttons: {
    cancel: {
      text: 'Cancel',
    },
    success: {
      text: 'Save',
      handler: () => {}
    }
  }
}

export default Modal;