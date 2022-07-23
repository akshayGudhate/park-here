///////////////////////////
//       CONSTANTS       //
///////////////////////////

const CONSTANTS = {
    // type of vehicle
    vehicleType: {
        twoWheeler: 'twoWheeler',
        fourWheeler: 'fourWheeler',
        other: 'other'
    },
    // parking cost on the basis of vehicle
    vehicleCost: {
        twoWheeler: 10,
        fourWheeler: 20,
        other: 30
    },
    // parking cost on the basis of time
    timeCost: {
        twoWheeler: 5,
        fourWheeler: 10,
        other: 15
    },
    // colors codes for colored logs
    color: {
        Black: "\x1b[30m",
        Red: "\x1b[31m",
        Green: "\x1b[32m",
        Yellow: "\x1b[33m",
        Blue: "\x1b[34m",
        Magenta: "\x1b[35m",
        Cyan: "\x1b[36m",
        White: "\x1b[37m",
        Reset: "\x1b[0m"
    }
};


///////////////////////////
//         INFOs         //
///////////////////////////

const INFO = {};


INFO.parkingStoreCreated = (user, slots) => {
    console.info(CONSTANTS.color.Yellow, `>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 >>    Parking store created for user: ${user} with ${slots} slots.    >>
 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
`);
};


INFO.vehicleParked = (vehicleID, parkCount, slots, keys) => {
    console.info(CONSTANTS.color.Cyan, `>>>> Vehicle with ID: ${vehicleID} has been parked for ${parkCount} times! Available slots: ${slots}, Parked Vehicles ID's: [ ${keys} ]`);
};


INFO.parkingFull = (slots, keys) => {
    console.info(CONSTANTS.color.Red, `XXXX-->> Sorry! Your parking is full! Available slots: ${slots}, Parked Vehicles ID's: [ ${keys} ]`);
};


INFO.vehicleRemoved = (vehicleID, currentCost, slots, keys) => {
    console.info(CONSTANTS.color.Magenta, `<<<< Vehicle with ID: ${vehicleID} has been removed! Your parking cost is: Rs. ${currentCost}, Available slots: ${slots}, Parked Vehicles ID's: [ ${keys} ]`);
};


INFO.invalidVehicleRemoval = (vehicleID, slots, keys) => {
    console.info(CONSTANTS.color.Red, `XXXX-->> Sorry! Vehicle with ID: ${vehicleID} not found! Available slots: ${slots}, Parked Vehicles ID's: [ ${keys} ]`);
};



module.exports = { CONSTANTS, INFO };