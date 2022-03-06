export const Input = (props) => {
  const { label, input, type, meta, min, max, step } = props;
  return (
    <div>
      <input
        {...input}
        type={type}
        min={min}
        max={max}
        step={step}
        autoFocus={props.autoFocus}
      />
      <label>{label}</label>
      {meta.error && meta.touched && !meta.active && <div>{meta.error}</div>}
    </div>
  );
};

export const Select = ({ input, label, meta }) => {
  return (
    <div>
      <label>{label}</label>
      {meta.error && meta.touched && !meta.active && <div>{meta.error}</div>}
      <select {...input}>
        <option></option>
        <option value='pizza'>Pizza</option>
        <option value='soup'>Soup</option>
        <option value='sandwich'>Sandwich</option>
      </select>
    </div>
  );
};
