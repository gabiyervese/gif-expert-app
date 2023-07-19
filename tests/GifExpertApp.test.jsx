import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  //Test #1 debe agregar la categorya si no existe en el array.

  test("Should add category if it's not repeated", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: "One Piece" } });
    fireEvent.submit(form);

    //aqui espero que se haya agragado al nueva categoria al array que ya tenia un elemento inicial para finalmente tener una longitud de 2.
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);
  });

  test("Shouldnt add category if already exist", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    //vuelvo a enviarle el valor naruto a ver si la agrega a la lista nuevamente.
    fireEvent.input(input, { target: { value: "Naruto" } });
    fireEvent.submit(form);
    //verifico que no se agregue longitud deberia seguir siendo 1 porque es una categoria repetida.
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);
    screen.debug();
  });
});
