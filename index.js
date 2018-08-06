function lowerCaseDrivers(arr) {
  const newArr = arr.map(function(name) {
    return name.toLowerCase();
  });
  return newArr;
}

function nameToAttributes(drivers) {
  const newArr = drivers.map(function(fullName) {
    let fullNameArray = fullName.split(" ");
    return Object.assign(
      {},
      { firstName: fullNameArray[0] },
      { lastName: fullNameArray[1] }
    );
  });
  return newArr;
}

function attributesToPhrase(drivers) {
  const newObj = drivers.map(function(individualObj) {
    return `${individualObj.name} is from ${individualObj.hometown}`;
  });
  return newObj;
}
