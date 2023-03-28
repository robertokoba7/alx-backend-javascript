// Function: Returns and updated map for all items in the list with initial quantity at 1.

const updateUniqueItems = (groceries) => {
  // Check if the argument is a map. If not, return an empty map.
  if (Object.getPrototypeOf(groceries) !== Map.prototype) throw TypeError('Cannot process');

  groceries.forEach((val, key) => { // Iterate through the map.
    if (val === 1) {
      groceries.set(key, 100); // If the quantity is 1, set it to 100.
    }
  });
  return groceries;
};

export default updateUniqueItems;
