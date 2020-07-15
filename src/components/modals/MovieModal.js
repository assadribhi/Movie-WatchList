import React, { useState } from "react";
import Modal from "react-modal";
import watchStore from "../stores/WatchStore";
import { CreateButtonStyled } from "../../styles";

const customStyles = {
  content: {
    top: "10%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%,50%)",
  },
};

const MovieModal = ({ isOpen, closeModal }) => {
  const [item, setItem] = useState({
    name: "",
  });

  const handleChange = (event) => {
    const newItem = { ...item, [event.target.name]: event.target.value };
    setItem(newItem);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    watchStore.createItem(item);
    closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Movie Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Movie Name</label>
            <input
              required
              name="name"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={item.name}
            />
          </div>
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default MovieModal;
