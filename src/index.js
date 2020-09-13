const { 
  CarInsurance,
  Product,
  MegaCoverage,
  SuperSale,
  FullCoverage,
  SpecialFullCoverage 
} = require('./coTest');

const productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),
    new FullCoverage(2, 0),
    new Product('Low Coverage', 5, 7),
    new MegaCoverage(0),
    new MegaCoverage(-1),
    new SpecialFullCoverage(15, 20),
    new SpecialFullCoverage(10, 60),
    new SpecialFullCoverage(5, 49),
    new SuperSale(3, 20),
    new SpecialFullCoverage(7, 20),

  ];

  let products = JSON.parse(JSON.stringify(productsAtDayZero))
  // let products = productsAtDayZero.slice();

  const projections = [];
  
  const carInsurance = new CarInsurance(productsAtDayZero);
  const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
  };
  
  for (let i = 1; i <= 30; i += 1) {
    let temp = {};
    temp.day = i;
    temp.products = [];
    carInsurance.updateProducts().forEach(prod => { temp.products.push(prod) });
    projections.push(temp);
  }


  module.exports = { products, projections };
