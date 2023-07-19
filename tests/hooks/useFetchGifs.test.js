import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/Hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  //test #1
  test("Debe regresar el estado inicial", () => {
    //Los hooks necesitan parte del ciclo de vida de los componentes para funcionar, no podemos evaluarlos de forma individual/aislada.Sin embargo, podemos trabajar con ellos usando la funcion "renderHook" el cual esta incluido en "@testing-library/react";
    //aqui utilizo "renderHook" para llamar al useFetchGifs y de esta forma procesar los values que devuelve.
    const { result } = renderHook(() => useFetchGifs("one piece"));
    //aqui desestructutamos lo que contiene el hook en este momento.
    const { images, isLoading } = result.current;

    //aqui verificamos que el array de images este vacio.
    expect(images.length).toBe(0);

    //aqui verificamos que isLoading tenga el valor true.
    expect(isLoading).toBeTruthy();
  });

  //test #2
  test("Debe de retornar un array de imagenes y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("one piece"));

    //Como aqui debo esperar que haga un cambio del estado inicial en la funcion utilizo la funcion "waitFor" de "@testing-library/react", lo cual esora una promesa por lo que debe estar en una funcion asincrona ESPERANDO a que el cambio que queremos que pase ocurra.
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    //luego veo los values de lo que contiene el hook (el cual ya debio cambiar)
    const { images, isLoading } = result.current;

    //y finalmente verifico si lo que quiero obtener se cumple.
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
