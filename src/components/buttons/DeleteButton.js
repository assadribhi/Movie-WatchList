import React from "react";
import { DeleteButtonStyled } from "../../styles";
import watchStore from "../stores/WatchStore";

const DeleteButton = ({ itemId }) => {
  const handleDelete = () => {
    watchStore.deleteItem(itemId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
