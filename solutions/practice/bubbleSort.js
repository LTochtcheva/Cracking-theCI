// sort an array using Bubble Sort

// export default (arr) => {
//   for (let j = 0; j < arr.length; j++) {
//      for (let i = 0; i < arr.length; i++) {
//       let temp
//       if (arr[i] > arr[i + 1]) {
//         temp = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = temp
//       }
//     }
//   }

//   return arr
// }
export default (arr) => {
  for (let el of arr) {
     for (let i = 0; i < arr.length; i++) {
      let temp
      if (arr[i] > arr[i + 1]) {
        temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
  }

  return arr
}
