import CampoInput from "../atoms/CampoInput";
import Boton from "../atoms/Boton";

function FormularioDatosPersonales({ datos, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <h1>Datos personales</h1>

      <CampoInput
        label="Nombre"
        name="nombre"
        placeholder="Carlos"
        value={datos.nombre}
        onChange={onChange}
      />

      <CampoInput
        label="Apellido"
        name="apellido"
        placeholder="Rojas"
        value={datos.apellido}
        onChange={onChange}
      />

      <CampoInput
        label="RUT"
        name="rut"
        placeholder="12.345.678-9"
        value={datos.rut}
        onChange={onChange}
      />

      <CampoInput
        label="Correo electrónico"
        name="correo"
        type="email"
        placeholder="carlos@email.com"
        value={datos.correo}
        onChange={onChange}
      />

      <CampoInput
        label="Teléfono"
        name="telefono"
        type="tel"
        placeholder="+56 9 1234 5678"
        value={datos.telefono}
        onChange={onChange}
      />

      <CampoInput
        label="Fecha de nacimiento"
        name="fechaNacimiento"
        type="date"
        value={datos.fechaNacimiento}
        onChange={onChange}
      />

      <fieldset>
        <legend>Objetivo principal</legend>

        <label>
          <input
            type="radio"
            name="objetivo"
            value="perder-peso"
            checked={datos.objetivo === "perder-peso"}
            onChange={onChange}
          />
          Perder peso
        </label>
<label>
          <input
            type="radio"
            name="objetivo"
            value="ganar-musculo"
            checked={datos.objetivo === "ganar-musculo"}
            onChange={onChange}
          />
          Ganar músculo
        </label>

        <label>
          <input
            type="radio"
            name="objetivo"
            value="resistencia"
            checked={datos.objetivo === "resistencia"}
            onChange={onChange}
          />
          Resistencia
        </label>
      </fieldset>

      <Boton type="submit">Continuar</Boton>
    </form>
  );
}

export default FormularioDatosPersonales;