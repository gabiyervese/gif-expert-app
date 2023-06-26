import { GifItem } from "./GifITem";
import { useFetchGifs } from "../Hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  //Aqui implementamos el custom hook para limpiar el componente de tanto codigo.
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {/* Si isLoading es true coloca el elemento */}
      {isLoading && <h2>Cargando...</h2>}
      <ul className="card-grid">
        {images.map((image) => {
          return (
            <li key={image.id} className="card">
              <GifItem image={image} />;
              {/* Si quisiera esparcir todas las props en el componente puedo usar {...objeto} de esta forma es muy util cual quiero enviar tooodas las props y son muchas */}
            </li>
          );
        })}
      </ul>
    </>
  );
};
