import React from "react";
import { WatchButtonStyled } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { observer } from "mobx-react";

const MovieItem = ({ item }) => {
  return (
    <ul className="list-group">
      <div>
        <li className="list-group-item d-flex align-items-center">
          <div className="col"> {item.name}</div>
          <div className="col justify-content-end">
            <DeleteButton itemId={item.id} />
            <WatchButtonStyled onClick={() => (item.status = !item.status)}>
              {item.status ? "Watch" : "Unwatch"}
            </WatchButtonStyled>
          </div>
        </li>
      </div>
    </ul>
  );
};

export default observer(MovieItem);
