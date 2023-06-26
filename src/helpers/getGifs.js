//Esta funcion realmente no es nec3esario que se encuentre dentro del componente, ya que solo necesita la prop "category" y esta puedo pasarla como argumento al llamar a la funcion dentro del componente.
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=pgEDvceLYK6PnrnzMf7utANJwdmxgSVP&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
