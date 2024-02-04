const disha = 50;
const salman = 90;

if(disha > salman){
    console.log("Disha will get the strawberry");
}
else{
    console.log('salman will eat the strawberry');
}

function getMax(num1 , num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max = getMax(96 , 76);
const max2 = getMax(56,98);
const ullimateMax = getMax(max2,max)
console.log('max of two Number is:',ullimateMax);