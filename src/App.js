import React, { useState } from "react";
import WatchList from "./components/WatchList";
import WatchedList from "./components/WatchedList";
import watchStore from "./components/stores/WatchStore";
import filmCountDown from "./FilmCountDown.gif";

import { CountDownImage } from "./styles";

function App() {
  const [item, setItem] = useState({
    name: "",
    status: true,
  });

  const handleChange = (event) => {
    event.preventDefault();
    const newItem = { ...item, [event.target.name]: event.target.value };
    setItem(newItem);
  };

  const handleNewItemSubmit = (event) => {
    event.preventDefault();
    watchStore.createNewItem(item);
  };

  const handleWatchedItemSubmit = (event) => {
    event.preventDefault();
    watchStore.createWatchedItem(item);
  };

  return (
    <>
      <div className="Container  d-flex justify-content-center align-items-center">
        <h1>Movie Watchlist Tracker</h1>
      </div>
      <div>
        <CountDownImage>
          <img src={filmCountDown} alt={filmCountDown} />
        </CountDownImage>
      </div>
      <div className="container">
        <form>
          <div className="input-group mb-3">
            <div class="input-group-append">
              <button
                className="btn btn-outline-secondary justify-content-start"
                type="Submit"
                onClick={handleNewItemSubmit}
              >
                Add a Movie to Watch
              </button>
            </div>
            <input
              required="required"
              name="name"
              type="text"
              onChange={handleChange}
              placeholder="Add a Movie"
              className="form-control"
              value={item.name}
            />
            <div class="input-group-append">
              <button
                className="btn btn-outline-primary"
                type="Submit"
                onClick={handleWatchedItemSubmit}
              >
                Add a Watched Movie
              </button>
            </div>
          </div>
        </form>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <WatchList />
            </div>
            <div className="col-6">
              <WatchedList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
