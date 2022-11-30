import React, { useState, useEffect } from "react";

const initailForm = {
  title: "",
  category: "",
  author: "",
  year: "",
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
      [e.target.name]: e.target.value,
    });
  };

  function isNumeric(val) {
    return /^[A-Za-z\s]*$/.test(val);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (
      !form.title ||
      !form.category ||
      !form.author ||
      !form.year ||
      !form.user ||
      !form.email
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (
      !isNumeric(form.title) ||
      !isNumeric(form.category) ||
      !isNumeric(form.author) ||
      !isNumeric(form.user)
    ) {
      console.log(isNumeric(form.title));
      alert("El título, categoría, autor o usuario no pueden contener números");
      console.log(isNumeric(form.title));
      return;
    } else {
      console.log(
        isNaN(form.title) ||
          isNaN(form.category) ||
          isNaN(form.author) ||
          isNaN(form.user)
      );
    }

    if (!emailRegex.test(form.email)) {
      alert("Introduzca un correo válido");
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
      <h3>
        {dataToEdit
          ? "Editar prestamo de libro existente"
          : "Registrar un nuevo prestamo de libro"}
      </h3>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input
          type="text"
          name="title"
          placeholder="Titulo"
          onChange={handleChange}
          value={form.title}
        />
        <label>Categoría</label>
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          onChange={handleChange}
          value={form.category}
        />
        <label>Autor del libro</label>
        <input
          type="text"
          name="author"
          placeholder="Autor del libro"
          onChange={handleChange}
          value={form.author}
        />
        <label>Año de publicación</label>
        <input
          type="text"
          name="year"
          placeholder="Año de publicación"
          onChange={handleChange}
          value={form.year}
        />
        <label>Nombre del usuario que recibe el libro</label>
        <input
          type="text"
          name="user"
          placeholder="Nombre del usuario"
          onChange={handleChange}
          value={form.user}
        />
        <label>Email del usuario que recibe el libro</label>
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
