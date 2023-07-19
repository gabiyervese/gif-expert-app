import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  //Test #1

  test("Debe retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("naruto");
    //para asegurar que el arrai tenga mas de 0 elementos
    expect(gifs.length).toBeGreaterThan(0);

    //para confirmar que los elementos del array contengan las props edterminadas que devuelve la funcion getGifs();
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
