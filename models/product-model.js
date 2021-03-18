const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

const getProductsFromFile = callBackFn => {
  console.log('p ===>', p);
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      callBackFn([]);
    } else {
      callBackFn(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imgUrl, description, price) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => console.log(err));
    });
  }

  static fetchAll(callBackFn) {
    getProductsFromFile(callBackFn);
  }

  static findById(id, callbackFn){
    getProductsFromFile(products => {
      const product = products.find(prod => prod.id === id)
      callbackFn(product);
    })
  }
};