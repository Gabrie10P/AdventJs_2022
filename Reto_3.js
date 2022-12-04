const packOfGifts = ["book","doll","ball"];const reindeers = ["dasher","dancer"];

function distributeGift(packOfGifts,reindeers){
    let weightOfPacks = 0;
    let weightSoported = 0;
    packOfGifts.forEach(e => {
        weightOfPacks = weightOfPacks + e.length ;
        console.log(weightOfPacks)
        return weightOfPacks;
    });
    reindeers.forEach(e =>{
        weightSoported = weightSoported + e.length * 2 ;
        console.log(weightSoported)

        return weightSoported;
    });
    const cantPacks = parseInt(weightSoported / weightOfPacks);
    return cantPacks;
}

const cantidad = distributeGift(packOfGifts, reindeers);
console.log(cantidad);