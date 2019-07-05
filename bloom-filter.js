// Using built in Node module for hash functions
const crypto = require('crypto');

const secret = 'aa';
const hash = crypto.createHmac('md5', secret)
                   .digest('hex');
console.log(hash);
console.log(parseInt(hash, 16)/Math.exp(50));
