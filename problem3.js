//  ==== Problem #3 ====
//  The marketing team wants the car models listed alphabetically on the website. Execute a function to 
// Sort all the car model names into alphabetical order and log the results in the console as it was returned.
import { inventory } from "./inventory.js";

function carModel(x) {
    let car = x.map((a) => a.car_model).sort()
    console.log(car)
}
carModel(inventory)