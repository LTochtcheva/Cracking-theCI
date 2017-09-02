//Partition linked current around given value, such that
//all nodes less than value come before all nodes
//greater than or equal to value
//1, 9, 3, 2, 8, 4, 5 val = 3
//1
//1     9
//1     9,3
//1,2   9,3
//1,2   9,3,8
//1,2   9,3,8,4
//1,2   9,3,8,4,5
//1,2,9,3,8,4,5

export default (list, val) => {
  let smaller, greater, smallerHead, greaterHead
  let current = list
  while (current) {
    if (current.val < val) {
      if (smaller)
        {smaller.next = current
         smaller = smaller.next
         }
      else { smaller = current
      smallerHead = current
      }
    }
    else  {
      if (greater)
        {greater.next = current
          greater = greater.next
        }
      else {
        greater = current
        greaterHead = current
      }
    }
  current = current.next
}

  if (!smaller || !greater) return list
  smaller.next = greaterHead
  return smallerHead
}
