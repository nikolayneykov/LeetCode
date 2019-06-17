/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
let numJewelsInStones = function (J, S) {
  return [...S].filter(x => J.includes(x)).length
}

console.log(numJewelsInStones('aA', 'aAAbbbb'))
