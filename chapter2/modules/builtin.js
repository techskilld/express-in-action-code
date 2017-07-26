const url = require('url');
const parsed_url = url.parse('https://merglabs.com');

console.log(parsed_url);
console.log('protocol : ' + parsed_url.protocol);
console.log('pathname : ' + parsed_url.pathname);
