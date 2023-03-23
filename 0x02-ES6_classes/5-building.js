class Building {
  constructor(sqft) {
    if (
      this.constctor !== Building
      && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

export default Building;
