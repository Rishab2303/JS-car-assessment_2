//  ==== Problem #5 ====
//  The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from
//  the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
import { inventory } from "./inventory.js";

function carOLderThan_2000(x) {
    let car = x.map((a) => a.car_year).filter((a) => a < 2000).sort()
    console.log(`${car.length} were made before 2000 \n`, car)
}
carOLderThan_2000(inventory)