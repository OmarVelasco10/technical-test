import React, { useState, useEffect } from "react";

const initailForm = {
  title: "",
  category: "",
  user: "",
  email: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.title]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.category) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titulo"
          onChange={handleChange}
          value={form.title}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          onChange={handleChange}
          value={form.category}
        />
         <input
          type="text"
          name="user"
          placeholder="Nombre del usuario"
          onChange={handleChange}
          value={form.user}
        />
         <input
          type="text"
          name="email"
          placeholder="Email del usuario"
          onChange={handleChange}
          value={form.email}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;

