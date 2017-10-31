//sort an array using merge sort

export const sortFunc = (arr) => {
  if (arr.length === 0 || arr.length === 1) {
    return arr
  } else {
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return mergeFunc(sortFunc(left), sortFunc(right))
  }
}

export const mergeFunc = (arr1, arr2) => {
  let result = []
  while (arr1.length !== 0 && arr2.length !== 0) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift())
    } else {
      result.push(arr2.shift())
    }
  }

  let rest = arr1.length === 0 ? arr2 : arr1
  result = result.concat(rest)
  return result
}
