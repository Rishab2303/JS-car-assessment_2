// ==== Problem #6 ====
//  A buyer is interested in seeing only BMW and Audi cars within the inventory.
//   Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, 
//   use JSON.stringify() to show the results of the array in the console.

import { inventory } from "./inventory.js";

function bmw_And_Audi(x) {
    let car = x.filter((a) => { if (a.car_make == "Audi" || a.car_make == "BMW") return a })
    console.log(car)
    console.log(JSON.stringify(car))


}
bmw_And_Audi(inventory)