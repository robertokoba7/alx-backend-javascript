// Function that returns a boolean value if all elements of an array exist within the set.
const hasValuesFromArray = (set, array) => array.every((element) => set.has(element));

export default hasValuesFromArray;
