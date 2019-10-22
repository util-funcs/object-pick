# pick

Pick properties from an object and take new one.

[![npm version](https://badge.fury.io/js/%40util-funcs%2Fpick.svg)](https://badge.fury.io/js/%40util-funcs%2Fpick) [![Build Status](https://travis-ci.org/util-funcs/pick.svg?branch=master)](https://travis-ci.org/util-funcs/pick)

## Getting Started

```ts
import pick from '@util-funcs/pick';
```

### Installing

```sh
npm i @util-funcs/pick --save
```
or

```sh
yarn add @util-funcs/pick
```

### Examples

```javascript
const order = {product_name: 'Macbook Air', color: 'gray', qty: 2};

pick(order, ['product_name', 'price']); // {product_name: 'Macbook Air'}
pick(order, ['product_name', 'price'], true); // {product_name: 'Macbook Air', price: null}

const handler = (key) => key === 'price' ? 5.5 : '-';
pick(order, ['product_name', 'price'], handler); // {product_name: 'Macbook Air', price: 5.5}

```
## Run tests

```ts
npm test
```

## Built With

* [TypeScript](https://www.typescriptlang.org) 

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* [**Ahmet ATAY**](https://github.com/atayahmet) - *Initial work*


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details