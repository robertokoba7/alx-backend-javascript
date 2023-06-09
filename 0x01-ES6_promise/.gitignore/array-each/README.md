# array-each [![NPM version](https://badge.fury.io/js/array-each.svg)](http://badge.fury.io/js/array-each)

> Loop over each item in an array and call the given function on every element.

## Install with [npm](npmjs.org)

```bash
npm i array-each --save
```

## Usage

```js
var each = require('array-each');

var result = [];
each(['a', 'b', 'c'], function (ele) {
  result.push(ele + ele);
});

console.log(result);
//=> ['aa', 'bb', 'cc']
```

Return `false` to "break" early:

```js
var result = [];
each(['a', 'b', 'c'], function (ele) {
  if (ele === 'b') return false;
  result.push(ele + ele);
});

console.log(result);
//=> ['aa']
```

## API

### [.each](index.js#L34)

Loop over each item in an array and call the given function on every element.

**Params**

* `array` **{Array}**
* `fn` **{Function}**
* `thisArg` **{Object}**: Optionally pass a `thisArg` to be used as the context in which to call the function.
* `returns` **{Array}**

**Example**

```js
each(['a', 'b', 'c'], function (ele) {
  return ele + ele;
});
//=> ['aa', 'bb', 'cc']

each(['a', 'b', 'c'], function (ele, i) {
  return i + ele;
});
//=> ['0a', '1b', '2c']
```

## Related projects

* [arr-filter](https://github.com/jonschlinkert/arr-filter): Faster alternative to javascript's native filter method.
* [arr-diff](https://github.com/jonschlinkert/arr-diff): Returns an array with only the unique values from the first array, by excluding all… [more](https://github.com/jonschlinkert/arr-diff)
* [arr-map](https://github.com/jonschlinkert/arr-map): Faster, node.js focused alternative to JavaScript's native array map.
* [arr-flatten](https://github.com/jonschlinkert/arr-flatten): Recursively flatten an array or arrays. This is the fastest implementation of array flatten.
* [array-unique](https://github.com/jonschlinkert/array-unique): Return an array free of duplicate values. Fastest ES5 implementation.
* [array-intersection](https://github.com/jonschlinkert/array-intersection): Return an array with the unique values present in _all_ given arrays using strict equality… [more](https://github.com/jonschlinkert/array-intersection)

## Running tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/array-each/issues)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright (c) 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on April 28, 2015._

<!-- reflinks generated by verb-reflinks plugin -->

[assemble]: http://assemble.io
[template]: https://github.com/jonschlinkert/template
[verb]: https://github.com/assemble/verb