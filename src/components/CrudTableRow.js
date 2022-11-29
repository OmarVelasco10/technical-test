import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { title, category, id, user, email } = el;

  return (
    <tr>
      <td>{title}</td>
      <td>{category}</td>
      <td>{user}</td>
      <td>{email}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;