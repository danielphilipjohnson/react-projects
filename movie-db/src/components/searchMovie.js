import React from "react";
import ReactDOM from "react-dom";

class SearchMovie extends React.Component {
  render() {
    return (<form className="form">
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
      />

      <button className="button">Search</button>
    </form>)
  }
}

export default SearchMovie;