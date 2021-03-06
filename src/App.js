import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Users from "./pages/Users/Users";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home/Home";
import {Provider} from "react-redux";
import Posts from "./pages/Posts/Posts";
import {useEffect, useState} from "react";
import {signIn} from "./actions/auth.actions";
import AuthService from "./services/auth.service";
import Profile from "./pages/Profile/Profile";
import Loading from './components/loading/loading';
import Toaster from "./components/toaster/toaster";
import PostPage from "./pages/Post/PostPage";
import Footer from "./components/footer";

const App = ({ store }) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  store.subscribe(() => {
    const storeLoggedIn = store.getState().AuthReducer.loggedIn;
    if(loggedIn !== storeLoggedIn) {
      setLoggedIn(storeLoggedIn);
    }
  });

  useEffect(() => {
    const authService = new AuthService();
    const getLoggedInUserData = async () => {
      try {
        const { data } = await authService.token();
        store.dispatch(signIn(data));
      } catch (e) {
        localStorage.removeItem('jwt_auth');
        setInit(true);
      }

    };
    const jwtToken = localStorage.getItem('jwt_auth');
    if(jwtToken) {
      (async() => {
        await getLoggedInUserData(jwtToken);
        setInit(true);
      })()
    } else {
      setInit(true);
    }
  }, [store]);


  return (
    <>
      {
        !init
          ? (<Loading displayed={true} />)
          : (
            <Provider store={store}>
              <Router>
                <div className="container">
                  <Navbar />
                  <div className="mt-4 mb-4">
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route path="/users">
                      <Users />
                    </Route>
                    <Route path="/posts">
                      <Posts />
                    </Route>
                    <Route path="/profile">
                      {
                        loggedIn ? <Profile /> : <Redirect to="/"/>
                      }
                    </Route>
                    <Route path="/post/:postId">
                      <PostPage />
                    </Route>
                  </div>
                  <Footer />
                </div>
              </Router>
              <Toaster />
            </Provider>

          )
      }
    </>
  );
};

export default App;
