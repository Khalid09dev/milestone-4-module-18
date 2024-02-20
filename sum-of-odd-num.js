let sum = 0;

for(let i = 91; i <= 129; i++) {
    if(i % 2 !== 0) {
        sum = sum + i;
        console.log(sum);
    }
}

console.log('----------------------------');

for(let i = 51; i <= 85; i++) {
    if(i % 2 === 0) {
        sum = sum + i;
        console.log(sum);
    }
}