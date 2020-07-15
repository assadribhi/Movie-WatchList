import React, { useState } from "react";
import WatchList from "./components/WatchList";
import WatchedList from "./components/WatchedList";
import watchStore from "./components/stores/WatchStore";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    watchStore.createItem(item);
  };

  return (
    <>
      <div className="Container  d-flex justify-content-center align-items-center">
        <h1>Movie Watchlist Tracker</h1>
      </div>
      <div className="container">
        <form className="col-6" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              required="required"
              name="name"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={item.name}
            />
            <div class="input-group-append">
              <button
                className="btnbtn-outline-secondary"
                type="Submit"
                onClick={handleSubmit}
              >
                Create
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
