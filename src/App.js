
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

const App=()=>{
  const title="Welcome to my new blog";
  return(
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      
    </div>
  );
}

export default App;
