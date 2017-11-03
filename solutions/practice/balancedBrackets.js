// Write a function that determines whether an input string has balanced brackets. ###

// #### Problem ####
// You are given an input string consisting of only brackets---  square [   ] , round (   ) , and curly {    } . Write a function that returns either true if the brackets in the input string are balanced and false if they are not. Balanced means that any opening bracket of a particular type must also have a closing bracket of the same type.

// #### Examples ####

//     hasBalancedBrackets('[][(){}')
//     //this should return false
//     hasBalancedBrackets('text ( is allowed ){rwwrwrrww [] ()}')
//     //this should return true

export default (str) => {
  let opening = []
  let brackets = new Set(['(', ')', '{', '}', '[', ']'])
  let closing = new Set([')', '}', ']'])
  if (closing.has(str[0]) ) {
    return false
  }

    for (let i = 0; i < str.length; i++) {
      if (!brackets.has(str[i])) continue
      if (closing.has(str[i])) {
        if (!isMatching(str[i], opening)) return false
      }
      else {
        opening.push(str[i])
      }
    }
  return opening.length === 0
}

const isMatching = (bracketClose, opening) => {
  let bracketOpen = opening.pop()
  if (bracketOpen === '(' && bracketClose === ')') return true
  if (bracketOpen === '{' && bracketClose === '}') return true
  if (bracketOpen === '[' && bracketClose === ']') return true
  return false
}
