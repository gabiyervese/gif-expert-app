import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //Importamos la funcion getGifs y con esto evitamos que se vuelva a renderizar la funcion al no crearla adentro del componente.
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    //deja de cargar cuando ya encuentra las imagenes.
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
