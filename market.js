function markerQuantity(shirtQuantity, pantQuantity,shoeQuantity){
    const perShirtWood = 500;
    const perPantWood = 300;
    const pershoeWood = 900;

    const shirtTotalWood = shirtQuantity * perShirtWood;
    const pantTotalWood = pantQuantity * perPantWood;
    const shoeTotalWood = shoeQuantity * pershoeWood;

    const totalWood = shirtTotalWood + pantTotalWood + shoeTotalWood;

    return totalWood;
}

const market = markerQuantity(1,2,4);
console.log('wood needed',market);