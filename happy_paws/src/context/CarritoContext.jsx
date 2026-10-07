import { useMemo, useState } from "react";
import { CarritoContext } from "./CarritoContext";

export function CarritoProvider({ children }) {
  const [items, setItems] = useState([]);

  const agregarAlCarrito = (producto) => {
    setItems((itemsActuales) => {
      const itemExistente = itemsActuales.find((item) => item.id === producto.id);

      if (itemExistente) {
        return itemsActuales.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        );
      }

      return [...itemsActuales, { ...producto, cantidad: 1 }];
    });
  };

  const cantidadTotal = useMemo(
    () => items.reduce((total, item) => total + item.cantidad, 0),
    [items],
  );

  const valorTotal = useMemo(
    () => items.reduce((total, item) => total + item.precio * item.cantidad, 0),
    [items],
  );

  return (
    <CarritoContext.Provider
      value={{ items, agregarAlCarrito, cantidadTotal, valorTotal }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
