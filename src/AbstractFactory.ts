interface Furniture {
  hasLegs(): boolean;
}

interface Chair extends Furniture {
  sitOn: VoidFunction;
}

interface Table extends Furniture {
  putOn: VoidFunction;
}

interface FurnitureFactory {
  createChair(): Chair;
  createTable(): Table;
}

class VictorianChair implements Chair {
  hasLegs() {
    return true;
  }

  sitOn() {
    console.log('Sitting on victorian chair...');
  }
}

class ModernChair implements Chair {
  hasLegs() {
    return false;
  }

  sitOn() {
    console.log('Sitting on modern chair...');
  }
}

class VictorianTable implements Table {
  hasLegs() {
    return true;
  }

  putOn() {
    console.log('Putting on victorian table...');
  }
}

class ModernTable implements Table {
  hasLegs() {
    return false;
  }

  putOn() {
    console.log('Putting on modern table...');
  }
}

class VictorianFurnitureFactor implements FurnitureFactory {
  createChair() {
    return new VictorianChair();
  }

  createTable() {
    return new VictorianTable();
  }
}

class ModernFurnitureFactor implements FurnitureFactory {
  createChair() {
    return new ModernChair();
  }

  createTable() {
    return new ModernTable();
  }
}

const chairFactory = new VictorianFurnitureFactor();
const tableFactory = new ModernFurnitureFactor();
const chair = chairFactory.createChair();
const table = tableFactory.createTable();

chair.sitOn();
table.putOn();
