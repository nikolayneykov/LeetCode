/**
 * @param {string} S
 * @return {string}
 */
let removeOuterParentheses = function (S) {
  let result = []
  let opened = 0

  Array
    .from(S)
    .forEach(c => {
      if ((c === '(' && opened++ > 0) || (c === ')' && opened-- > 1)) {
        result.push(c)
      }
    })

  return result.join('')
}

console.log(removeOuterParentheses('(()())(())(()(()))'))
