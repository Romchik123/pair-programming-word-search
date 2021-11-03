const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const vartical = varticalJoin(letters);
  const varticalArray = vartical.map((ls) => ls.join(""));
  for (let l of varticalArray) {
    if (l.includes(word)) return true;
  }
  return false;
};

//helper
const varticalJoin = function(letters) {
  let newLetters = [];
  for (let row = 0; row < letters[0].length; row++) {
    let newRow = [];
    for (let col = 0; col < letters.length; col++) {
      newRow.push(letters[col][row]);
    }
    newLetters.push(newRow);
  }
  return newLetters;
};

module.exports = wordSearch;
