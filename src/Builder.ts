class House {
  hasWalls: boolean;
  hasDoors: boolean;
  hasWindows: boolean;
  hasRoof: boolean;
  hasGarage: boolean;

  print() {
    console.dir(this);
  }
}

class HouseBuilder {
  result: House;

  constructor() {
    this.result = new House();
  }

  buildWalls() {
    this.result.hasWalls = true;
  }

  buildDoors() {
    this.result.hasDoors = true;
  }

  buildWindows() {
    this.result.hasWindows = true;
  }

  buildRoof() {
    this.result.hasRoof = true;
  }

  buildGarage() {
    this.result.hasGarage = true;
  }
}

const houseBuilder = new HouseBuilder();

houseBuilder.buildWalls();
houseBuilder.buildWindows();
houseBuilder.buildRoof();
houseBuilder.result.print();
