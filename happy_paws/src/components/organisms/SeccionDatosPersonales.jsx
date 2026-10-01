import { useEffect, useState } from "react";
import FormularioDatosPersonales from "../molecules/FormularioDatosPersonales";

const datosIniciales = {
  nombre: "",
  apellido: "",
  rut: "",
  correo: "",
  telefono: "",
  fechaNacimiento: "",
};

function SeccionDatosPersonales() {
  const [datos, setDatos] = useState(() => {
    const datosGuardados = localStorage.getItem("happy-paws-datos-personales");

    if (!datosGuardados) {
      return datosIniciales;
    }

    try {
      return { ...datosIniciales, ...JSON.parse(datosGuardados) };
    } catch {
      return datosIniciales;
    }
  });

  useEffect(() => {
    localStorage.setItem("happy-paws-datos-personales", JSON.stringify(datos));
  }, [datos]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(datos);
  };

  return (
    <section>
      <FormularioDatosPersonales
        datos={datos}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </section>
  );
}

export default SeccionDatosPersonales;