import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import MovieModal from "../modals/MovieModal";
import { AddButtonStyled } from "../../styles";

const AddButton = (createItem) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <AddButtonStyled onClick={openModal}> Add a Movie </AddButtonStyled>
      {/* <BsPlusCircle className="float-right" size="1em" onClick={openModal} /> */}
      <MovieModal
        isOpen={isOpen}
        closeModal={closeModal}
        createItem={createItem}
      />
    </>
  );
};

export default AddButton;
