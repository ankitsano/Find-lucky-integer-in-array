const findLucky = function (arr) {
  let result = -1
  const map = arr.reduce((acc, number) => {
    acc[number] = (acc[number] || 0) + 1
    return acc
  }, {})

  for (const key of Object.keys(map)) {
    if (Number(key) === map[key]) {
      result = Math.max(Number(key), result)
    }
  }
  return result
}
let res=findLucky([2,2,3,4])
// let res=findLucky([1,2,2,3,3,3])
// let res=findLucky([2,2,2,3,3])
// let res=findLucky([5])

console.log(res)