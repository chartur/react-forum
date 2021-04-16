const jsonInterceptor = (request) => {
  request.headers = {
    ...request.headers,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  return request;
};

export default jsonInterceptor;