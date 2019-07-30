// returns the received object's value
const defaultReducer = obj => obj.value;

// returns an array of objects containing values of creditTransfer & creditType, if they exist
const existingCreditsReducer = obj => {
  const valuesArr = [];
  defaultReducer(obj).forEach(val => {
    const valObj = {};
    if (val.creditTransfer) {
      valObj.creditTransfer = defaultReducer(val.creditTransfer);
    }
    if (val.creditType) {
      valObj.creditType = defaultReducer(val.creditType);
    }
    valuesArr.push(valObj);
  });
  return valuesArr;
};

// handle different data structures
const reducers = {
  default: obj => defaultReducer(obj),
  existingCredits: obj => existingCreditsReducer(obj)
};

function normalize(data) {
  // return an err message if function is called without data
  if (!data) {
    return { err: 'Normalize function expects a data object' };
  }

  // turn key/value pairs into an arr & loop over them
  return Object.entries(data).reduce((acc, curr) => {
    const key = curr[0];
    const value = curr[1];

    // check to see if reducers has the key (and a function for) currently looped over key
    reducers.hasOwnProperty(key)
      ? // if so, send that key's value to the relevant reducer
        (acc[key] = reducers[key](value))
      : // if not, send the key to the default reducer
        (acc[key] = reducers['default'](value));

    // return the accumulator object after each loop
    return acc;
  }, {});
}

module.exports = normalize;
