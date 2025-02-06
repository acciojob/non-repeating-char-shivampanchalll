function firstNonRepeatedChar(str) {
  if (!str) { // Handle empty or null input
    return null;
  }

  const charCounts = {};

  // Count character occurrences
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  // Find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCounts[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeated character found
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));