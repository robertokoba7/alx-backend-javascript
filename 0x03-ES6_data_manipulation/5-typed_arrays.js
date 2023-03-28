// Function to create a typed array of int8

function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) { // If the position is out of bounds, throw an error
    throw Error('Position outside range');
  }

  // Create an ArrayBuffer of the given length (in bytes) and assign it to the buffer variable
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array of the given length (in bytes) and assign it to the int8View variable
  const int8View = new Int8Array(buffer, 0, length);
  int8View.set([value], position); // Set the value at the given position to the given value
  return new DataView(buffer); // Return a DataView of the given length
}

export default createInt8TypedArray;
