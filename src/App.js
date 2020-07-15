import React from "react";
import WatchList from "./components/WatchList";
import WatchedList from "./components/WatchedList";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p>Movies to Watch</p>
          <WatchList />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p>Watched Movies</p>
          <WatchedList />
        </div>
      </div>
    </div>
  );
}

export default App;
