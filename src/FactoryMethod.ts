interface Vehicle {
  deliver: VoidFunction;
}

class Truck implements Vehicle {
  deliver() {
    console.log('Delivering by road...');
  }
}

class Ship implements Vehicle {
  deliver() {
    console.log('Delivering by sea...')
  }
}

interface Logistics {
  createVehicle(): Vehicle;
}

class RoadLogistics implements Logistics {
  createVehicle() {
    return new Truck();
  }
}

class SeaLogistics implements Logistics {
  createVehicle() {
    return new Ship();
  }
}

const seaLogistics = new SeaLogistics();
const seaVehicle = seaLogistics.createVehicle();

seaVehicle.deliver();

const roadLogistics = new RoadLogistics();
const roadVehicle = roadLogistics.createVehicle();

roadVehicle.deliver();
