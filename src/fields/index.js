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
      {meta.error && meta.touched && !meta.active && (
        <div className='mb-2 text-xs font-medium text-red-700 dark:text-red-500'>
          {meta.error}
        </div>
      )}
    </div>
  );
};

export const Select = ({ input, label, meta }) => {
  return (
    <div>
      <label>{label}</label>
      {meta.error && meta.touched && !meta.active && (
        <div className=' mb-2 text-xs font-medium text-red-700 dark:text-red-500'>
          {meta.error}
        </div>
      )}
      <select {...input}>
        <option></option>
        <option
          className='block text-sm font-medium text-gray-800'
          value='pizza'>
          Pizza
        </option>
        <option
          className='block text-sm font-medium text-gray-800'
          value='soup'>
          Soup
        </option>
        <option
          className='block text-sm font-medium text-gray-800'
          value='sandwich'>
          Sandwich
        </option>
      </select>
    </div>
  );
};
