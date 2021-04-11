import Modal from "../../modal/modal";
import {forwardRef, useImperativeHandle, useRef, useState} from "react";
import environments from "../../../environments";

const SignUpModal = forwardRef((props , ref) => {
  const modal = useRef();
  const loginForm = useRef();

  useImperativeHandle(
    ref,
    () => ({
      open,
      close
    })
  )

  const register = async () => {
    const formData = new FormData(loginForm.current);
    const userData = {};
    for(let k of formData.keys()) {
      userData[k] = formData.get(k);
    }
    userData.image = {
      filePath: 'https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/result.jpeg',
      name: 'result.jpeg'
    }
    console.log(userData);
    try {
      const res = await signUpRequest(userData);

    } catch (e) {
      console.log(e);
    }
  }

  const signUpRequest = (body) => {
    return fetch(environments.endpoints.doRegister, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
  }

  const open = () => modal.current.open();
  const close = () => modal.current.close();

  const modalButtons = {
    cancel: {
      text: 'Փակել'
    },
    success: {
      text: 'Գրանցվել',
      handler: register,
    }
  }

  return (
    <Modal header="Sign Up" buttons={modalButtons} ref={modal}>
      <form ref={loginForm}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type='text' placeholder="Type your full name" className="form-control form-control-sm"/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type='email' placeholder="Input your email address" className="form-control form-control-sm"/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type='password' placeholder="Input your password" className="form-control form-control-sm"/>
        </div>
      </form>
    </Modal>
  )
})

export default SignUpModal;