const readline = require('readline').createInterface({ input: process.stdin }); // read input


/////////////////////////
//     user inputs     //
/////////////////////////

(async () => {

    console.info(`
Your parking monitor system is ready! Below are your options.
a. Create parking slots.
b. Add vehicle.
c. Park vehicle.
d. Remove vehicle & calculate cost.
e. Exit.

Please type from above option numbers to choose next move.
`);


    // take continuous input
    for await (const commandLineInput of readline) {

        if (['a', 'b', 'c', 'd', 'e'].includes(commandLineInput)) {
            switch (commandLineInput) {
                case 'a':
                    console.info(`Please enter how many parking slots you want to create.`);
                    break;

                case 'b':
                    console.info(`Please select vehicle type you want to create.`);
                    break;

                case 'c':
                    console.info(`Which vehicle would you like to park?`);
                    break;

                case 'd':
                    console.info(`Which vehicle would like to remove?`);
                    break;

                case 'e':
                    console.info(`Thank you!`);
                    readline.close();
                    break;
            };
        } else {
            console.info(`Please type valid input.`);
        };
    };

})();