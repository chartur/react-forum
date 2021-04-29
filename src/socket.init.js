import {io} from "socket.io-client";
import environments from "./environments";
import {createNewPost} from "./actions/posts.actions";

const socketInit = (store) => {
  const socket = io(
    environments.socketHost,
    {
      transports: ['websocket']
    }
  );

  socket.on('connect', () => {
    localStorage.setItem('socket-id', socket.id)
  })

  socket.on('onNewPost', (postData) => onNewPost(store, postData));
}

const onNewPost = (store, postData) => {
  store.dispatch(createNewPost(postData));
}

export default socketInit;

