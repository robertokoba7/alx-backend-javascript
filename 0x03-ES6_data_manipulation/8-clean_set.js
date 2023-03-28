// Function which returns a string of all set values that start with a specific string.

const cleanSet = (set, startString) => {
  if (startString && typeof startString === 'string') { // If the startString is a string.
    const strings = []; // Create an empty array to store the strings.
    for (const item of set) {
      if (item && item.startsWith(startString)) { // If the item starts with the startString.
        strings.push(item.slice(startString.length)); // Add the item to the array.
      }
    }
    return strings.join('-'); // Return the array as a string.
  }
  return '';
};

export default cleanSet;
