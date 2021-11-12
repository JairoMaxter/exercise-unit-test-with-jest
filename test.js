const { suma } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = suma(2,16);
    expect(total).toBe(18);
});

test("1 euro should be 1.206 dollars", function(){
    expect(fromEuroToDollar(12)).toBe(14.4); 
});

test("1 dolar should be 106.583 Yen", function(){
    expect(fromDollarToYen(8)).toBe(852.66); 
});
 
test("1 Yen should be 0.00625 pound", function(){
    expect(fromYenToPound(400)).toBe(2.5)
});