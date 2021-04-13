import Modal from "../../modal/modal";
import {forwardRef, useImperativeHandle, useRef} from "react";

const SignInModal = forwardRef(({ onSubmit } , ref) => {
  const modal = useRef();
  const loginForm = useRef();

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
      reset
    })
  );

  const doLogin = async () => {
    const formData = new FormData(loginForm.current);
    const userData = {};
    for(let k of formData.keys()) {
      userData[k] = formData.get(k);
    }

    onSubmit(userData);
  };

  const open = () => modal.current.open();
  const close = () => modal.current.close();
  const reset = () => loginForm.current.reset();

  const modalButtons = {
    cancel: {
      text: 'Close'
    },
    success: {
      text: 'Login',
      handler: doLogin,
    }
  };

  return (
    <Modal header="Sign In" buttons={modalButtons} ref={modal} onClose={() => loginForm.current.reset()}>
      <form ref={loginForm}>
        <div className="form-group">
          <label htmlFor="login-email">Email</label>
          <input id="login-email" name="email" type='email' placeholder="Input your email address" className="form-control form-control-sm"/>
        </div>

        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input id="login-password" name="password" type='password' placeholder="Input your password" className="form-control form-control-sm"/>
        </div>
      </form>
    </Modal>
  )
});

export default SignInModal