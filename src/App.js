
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';

const App=()=>{
  const title="Welcome to my new blog";
  return(
    <Router>
        <div className="App">
          <Navbar />
          <div className="content" style={{
            marginTop: "50px"
          }}>
            <Switch>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/">
              <Home />
              </Route>
              
            </Switch>
            
          </div>
        
        </div>
    </Router>
  );
}

export default App;
