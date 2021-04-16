const accessTokenInterceptor = (request) => {
  const token = localStorage.getItem('jwt_auth');
  console.log(request);
  if(token) {
    request.headers = {
      ...request.headers,
      'Authorization': `Bearer ${token}`
    };
  }

  return request;
};

export default accessTokenInterceptor;