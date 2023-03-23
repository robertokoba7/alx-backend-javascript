class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](generate) {
    if (generate === 'nummber') {
      return this._size;
    }
    if (generate === 'string') {
      return this._string;
    }
    return this;
  }
}

export default HolbertonClass;
