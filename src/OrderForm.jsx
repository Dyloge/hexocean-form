import { Input, Select } from './fields';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { required } from './validation';
import submit from './submit';

let OrderForm = ({ typeValue, handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          label='Dish Name'
          name='name'
          component={Input}
          type='text'
          placeholder='Dish Name'
          validate={[required]}
        />
      </div>
      <div>
        <Field
          label='h'
          name='hour'
          component={Input}
          type='number'
          placeholder='hour'
          min='0'
          max='3'
          validate={[required]}
        />
        <Field
          label='m'
          name='minute'
          component={Input}
          type='number'
          placeholder='minute'
          min='0'
          max='59'
          validate={[required]}
        />
        <Field
          label='s'
          name='second'
          component={Input}
          type='number'
          placeholder='second'
          min='0'
          max='59'
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name='type'
          component={Select}
          label='Type of Dish'
          placeholder='Type of Dish'
          validate={[required]}
        />
      </div>
      {typeValue === '' && <div></div>}
      {typeValue === 'pizza' && (
        <div>
          <div>
            <label>Customize Your Pizza</label>
            <div>
              <Field
                name='diameter'
                type='number'
                component={Input}
                label='Diameter (Between 20 to 55 cm)'
                validate={[required]}
                step='0.1'
                min='20'
                max='55'
                placeholder='Diameter'
              />
            </div>
            <div>
              <Field
                name='no_of_slices'
                component={Input}
                type='number'
                label='Number of Slices(Up to 16 Slices)'
                validate={[required]}
                step='2'
                min='0'
                max='16'
                placeholder='Number of Slices'
              />
            </div>
          </div>
        </div>
      )}
      {typeValue === 'soup' && (
        <div>
          <div>
            <label>Customize Your Soup</label>
            <div>
              <Field
                name='spiciness_scale'
                component={Input}
                validate={[required]}
                label='Spiciness Scale(Between 1 to 10)'
                type='number'
                min='1'
                max='10'
                placeholder='Spiciness'
              />
            </div>
          </div>
        </div>
      )}
      {typeValue === 'sandwich' && (
        <div>
          <div>
            <label>Customize Your Sanwich</label>
            <div>
              <Field
                component={Input}
                validate={[required]}
                label='Number of Slices of Bread (Between 1 to 4)'
                name='slices_of_bread'
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
  form: 'order',
  onSubmit: submit,
})(OrderForm);

// Decorate with connect to read form values
const selector = formValueSelector('order');
OrderForm = connect((state) => {
  const typeValue = selector(state, 'type');

  return {
    typeValue,
  };
})(OrderForm);

export default OrderForm;
