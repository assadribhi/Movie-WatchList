import { ListWrapper, SearchBarStyledLabel } from "../styles";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";
import watchStore from "./stores/WatchStore";
import { observer } from "mobx-react";
import MovieItem from "./MovieItem";

const WatchList = () => {
  const [query, setQuery] = useState("");

  const itemList = watchStore.items
    .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    .map((item) =>
      item.name === "" ? (
        console.log("No Movie Found")
      ) : (
        <MovieItem item={item} key={item.id} />
      )
    );

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <SearchBarStyledLabel>Watch List</SearchBarStyledLabel>
        </div>

        <div className="col-8">
          <SearchBar setQuery={setQuery} />
        </div>
      </div>
      {itemList}

      {/* <ListWrapper className="row">{itemList}</ListWrapper> */}
      {/* <AddButton />  */}
    </div>
  );
};

export default observer(WatchList);
