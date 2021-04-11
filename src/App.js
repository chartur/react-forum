import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./pages/Users/Users";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home/Home";
import {Provider} from "react-redux";
import Posts from "./pages/Posts/Posts";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navbar />
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
      </Router>
    </Provider>
  );
}

export default App;
