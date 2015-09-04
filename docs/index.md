---
layout: _layout.jade
---

# shouldhave.js

because who wants to do this:

```js
_.each(things, function(thing){ … })
```

when we'd all rather do this:

```js
things.each(function(thing){ … })
```

## Instillation

```sh
npm install --save shouldhave
```


## Example Usage


```js

require('shouldhave/Array#each');
require('shouldhave/Array#map');

[1,2,3,4].map(function(n){
  return n + 10;
}).each(function(n){
  console.log('look I can add to ', n);
});

```

Yes we're extending native objects. Everything that can be
is a standards compliant polyfill.


## Documentation

Checkout [the documentation](/shouldhave.js/docs) to see
what else we've got



### Even better example usage ![mmmmmm coffee](/shouldhave.js/coffee.gif)

```coffee
require 'shouldhave/Array#each'
require 'shouldhave/Array#map'

[1..4].map((n) -> n + 10 ).each (n) ->
  console.log "look I can add to #{n}"

```
