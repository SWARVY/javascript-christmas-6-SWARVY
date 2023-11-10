const deepFreeze = (object) => {
  const propNames = Object.getOwnPropertyNames(object);
  const copyObject = { ...object };

  propNames.forEach((name) => {
    const value = object[name];

    copyObject[name] =
      value && typeof value === 'object' ? deepFreeze(value) : value;
  });

  return Object.freeze(copyObject);
};

export default deepFreeze;
