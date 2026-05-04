let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

let oneYenIs = 0.0072; // GBP per JPY

function fromDollarToYen(dollars) {
    return dollars * 149.03;
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    return yen * oneYenIs;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };