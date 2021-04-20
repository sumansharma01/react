
import './App.css';

const App=()=>{
  const title="Welcome to my new blog";
  return(
    <div className="App">
      <div className="content">
        <h1>Blog</h1>
        <p>{title}</p>
        <p>{Math.ceil(Math.random()*10)}</p>
      </div>
    </div>
  );
}

export default App;
