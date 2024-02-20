// display sum of all odd number from 81 to 131 
let num = 81;
let sum = 0;

while(num <= 131) {
    // console.log(num);

    if(num % 2 !== 0) {
        // console.log('odd number:', num);
        sum = sum + num;
        console.log('sum of',num,':',sum);
    }

    num++;
}

console.log('*******************************')
console.log('*******************************')

// display sum of all the even numbers from 206 to 311 
let num1 = 206;
let sum1 = 0;

while(num1 <= 311) {
    // console.log(num1);

    if(num1 % 2 === 0) {
        // console.log('even number:', num1);
        sum1 = sum1 + num1;
        console.log('sum of',num1,':',sum1)
    }
    num1++;
}