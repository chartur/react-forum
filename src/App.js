import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./pages/Users/Users";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home/Home";
import {Provider} from "react-redux";
import Posts from "./pages/Posts/Posts";
import {useEffect} from "react";
import {signIn} from "./actions/auth.actions";
import AuthService from "./services/auth.service";

const App = ({ store }) => {

  useEffect(() => {
    const authService = new AuthService();
    const getLoggedInUserData = async () => {
      const { data } = await authService.token();
      store.dispatch(signIn(data));
    };
    const jwtToken = localStorage.getItem('jwt_auth');
    if(jwtToken) {
      try {
        getLoggedInUserData(jwtToken);
      } catch (e) {
        console.log(e);
      }
    }
  }, [store]);

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navbar />
          <div className="mt-4">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
