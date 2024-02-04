const numbers = [300,100,700,1200]


const products = [
    {name:'shampoo' , price:300},
    {name:'Chiruni' , price:100},
    {name:'shirt' , price:700},
    {name:'pant' , price:1200},
]

function getshoppingTotal( products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const total = getshoppingTotal(products);
console.log('total :',total);