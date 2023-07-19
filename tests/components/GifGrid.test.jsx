const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/Components/GifGrid");
const { useFetchGifs } = require("../../src/Hooks/useFetchGifs");

//aqui hacemos el mock completo del useFetchGifs (esto lo podemos hacer con hooks propios o de otras librerias)
jest.mock("../../src/Hooks/useFetchGifs");

describe("Pruebas de <GifGrid/>", () => {
  const category = "naruto";

  //Test #1
  test("debe de mostrar el loading inicialmente", () => {
    //Aqui le digo al "hook'(mock) como debe comportarse y colocar aqui los values que va a recibir.
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    // screen.debug();

    //aqui verificamos que el estado inicial del loading funcione cuando cargue la categoria y tambien que la categorya aparezca como texto.
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  //Test #2 - Hacer un mock completo de un custome hook
  test("Debe mostrar items cuando se cargan las imagenes  useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Luffy",
        url: "https://one-piece.com/monkeyDluffy",
      },
      {
        id: "123",
        title: "Zoro",
        url: "https://one-piece.com/Zoro",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    // screen.debug();

    //aqui espero que la cantidad de img que vengan sean 2 ya que en el array aproposito pase dos, de faltar alguno daria error.
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
