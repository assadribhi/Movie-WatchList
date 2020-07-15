import React from "react";
// import { NailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { observer } from "mobx-react";
import MoveButton from "./buttons/MoveButton";

const MovieItem = ({ item }) => {
  return (
    // <ul className="list-group">
    //   <div className="col-8">
    //     <li className="list-group-item">{item.name}</li>
    //   </div>
    //   <div className="col-4">
    //     <DeleteButton itemId={item.id} />
    //   </div>
    // </ul>

    <table class="table table-hover">
      <tbody>
        <tr>
          <th scope="row">{item.name}</th>
          <DeleteButton itemId={item.id} />
          {/* <MoveButton } /> */}
        </tr>
      </tbody>
    </table>
  );
};

export default observer(MovieItem);
