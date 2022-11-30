import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Registros de prestamos de libros</h3>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Categoría</th>
            <th>Autor</th>
            <th>Año de publicación</th>
            <th>Usuario con el libro</th>
            <th>Correo del usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
             data.map((el) => (
                <CrudTableRow
                  key={el.id}
                  el={el}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteData}
                />
              ))
          ) : (
            <tr>
              <td colSpan="3">No hay registro de prestamo de libros</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
