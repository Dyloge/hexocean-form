const submitToServer = async (data) => {
  try {
    let response = await fetch(
      'https://frosty-wood-6558.getsandbox.com:443/dishes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};
const submit = (values, reset) => {
  //format the data
  const hours = parseInt(values.hour).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const minutes = parseInt(values.hour).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const seconds = parseInt(values.hour).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const preparation_time = `${hours}:${minutes}:${seconds}`;
  if (values.spiciness_scale) {
    values.spiciness_scale = parseInt(values.spiciness_scale);
  }
  if (values.no_of_slices) {
    values.no_of_slices = parseInt(values.no_of_slices);
  }
  if (values.diameter) {
    values.diameter = parseInt(values.diameter);
  }
  if (values.slices_of_bread) {
    values.slices_of_bread = parseInt(values.slices_of_bread);
  }
  let { hour, minute, second, ...others } = values;
  values = { ...others, ...{ preparation_time } };

  // submit to server
  submitToServer(values).then((values) =>
    window.alert(
      `Your order submitted succesfully!\n\n${JSON.stringify(values, null, 2)}`
    )
  );
};
export default submit;
