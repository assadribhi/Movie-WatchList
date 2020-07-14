import React from "react";
// import { NailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { observer } from "mobx-react";
// import UpdateButton from "./buttons/UpdateButton";

const MovieItem = ({ item }) => {
  return (
    <ul className="list-group">
      <div className="col-8">
        <li className="list-group-item">{item.name}</li>
      </div>
      <div className="col-4">
        <DeleteButton itemId={item.id} />
      </div>
    </ul>
  );
};

export default observer(MovieItem);
