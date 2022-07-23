const { CONSTANTS } = require('./constants');   // constants


///////////////////////////
//     vehicle class     //
///////////////////////////

class Vehicle {
    // private fields
    #parkedTimeStamps = [];

    // constructor
    constructor (type) {
        this.type = type;
        this.isParked = false;
        this.id = Math.round(Math.random() * 100);
    };

    //
    // public methods
    //
    getParkedCount = () => this.#parkedTimeStamps.length;
    getLatestParkedTimeStamp = () => this.#parkedTimeStamps[this.#parkedTimeStamps.length - 1];

    setIsVehicleParked = (isParkedValue) => {
        // set isParked value
        this.isParked = isParkedValue;
        // only if vehicle parking push time stamp
        if (isParkedValue) this.#parkedTimeStamps.push(new Date());
    };

    getVehicleCurrentCost() {
        let timeSpent = Math.floor(new Date() - this.getLatestParkedTimeStamp()) || 1;
        // vehicle cost + additional time spent cost
        return CONSTANTS.vehicleCost[this.type] + (CONSTANTS.timeCost[this.type] * timeSpent) || 0;
    };
};



module.exports = Vehicle;