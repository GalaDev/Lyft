const getAllThirdLetters = (str) => {
  let returnStr = '';

  for (let i = 0; i < str.length; i++) {
    if ((i + 1) % 3 === 0) returnStr += str[i];
  }

  const returnObj = {
    return_string: returnStr,
  };

  return returnObj;
};

module.exports = getAllThirdLetters;
