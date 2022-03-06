import { Input, Select } from './fields';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { required } from './validation';
import submit from './submit';

let OrderForm = ({ typeValue, handleSubmit, pristine, reset, submitting }) => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <img
          className='mx-auto h-12 w-auto'
          src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
          alt='Workflow'
        />
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Register Your Order
        </h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <form className='mb-0 space-y-6' onSubmit={handleSubmit}>
            <div>
              <label className='block text-sm font-medium text-gray-800'>
                Dish Name
              </label>
              <div className='mt-1'>
                <Field
                  name='name'
                  component={Input}
                  type='text'
                  placeholder='Dish Name'
                  validate={[required]}
                />
              </div>
            </div>
            <div className='flex flex-row justify-center items-center pb-6'>
              <label className='block text-sm font-medium text-gray-800 pt-4'>
                Preparation Time
              </label>
              <div>
                <label className='block text-sm font-medium text-gray-400'>
                  hours
                </label>
                <Field
                  name='hour'
                  component={Input}
                  type='number'
                  min='0'
                  max='3'
                  validate={[required]}
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-400'>
                  minuts
                </label>
                <Field
                  name='minute'
                  component={Input}
                  type='number'
                  placeholder='minute'
                  min='0'
                  max='59'
                  validate={[required]}
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-400'>
                  seconds
                </label>
                <Field
                  name='second'
                  component={Input}
                  type='number'
                  placeholder='second'
                  min='0'
                  max='59'
                  validate={[required]}
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-800'>
                Type of Dish
              </label>
              <div className='mt-1'>
                <Field
                  name='type'
                  component={Select}
                  placeholder='Type of Dish'
                  validate={[required]}
                />
              </div>
            </div>
            {typeValue === '' && <div></div>}
            {typeValue === 'pizza' && (
              <div>
                <div>
                  <label className='block text-sm font-medium text-gray-800'>
                    Customize Your Pizza
                  </label>
                  <div>
                    <label className='block text-sm font-medium text-gray-800'>
                      Diameter (Between 20 to 55 cm)
                    </label>
                    <Field
                      name='diameter'
                      type='number'
                      component={Input}
                      validate={[required]}
                      step='0.1'
                      min='20'
                      max='55'
                      placeholder='Diameter'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-800'>
                      Number of Slices(Up to 16 Slices)
                    </label>
                    <Field
                      name='no_of_slices'
                      component={Input}
                      validate={[required]}
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
            {typeValue === 'soup' && (
              <div>
                <div>
                  <label className='block text-sm font-medium text-gray-800'>
                    Customize Your Soup
                  </label>
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
                  <label className='block text-sm font-medium text-gray-800'>
                    Customize Your Sanwich
                  </label>
                  <div>
                    <label className='block text-sm font-medium text-gray-800'>
                      Number of Slices of Bread (Between 1 to 4)
                    </label>
                    <Field
                      component={Input}
                      validate={[required]}
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
              <button
                className='w-full flex justify-center py-2 px-4 mb-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                type='submit'
                disabled={pristine || submitting}>
                Submit
              </button>
              <button
                className='w-full flex justify-center py-2 px-4 mt-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                type='button'
                disabled={pristine || submitting}
                onClick={reset}>
                Clear Values
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
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
