import React, { useState } from "react";
import SearchBar from "./SearchBar";

import watchStore from "./stores/WatchStore";
import { observer } from "mobx-react";
import MovieItem from "./MovieItem";

const WatchList = () => {
  const [query, setQuery] = useState("");

  const watchItems = watchStore.items.filter((movie) => movie.status);

  //search for item
  const itemList = watchItems
    .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    .map((item) => <MovieItem item={item} key={item.id} />);

  return (
    <div className="container">
      <div className="row d-flex  align-items-center">
        <div className="col justify-content-start">
          <h2> Watch List</h2>
        </div>
        <div className="col justify-content-end">
          <h3 className="badge badge-primary badge-pill margin-auto">
            {itemList.length}
          </h3>
        </div>
      </div>

      <div className="list-group">
        <div className="list-group">
          <SearchBar setQuery={setQuery} />
        </div>
      </div>
      {itemList.length !== 0 ? (
        itemList
      ) : (
        <div className="list-group-item">No Movies found</div>
      )}
    </div>
  );
};

export default observer(WatchList);
