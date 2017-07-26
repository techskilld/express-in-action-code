const mustache = require('mustache');

const results = mustache.render("Hi, {{ first }} {{ second }}", {
  first: "erick",
  second: "mwamodo"
});

console.log(results);
