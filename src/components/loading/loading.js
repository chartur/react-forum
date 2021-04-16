import { useState, useImperativeHandle, forwardRef } from 'react';
import './loading.css';

const Loading = forwardRef((props, ref) => {

  useImperativeHandle(
    ref,
    () => ({
      display,
      hide,
      toggle,
    })
  );

  const [loading, setLoading] = useState(false);

  const display = () => {
    setLoading(true);
  };

  const hide = () => {
    setLoading(false);
  };

  const toggle = () => {
    setLoading(!loading);
  };

  return (
    <>
    {
      loading
        ? (<div className="app-loading">
            <div className="lds-dual-ring" />
          </div>)
        : ''
    }
    </>
  )
});

export default Loading;