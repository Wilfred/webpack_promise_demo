var popsicle = require('popsicle');

popsicle.get('/').then(function() {
  console.log('loaded URL');
});

console.log('hello world');
