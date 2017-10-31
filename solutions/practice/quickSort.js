//sort an array using quick sort

export const quickSort =  (arr) => {
  if (arr.length === 0 || arr.length === 1) {
    return arr
  } else {
    let pivot = arr[arr.length - 1]
    let left = arr.filter(el => el < pivot)
    let right = arr.filter(el => el > pivot)
    return quickSort(left).concat(pivot).concat(quickSort(right))
  }
}
