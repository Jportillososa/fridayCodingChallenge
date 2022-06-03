
// Create a function that takes two dates and returns the number of days between the first and second date.

// getDays(

//     new Date("June 14, 2019"),

//     new Date("June 20, 2019")

//   ) ➞ 6

// pseudo code

// function nameOfFunction(){
//     return 
// }

// will have to use .getTime method
// formula for converting milliseconds to days
//calculate differnece between dates
// (1000 milliseconds * (60 seconds * 60 minutes) * 24 hours)
// ^^ so I would have to do-> differenceInDays / (1000 * (60secs * 60 mins) * 24)


let firstDate = new Date("06/14/2019")
let secondDate = new Date("06/20/2019")

function days() {
    let differenceInTime = secondDate.getTime() - firstDate.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays
}
console.log(`The total number of days between dates ${firstDate} and ${secondDate} is : ${days()} days!!`)


//BELOW IS SOLUTION WITHOUT FUNCTION
// let differenceInTime = secondDate.getTime() - firstDate.getTime();
// let differenceInDays = differenceInTime / (1000 * 3600 * 24);

// console.log(`The total number of days between dates ${firstDate} and ${secondDate} is : ${differenceInDays}`)
