import './App.css';
import {Router, Switch, Link, Route} from "wouter"
import Home from './pages/home/Home';
import SinglePost from './pages/single-post/SinglePost';


function App() {

  return (
    <Router>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/post" component={SinglePost} />
        <Route path="/about" component={SinglePost} />
        <Route path="/" component={SinglePost} />
      </Switch>  
      
    </Router>
  );
}

export default App;
