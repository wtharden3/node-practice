// const products = [];
const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    // products.push(this);
    // save to a file instead
    const p = path.join(
      path.dirname(require.main.filename),
      'data',
      'products.json'
    );

    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        //create new empty array
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => console.log(err));
    });
  }

  static fetchAll(callBackFn) {
    const p = path.join(
      path.dirname(require.main.filename),
      'data',
      'products.json'
    );
    console.log('p ===>', p);
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        callBackFn([])
      }
      callBackFn(JSON.parse(fileContent));
    });
    // return products;
  }
};
