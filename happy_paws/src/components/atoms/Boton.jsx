function Boton({ children, type = "button" }) {
  return (
    <button type={type}>
      {children}
    </button>
  );
}

export default Boton;
