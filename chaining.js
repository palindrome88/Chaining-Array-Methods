const integers = [23, 15, 6, 3, 11, 20, 18, 7, 21, 1, 29, 10, 12, 8];
let temp;
const reversesort = integers.sort((a,b) => {

    return b - a; 

})


integers.forEach((item,index) => { // weird, leaves 19...must fix

    if (item >= 19){
        temp = integers.slice(index);
    }
  
});
console.log(reversesort);
console.log(temp);