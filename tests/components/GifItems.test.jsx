import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/Components/GifITem";

describe("Pruebas en <GifItem/>", () => {
  const title = "one piece";
  const url = "http://onepiece.com/monkeyDluffy";

  //Test #1
  test("Debe hacer match con el snapshot ", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  //Test #2
  test("Debe mostrar la imagen con el URL y el ALT indicado ", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();

    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    //Esta es una forma mas limpia de hacer lo de arriba:
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  //Test #3
  test("Debe mostrar el title como texto en el componente", () => {
    render(<GifItem title={title} url={url} />);
    //Aqui buscamos que el title efectivamente exista.
    expect(screen.getByText(title)).toBeTruthy();
  });
});
