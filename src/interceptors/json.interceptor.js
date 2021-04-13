export default (request) => {
  request.headers = {
    ...request.headers,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  return request;
}