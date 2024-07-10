//  ==== Problem #4 ====
//  The accounting team needs all the years from every car on the lot. Execute a function that will return an array
//  from the dealer data containing only the car years and log the result in the console as it was returned.

import { inventory } from "./inventory.js";

function carYear(x) {
    let car = x.map((a) => a.car_year).sort()
    console.log(car)
}
carYear(inventory)