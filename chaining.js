const integers = [23, 15, 6, 3, 11, 20, 18, 7, 21, 1, 29, 10, 12, 8];


//Sort the numbers in descending order (10, 9, 8, 7, etc).
let reversesort = integers.sort((a,b) => {
    
    return b - a; 
    
})

//Remove any integers greater than 19.

reversesort.forEach((item,index) => { // weird, leaves 19...must fix
    
    if (item >= 19){
        removeInts = reversesort.slice(index);
        console.log(reversesort[index]);
    }
    
});
//Multiply each remaining number by 1.5 and then subtract 1.

let multSubt = removeInts.map((number) => {
    
    return (number*1.5) -1;
    
})

//Then output (either in the DOM or the console) the sum of all the resulting numbers.
const additup = (bucket, currentValue) => bucket + currentValue;

let summation = multSubt.reduce(additup);


var position = document.getElementById("putstuffhere").innerHTML;

position += `${multSubt.reduce(additup)}`;

console.log(reversesort);
console.log(removeInts);
console.log(multSubt);
console.log(summation);