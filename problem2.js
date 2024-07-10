//  ==== Problem #2 ====
//  The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model 
//  of the last car in the inventory is?  Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"
import { inventory } from "./inventory.js";

function lastCar(x) {
    let car = x.filter((a) => a.id === x.length)
    car = car[0]
    console.log(`Last car  is a  ${car.car_make} ${car.car_model}`)


}
lastCar(inventory)