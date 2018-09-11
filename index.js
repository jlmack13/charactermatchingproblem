//Given a string consisting of some combination of parentheses, brackets, and braces,
//return true if they're properly nested and balanced, and false otherwise.  

function checkCharacters(string) {
  let arr = [];
  //check for illegal characters
  if(string.match(/[^ ()[\]{}]/g)) {
    return "Error: Invalid character detected. Please try again using only '()[]{}' characters.";
  }
  //remove white space from string
  let str = string.replace(/ /g,'');
  for(let char of str) {
    //check for opening char and push into array if true
    if (isOpen(char)) {
      arr.push(char)
    } 
    //check for a match - use char on top of stack as first arg and current char as the second arg
    else if (isMatch(arr[arr.length -1], char)) {
      arr.pop();
    }
    //check the top of the stack, if its empty or if its a non-matching char return false
    else if (arr.length === 0 || !isMatch(arr[arr.length - 1], char)) {
      return false;
    } 
  }
  return arr.length === 0 ? true : false;
}

//function isOpen(c) - returns true if c === [, c ==={, or c===(, false otherwise
function isOpen(char) {
  if(char != null) {
    return char.match(/[([{]/g)
  } else {
    return false;
  }
}

//function isClosed(c) - returns true if c === ], c ===}, or c===), false otherwise
function isClosed(char) {
  if(char != null) {
    return char.match(/[)\]}]/g)
  } else {
    return false;
  }
}

//function isMatch(c, char) - return true if c is opening bracket and char is closing bracket
function isMatch(first, second) {
  if (isOpen(first) && isClosed(second)) {
    //check for matching ()
    if(first === "(" && second === ")") {
      return true;
    } 
    //check for matching []
    else if(first === "[" && second === "]") {
      return true;
    }
    //check for matching {}
    else if (first === "{" && second === "}") {
      return true;
    }
    else {
      return false;
    }
  } else {
    return false;
  }
}


module.exports = checkCharacters;




