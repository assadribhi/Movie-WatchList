import { ListWrapper, SearchBarStyledLabel } from "../styles";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";
import watchStore from "./stores/WatchStore";
import { observer } from "mobx-react";
import MovieItem from "./MovieItem";

const WatchedList = () => {
  const [query, setQuery] = useState("");

  const itemList = watchStore.items
    .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    .map((item) => <MovieItem item={item} key={item.id} />);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <SearchBarStyledLabel>Watched List</SearchBarStyledLabel>
        </div>

        <div className="col-8">
          <SearchBar setQuery={setQuery} />
        </div>
      </div>
      {itemList}
    </div>
  );
};

export default observer(WatchedList);
