import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";
import propTypes from "prop-types";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);

  //Usualmente a los eventos se les llama con el prefijo "on". En este caso abajo cuando le mande la prop con la funcion al componente le colocare un nuevo nombre "onNewCategory" de esta forma semanticamente estaria correcto y no tengo que escribir tanto codigo nuevamente en el componente para cambiar su estado, ya que en este componente principal ya se encuentra la funcion con dicho codigo necesario.
  const onAddCategory = (newCategory) => {
    //aqui aplicamos la condicion de que si la newCategory ya existe en el arreglo, no la vuelva a agregar.
    if (categories.includes(newCategory)) {
      return alert("Ya se encuentra incluida en la lista esta categoria!");
    }

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <button onClick={onAddCategory}>Add</button>
      {/*El .map me permite barrer cada uno de los elementos del arreglo y regresar algo nuevo. En este caso sera un li por cada elemento recorrido. */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
