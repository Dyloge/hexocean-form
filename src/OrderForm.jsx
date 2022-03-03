import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
let OrderForm = (props) => {
  const { dishTypeValue, fullName, handleSubmit, pristine, reset, submitting } =
    props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Dish Name</label>
        <div>
          <Field
            name='dishName'
            component='input'
            type='text'
            placeholder='Dish Name'
          />
        </div>
      </div>
      <div>
        <label>Preparation Time</label>
        <div>
          <Field
            name='preparationTime'
            component='input'
            type='text'
            placeholder='Preparation Time'
          />
        </div>
      </div>
      <div>
        <label>Type of Dish</label>
        <div>
          <Field name='dishType' component='select'>
            <option></option>
            <option value='Pizza Options'>Pizza</option>
            <option value='Soup Options'>Soup</option>
            <option value='Sandwich Options'>Sandwich</option>
          </Field>
        </div>
      </div>
      {dishTypeValue && <div>{dishTypeValue}</div>}
      <div>
        <button type='submit' disabled={pristine || submitting}>
          Submit {fullName}
        </button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

// The order of the decoration does not matter.

// Decorate with redux-form
OrderForm = reduxForm({
  form: 'selectingFormValues', // a unique identifier for this form
})(OrderForm);

// Decorate with connect to read form values
const selector = formValueSelector('selectingFormValues'); // <-- same as form name
OrderForm = connect((state) => {
  // can select values individually
  const hasEmailValue = selector(state, 'hasEmail');
  const dishTypeValue = selector(state, 'dishType');
  // or together as a group
  const { dishName, preparationTime } = selector(
    state,
    'dishName',
    'preparationTime'
  );
  return {
    hasEmailValue,
    dishTypeValue,
    fullName: `${dishName || ''} ${preparationTime || ''}`,
  };
})(OrderForm);

export default OrderForm;
