function Boton({ children = "Enviar", type = "button" }) {
  return (
    <button type={type}>
      {children}
    </button>
  );
}

export default Boton;
