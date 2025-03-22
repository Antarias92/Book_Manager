import React from "react";
import { useNavigate } from "react-router-dom";
import ItemForm from "./ItemForm";

function AddBook({ onAdd }) {
  const navigate = useNavigate();

  function handleAdd(newBook) {
    onAdd(newBook);
    navigate("/");
  }

  return <ItemForm initialData={{ title: "", author: "", genre: "", status:"" }} onSubmit={handleAdd} />;
}

export default AddBook;