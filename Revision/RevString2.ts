function reverseString(str: string): string {
  // single char
  if (str.length <= 1) {
    return str;
  }
  // recursion
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("Praveen")); 
