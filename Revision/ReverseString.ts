export function reverseString(str: string): string {
  if (typeof str !== "string") {
    return "Expected a string input";
  }

  return Array.from(str).reverse().join("");
}


console.log(reverseString("Thursday"));     // yadsruhT
//console.log(reverseString(0));