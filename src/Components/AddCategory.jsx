import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    //En el evento on change para los inputs con los que el user interactua siempre evaluare el "set" con el event.target.value, que es lo que el usuario introduce, de esta forma al crear la funcion por fuera, abajo en el onchange puedo colocar solo el nombre de la funcion sin necesidad de hacer toda la operacion abajo.
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    //con el prevent evito que cada vez que enviemos el form se refresque la pagina entera lo cual hace por defecto.
    event.preventDefault();
    const newInputValue = inputValue.trim();
    //Con este if condiciomanos a que no se permita elviar el valor del input si su longitud es <= a un caracter.
    if (newInputValue.length <= 1) return;
    //Ejecuto la funcion con el newInputValue
    onNewCategory(newInputValue);
    //Con esto al enviar el form el input vuelve a su estado vacio.
    setInputValue(" ");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifs"
        // No debo olvidar colocar el valor del input!!!
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
