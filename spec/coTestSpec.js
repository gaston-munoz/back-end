const expect = require('chai').expect;

const {
  CarInsurance,
  Product,
  MegaCoverage,
  SuperSale,
  FullCoverage,
  SpecialFullCoverage

} = require('../src/coTest');


describe("Testing Class CarInsurance", function() {

  it("[CONST] should return as an array and the length is 1", function() {
    const coTest = new CarInsurance([ new Product("Product 1", 0, 0) ]);
    expect(coTest.products).to.be.a("array");
    expect(coTest.products).to.have.lengthOf(1);
  });

  it("[CONST] should return as an array and the length is 0", function() {
    const coTest = new CarInsurance();
    expect(coTest.products).to.be.a("array");
    expect(coTest.products).to.have.lengthOf(0);
  });

  it("[UPDATE] should return product sellIn = -1, price = 0 and not modify name", function() {
    const coTest = new CarInsurance([ new Product("Product 1", 0, 0) ]);
    const products = coTest.updateProducts();
    expect(products[0].name).to.be.equals("Product 1");
    expect(products[0].sellIn).to.be.equals(-1);
    expect(products[0].price).to.be.equals(0)
  });

  it("[UPDATE] should return sellIn = 9 and price = 9", function() {
    const coTest = new CarInsurance([ new Product("Product 1", 10, 10) ]);
    const products = coTest.updateProducts();
    expect(products[0].sellIn).to.be.equals(9);
    expect(products[0].price).to.be.equals(9)
  });

});


describe("Testing class MegaCoverage", function() {
  it("[CONST] should return name: 'Mega Coverage', price: 80 and sellIn: -1", function() {
    const proTest = new MegaCoverage(0);
    expect(proTest.name).to.be.equals("Mega Coverage");
    expect(proTest.sellIn).to.be.equals(0);
    expect(proTest.price).to.be.equals(80);
  });

  it("[UPDATE] should return name: 'Mega Coverage', price: 80 and sellIn: 9", function() {
    const proTest = new MegaCoverage(10);
    proTest.updatePrice();
    expect(proTest.name).to.be.equals("Mega Coverage");
    expect(proTest.sellIn).to.be.equals(9);
    expect(proTest.price).to.be.equals(80);
  });

  it("[UPDATE] should return name: 'Mega Coverage', price: 80 and sellIn: 9", function() {
    const proTest = new MegaCoverage(-1);
    proTest.updatePrice();
    expect(proTest.name).to.be.equals("Mega Coverage");
    expect(proTest.sellIn).to.be.equals(-2);
    expect(proTest.price).to.be.equals(80);
  });

});


describe("Testing class SuperSale", function() {
  it("[CONST] should return name: 'Super Sale', price: 40 and sellIn: 0", function() {
    const proTest = new SuperSale(0, 40);
    expect(proTest.name).to.be.equals("Super Sale");
    expect(proTest.sellIn).to.be.equals(0);
    expect(proTest.price).to.be.equals(40);
  });

  it("[CONST] should return price: 50 and sellIn: 10", function() {
    const proTest = new SuperSale(10, 800);
    expect(proTest.sellIn).to.be.equals(10);
    expect(proTest.price).to.be.equals(50);
  });

  it("[CONST] should return price: 0 and sellIn: 10", function() {
    const proTest = new SuperSale(10, -800);
    expect(proTest.sellIn).to.be.equals(10);
    expect(proTest.price).to.be.equals(0);
  });
//
  it("[UPDATE] should return price: 38 and sellIn: 9", function() {
    const proTest = new SuperSale(10, 40);
    proTest.updatePrice();
    expect(proTest.sellIn).to.be.equals(9);
    expect(proTest.price).to.be.equals(38);
  });

  it("[UPDATE] should return price: 36 and sellIn: -1", function() {
    const proTest = new SuperSale(0, 40);
    proTest.updatePrice();
    expect(proTest.sellIn).to.be.equals(-1);
    expect(proTest.price).to.be.equals(36);
  });

});

describe("Testing class FullCoverage", function() {
  it("[CONST] should return name: 'Full Coverage', price: 40 and sellIn: 0", function() {
    const proTest = new FullCoverage(0, 40);
    expect(proTest.name).to.be.equals("Full Coverage");
    expect(proTest.sellIn).to.be.equals(0);
    expect(proTest.price).to.be.equals(40);
  });

  it("[CONST] should return price: 50 and sellIn: 10", function() {
    const proTest = new FullCoverage(10, 800);
    expect(proTest.sellIn).to.be.equals(10);
    expect(proTest.price).to.be.equals(50);
  });

  it("[CONST] should return price: 0 and sellIn: 10", function() {
    const proTest = new FullCoverage(10, -800);
    expect(proTest.sellIn).to.be.equals(10);
    expect(proTest.price).to.be.equals(0);
  });

  it("[UPDATE] should return price: 41 and sellIn: 9", function() {
    const proTest = new FullCoverage(10, 40);
    proTest.updatePrice();
    expect(proTest.sellIn).to.be.equals(9);
    expect(proTest.price).to.be.equals(41);
  });

  it("[UPDATE] should return price: 41 and sellIn: -1", function() {
    const proTest = new FullCoverage(0, 40);
    proTest.updatePrice();
    expect(proTest.sellIn).to.be.equals(-1);
    expect(proTest.price).to.be.equals(41);
  });

});

describe("Testing class SpecialFullCoverage", function() {
  it("[CONST] should return name: 'Special Full Coverage', price: 40 and sellIn: 0", function() {
    const proTest = new SpecialFullCoverage(0, 40);
    expect(proTest.name).to.be.equals("Special Full Coverage");
    expect(proTest.sellIn).to.be.equals(0);
    expect(proTest.price).to.be.equals(40);
  });

  it("[CONST] should return price: 50 and sellIn: 10", function() {
    const proTest = new SpecialFullCoverage(10, 800);
    expect(proTest.sellIn).to.be.equals(10);
    expect(proTest.price).to.be.equals(50);
  });

  it("[CONST] should return price: 0 and sellIn: 10", function() {
    const proTest = new SpecialFullCoverage(10, -800);
    expect(proTest.sellIn).to.be.equals(10);
    expect(proTest.price).to.be.equals(0);
  });

  it("[UPDATE] should return price: 41 and sellIn: 19", function() {
    const proTest = new SpecialFullCoverage(20, 40);
    proTest.updatePrice();
    expect(proTest.sellIn).to.be.equals(19);
    expect(proTest.price).to.be.equals(41);
  });

  it("[UPDATE] should return price: 42 and sellIn: 9", function() {
    const proTest = new SpecialFullCoverage(10, 40);
    proTest.updatePrice();
    expect(proTest.sellIn).to.be.equals(9);
    expect(proTest.price).to.be.equals(42);
  });

  it("[UPDATE] should return price: 43 and sellIn: 4", function() {
    const proTest = new SpecialFullCoverage(5, 40);
    proTest.updatePrice();
    expect(proTest.sellIn).to.be.equals(4);
    expect(proTest.price).to.be.equals(43);
  });

  it("[UPDATE] should return price: 50 and sellIn: 4", function() {
    const proTest = new SpecialFullCoverage(5, 49);
    proTest.updatePrice();
    expect(proTest.sellIn).to.be.equals(4);
    expect(proTest.price).to.be.equals(50);
  });

  it("[UPDATE] should return price: 0 and sellIn: -1", function() {
    const proTest = new SpecialFullCoverage(0, 50);
    proTest.updatePrice();
    expect(proTest.sellIn).to.be.equals(-1);
    expect(proTest.price).to.be.equals(0);
  });
});