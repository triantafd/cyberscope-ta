//Iterate over each object of the array to filter by the required Attributes specified
const filterArrayObjectsByAttributes = (dataArray, requiredAttributes) => {
  return dataArray.map((item) =>
    filterObjectByAttributes(item, requiredAttributes)
  );
};

//Get a value from a nested object using nestedKey (e.g Prices.price.bitcoin)
const getValueByNestedKey = (object, nestedKey) => {
  const keys = nestedKey.split(".");
  let result = object;

  for (let key of keys) {
    if (result[key] === undefined) {
      return undefined;
    }
    result = result[key];
  }

  return result;
};

//Filter an object and get only the required attributes
const filterObjectByAttributes = (item, requiredAttributes) => {
  return requiredAttributes.reduce((accumulator, { keyToSearch, newKey }) => {
    const value = getValueByNestedKey(item, keyToSearch);
    if (value !== undefined) {
      accumulator[newKey] = value;
    }
    return accumulator;
  }, {});
};

export { filterArrayObjectsByAttributes, filterObjectByAttributes };
