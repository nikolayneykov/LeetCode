/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let j = nums.findIndex(n => n + nums[i] === target)

    if (j !== -1 && j !== i) {
      return [i, j]
    }
  }
}

console.log(twoSum([3, 2, 4], 6))
