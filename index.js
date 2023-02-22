// Code your solution in this file!
function distanceFromHqInBlocks(sumValue) {
    if(sumValue > 42) {
    return  sumValue - 42;
    }
    else {
        return 42 - sumValue;

    }

}
function distanceFromHqInFeet(sumValue) {
    if(sumValue > 42) {
 let dif = sumValue - 42;

     return dif * 264
}
    else {
    let dif;
    dif = 42 - sumValue;
    return dif *264;

}

}
function distanceTravelledInFeet(a, b) {
    if(a < b) {
        let dif = b - a;
        return dif * 264;

    }
    else {
        let dif = a - b;
        return dif * 264;
    }


}
function calculatesFarePrice(start, end) {
let feetTravelled = distanceTravelledInFeet(start, end)

   if(feetTravelled <= 400) {
        return 0;

    
    }
    else if (feetTravelled > 400 && feetTravelled < 2000) {
        let price  = (feetTravelled - 400) * .02;
    return price;
        
     }
    else if(feetTravelled > 2000 && feetTravelled < 2500) {
        return 25;
    
    }
     else if (feetTravelled> 2500) {
        return 'cannot travel that far';
     }

}

