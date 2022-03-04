import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
let OrderForm = ({
  dishTypeValue,
  handleSubmit,
  pristine,
  reset,
  submitting,
}) => {
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
            <option value='Pizza'>Pizza</option>
            <option value='Soup'>Soup</option>
            <option value='Sandwich'>Sandwich</option>
          </Field>
        </div>
      </div>
      {dishTypeValue === '' && <div></div>}
      {dishTypeValue === 'Pizza' && (
        <div>
          <div>
            <label>Customize Your Pizza</label>
            <div>
              <label>Diameter(Between 20 to 55 cm)</label>
              <Field
                name='diameter'
                component='input'
                type='number'
                step='0.1'
                min='20'
                max='55'
                placeholder='Diameter'
              />
            </div>
            <div>
              <label>Number of Slices(Up to 16 Slices)</label>
              <Field
                name='numOfSlices'
                component='input'
                type='number'
                step='2'
                min='0'
                max='16'
                placeholder='Number of Slices'
              />
            </div>
          </div>
        </div>
      )}
      {dishTypeValue === 'Soup' && (
        <div>
          <div>
            <label>Customize Your Soup</label>
            <div>
              <label>Spiciness Scale(Between 1 to 10)</label>
              <Field
                name='spiciness'
                component='input'
                type='number'
                min='1'
                max='10'
                placeholder='Spiciness'
              />
            </div>
          </div>
        </div>
      )}
      {dishTypeValue === 'Sandwich' && (
        <div>
          <div>
            <label>Customize Your Sanwich</label>
            <div>
              <label>Number of Slices of Bread (Between 1 to 4)</label>
              <Field
                name='breadSlices'
                component='input'
                type='number'
                min='1'
                max='4'
                placeholder='Bread Slices'
              />
            </div>
          </div>
        </div>
      )}
      <div>
        <button type='submit' disabled={pristine || submitting}>
          Submit
        </button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

// Decorate with redux-form
OrderForm = reduxForm({
  form: 'selectingFormValues',
})(OrderForm);

// Decorate with connect to read form values
const selector = formValueSelector('selectingFormValues');
OrderForm = connect((state) => {
  const dishTypeValue = selector(state, 'dishType');

  return {
    dishTypeValue,
  };
})(OrderForm);

export default OrderForm;
