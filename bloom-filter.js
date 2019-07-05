const crypto = require('crypto'); // Using built in Node module for hash functions


function hash(word) {
  return crypto.createHmac('md5', word).digest('hex');
}

function makeBloomFilter(set_values_array) {
  //Empty bit array
  let bloomFilter = [];

  //Set bits to true for each value
  set_values_array.forEach( value => {
    bloomFilter[hash(value)] = 1;
  })

  return bloomFilter
}

function searchBloomFilter (word, filter){
  if (bloomFilter[hash(word)]){
    console.log("Found!");
    return true
  } else {
    console.log("Not found :(");
    return false
  }
}

//My dictionary's contents
dictionary = ["hello", "world", "i", "love", "algorithms"]

let bloomFilter = makeBloomFilter(dictionary);

console.log("Trying to find 'hello' in Bloom filter:");
console.log(searchBloomFilter ('hello', bloomFilter));
console.log("Trying to find 'goodbye' in Bloom filter:");
console.log(searchBloomFilter ('goodbye', bloomFilter));
