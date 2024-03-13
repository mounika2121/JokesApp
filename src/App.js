import {Component} from'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';

class App extends Component{
  componentDidMount(){
    document.title = "Jokes App";
  }

  render(){
    return(
      <div>
        <Router>
          <Routes>
            <Route exact path='/' Component={Login} />
            <Route exact path='/home' Component={Home} />
            <Route path='*' Component={NotFound} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App