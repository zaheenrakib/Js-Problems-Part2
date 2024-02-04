function multiply(num1 , num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "Please provide a number";
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5,2);
// console.log(result);

function fullName (first,second){
    if(typeof first !== 'string'){
        return 'second name should be a string';

    }
    else if(typeof second !== 'string'){
        return 'second Name should be a string';
    }
    const full = first + " " + second;
    return full;
    
}

const full = fullName('zaheen','rakib')
    // console.log(full);


function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please Provide an Objects'
    }
    const price = product.price;
    return price;
}    

const prices = getPrice({name:'clock',price:35, color:"blue"})
// const prices = getPrice(5)
// console.log(prices);

function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return 'Please Provide an array'
    }
    const second = numbers[1];
    return second;
}

const second  = getSecond([39,59,55]);
console.log(second);