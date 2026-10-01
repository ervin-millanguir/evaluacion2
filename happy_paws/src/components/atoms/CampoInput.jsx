function CampoInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <label>
      <span>{label}</span>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}

export default CampoInput;