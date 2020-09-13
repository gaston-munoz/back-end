class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updatePrice() {
    if(this.sellIn > 0) {
      this.price > 0 ? this.price-- : this.price;
    } else {
      this.price - 2 >= 0 ? this.price -= 2 : this.price = 0;
    }
    this.sellIn--;
  }
}

class MegaCoverage extends Product {
  constructor(sellIn) {
      super('Mega Coverage', sellIn, 80);
  }

  updatePrice() { 
    this.sellIn --;
  }
}

class SuperSale extends Product {
  constructor(sellIn, price) {
    if(price > 50) price = 50;
    else if(price < 0) price = 0;
    super('Super Sale', sellIn, price);
  }

  updatePrice() {
    if(this.sellIn > 0) {
      this.price > 0 ? this.price -= 2 : this.price;
    } else {
      this.price - 4 >= 0 ? this.price -= 4 : this.price = 0;
    }
    this.sellIn--;
  }
}

class FullCoverage extends Product {
  constructor(sellIn, price) {
    if(price > 50) price = 50;
    else if(price < 0) price = 0;
    super('Full Coverage', sellIn, price);
  }

  updatePrice() {
    this.price = this.price < 50 ? this.price + 1 : this.price; 
    this.sellIn--;
  }
}

class SpecialFullCoverage extends Product {
  constructor(sellIn, price) {
    if(price > 50) price = 50;
    else if(price < 0) price = 0;
    super('Special Full Coverage', sellIn, price);
  }

  updatePrice() {
    if(this.sellIn > 10) {
      this.price = this.price < 50 ? this.price + 1 : 50; 
    } 
    else if(this.sellIn > 5) {
      this.price = this.price +2 <= 50 ? this.price += 2 : 50; 
    }
    else if(this.sellIn > 1) {
      this.price = this.price + 3 <= 50 ? this.price += 3 : 50; 
    }
    else {
      this.price = 0;
    }

    this.sellIn--;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updateProducts() {
    for (var i = 0; i < this.products.length; i++) {
      this.products[i].updatePrice();  
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance,
  MegaCoverage,
  SuperSale,
  FullCoverage,
  SpecialFullCoverage
}
