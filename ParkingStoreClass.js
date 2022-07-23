const { INFO } = require('./constants');    // constants


///////////////////////////
//     parking class     //
///////////////////////////

class ParkingStore {

    // private fields
    #store = new Map();
    #currentlyParkedVehicles = new Map();

    // constructor
    constructor (user, slots) {
        this.user = user;
        this.slots = slots;
        INFO.parkingStoreCreated(user, slots);
    };

    //
    // private methods
    //

    // method - get currently available slots
    #availableSlots = () => this.slots - this.#currentlyParkedVehicles.size;

    // method - get currently parked vehicle ID's
    #getCurrentlyParkedVehiclesKeys = () => Array.from(this.#currentlyParkedVehicles.keys());

    //
    // public methods
    //

    // method - park new vehicle
    parkVehicle(vehicle) {
        // park vehicle
        if (this.#availableSlots() > 0 && !vehicle.isParked) {
            // add to store
            this.#store.set(vehicle.id, vehicle);
            // set vehicle is parked
            vehicle.setIsVehicleParked(true);
            this.#currentlyParkedVehicles.set(vehicle.id);
            // print info related parking
            INFO.vehicleParked(
                vehicle.id,
                vehicle.getSameVehicleParkedCount(),
                this.#availableSlots(),
                this.#getCurrentlyParkedVehiclesKeys()
            );
        } else {
            // print info parking full
            INFO.parkingFull(this.#availableSlots(), this.#getCurrentlyParkedVehiclesKeys());
        };
    };


    // method - remove vehicle from parking
    removeVehicle(vehicle) {
        // remove vehicle
        if (vehicle.isParked) {
            // set vehicle is parked
            vehicle.setIsVehicleParked(false);
            this.#currentlyParkedVehicles.delete(vehicle.id);
            // print info removal of vehicle
            INFO.vehicleRemoved(
                vehicle.id,
                vehicle.getVehicleCurrentCost(),
                this.#availableSlots(),
                this.#getCurrentlyParkedVehiclesKeys()
            );
        } else {
            // print info invalid removal
            INFO.invalidVehicleRemoval(vehicle.id, this.#availableSlots(), this.#getCurrentlyParkedVehiclesKeys());
        };
    };
};



module.exports = ParkingStore;