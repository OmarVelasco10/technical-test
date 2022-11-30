import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { title, category, author, year, id, user, email } = el;

  return (
    <tr>
      <td>{title}</td>
      <td>{category}</td>
      <td>{author}</td>
      <td>{year}</td>
      <td>{user}</td>
      <td>{email}</td>
      <td>
        <button className="button-edit" onClick={() => setDataToEdit(el)}>Editar</button>
        <button className="button-delete" onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;