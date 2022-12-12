const { CONSTANTS } = require('./constants');           // constants
// classes
const Vehicle = require('./vehicleClass');              // class - vehicle
const ParkingStore = require('./ParkingStoreClass');    // class - parking store


////////////////////////
//    create store    //
////////////////////////

// created user & parking store
const newParkingStore = new ParkingStore('Akshay Gudhate', 2);

// create vehicles
const newVehicle1 = new Vehicle(CONSTANTS.vehicleType.twoWheeler);
const newVehicle2 = new Vehicle(CONSTANTS.vehicleType.fourWheeler);
const newVehicle3 = new Vehicle(CONSTANTS.vehicleType.other);


/////////////////////////
//   handler actions   //
/////////////////////////

// add vehicles
newParkingStore.parkVehicle(newVehicle1);
newParkingStore.parkVehicle(newVehicle2);

// error parking full
newParkingStore.parkVehicle(newVehicle3);

// remove 1 vehicle add remaining vehicle again
newParkingStore.removeVehicle(newVehicle1);
newParkingStore.parkVehicle(newVehicle3);

// remove all vehicles
newParkingStore.removeVehicle(newVehicle2);
newParkingStore.removeVehicle(newVehicle3);

// error vehicle not found
newParkingStore.removeVehicle(newVehicle1);

// park vehicles again
newParkingStore.parkVehicle(newVehicle1);
newParkingStore.parkVehicle(newVehicle2);