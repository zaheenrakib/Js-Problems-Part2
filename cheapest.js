const phones = [
    {name:'Samsung',price: 20000, camera: '12mp',color: 'black'},
    {name:'xoami',price: 18000, camera: '12mp',color: 'black'},
    {name:'oppo',price: 30000, camera: '12mp',color: 'black'},
    {name:'nokia',price: 43000, camera: '12mp',color: 'black'},
    {name:'Walton',price: 25000, camera: '12mp',color: 'black'},
    {name:'Vivo',price: 22000, camera: '12mp',color: 'black'},
]

function getCheapestPhone(phones){
    let min = phones[0];
    for (const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const min = getCheapestPhone(phones);
console.log(min);


