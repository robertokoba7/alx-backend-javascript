class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](generate) {
    if (generate === 'number') {
      return this._size;
    }
    if (generate === 'string') {
      return this._location;
    }
    return this;
  }
}

export default HolbertonClass;
