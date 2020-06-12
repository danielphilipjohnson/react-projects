import React from "react";
import "./App.css";


function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <p>MOVIE NAME</p>
      <form>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
         
        />

        <button>Search</button>
      </form>
    </div>
  );
}

export default App;
