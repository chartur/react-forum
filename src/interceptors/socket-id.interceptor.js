const socketIdInterceptor = (request) => {
  const socketId = localStorage.getItem('socket-id');
  if(socketId) {
    request.headers = {
      ...request.headers,
      'x-socket-id': socketId
    };
  }

  return request;
};

export default socketIdInterceptor;