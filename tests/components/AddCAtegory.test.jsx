import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/Components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  //Test #1
  test("Debe cambiar la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    //asi disparamos el evento para verificar que efectivamente esta cambiando el estado del input
    fireEvent.change(input, { target: { value: "naruto" } });

    expect(input.value).toBe("naruto");
  });

  test("Debe llamar a onNewCategory si el input tiene un value", () => {
    //esto es una jest function, es un mock, una simulacion de una funcion (en este caso de onNewCategory)
    const onNewCategory = jest.fn();
    const inputValue = "naruto";

    //aqui escojo el componente
    render(<AddCategory onNewCategory={onNewCategory} />);

    //luego tomo los elementos que quiero evaluar
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //disparo los eventos que corresponden al componente en este caso el del cambio de estado del input y el envio del form.
    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    // screen.debug();

    //este input de la linea 31 tiene el ultimo valor dado despues de que ocurren los eventos, esto es algo de testing library.
    //tambien en esta linea verifico que al enviarse la info del input este vuelva a un estado vacio.
    expect(input.value).toBe(" ");

    //aqui verifico si la funcion fue llamada
    expect(onNewCategory).toHaveBeenCalled();
    //aqui verifico si la funcion fue llamada 1 vez
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    //aqui verifico si la funcion fue llamada con el argumento indicado en este caso seria inputValue.
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe llamar a onNewCategory si el input esta vacio", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    //puedo verificar que no se haya llamado a la funcion de ambas maneras
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
