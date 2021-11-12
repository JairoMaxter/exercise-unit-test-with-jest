
const suma = (a,b) => {
    return a + b
}

console.log(suma(7,3));

const fromEuroToDollar = (valor) => {
    let moneda = (valor * 1.2);
    return (moneda);
}

const fromDollarToYen = (valor) => {
    let moneda = (valor / 1.2) * 127.9;
    return (moneda);
}

const fromYenToPound = (valor) => {
    let moneda = (valor / 127.9) * 0.8;
    return (moneda);
}

module.exports = { fromEuroToDollar, suma, fromDollarToYen, fromYenToPound};