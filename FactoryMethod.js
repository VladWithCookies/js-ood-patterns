class Transport {
  deliver() {
    throw 'Not implemented'
  }
}

class Truck {
  deliver() {
    console.log('Delivering by road...')
  }
}

class Ship {
  deliver() {
    console.log('Delivering by sea...')
  }
}

class Logistics {
  planDelivery() {
    console.log('Planing delivery...');
  }

  createTransport() {
    throw 'Not implemented'
  }
}

class RoadLogistics extends Logistics {
  createTransport() {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport() {
    return new Ship();
  }
}

const seaLogistics = new SeaLogistics();
const seaTransport = seaLogistics.createTransport();

seaTransport.deliver();

const roadLogistics = new RoadLogistics();
const roadTransport = roadLogistics.createTransport();

roadTransport.deliver();
