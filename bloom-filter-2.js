const crypto = require('crypto'); // Using built in Node module for hash functions


function hashAsNumber(word) {
  let hash = crypto.createHmac('md5', word).digest('hex');
  return parseInt(hash, 16);
}

function makeBloomFilter(set_values_array) {
  //Empty bit array
  let bloomFilter = [];

  //Set bits to true for each value
  set_values_array.forEach( value => {
    bloomFilter[hashAsNumber(value)] = 1;
  })

  return bloomFilter
}

function searchBloomFilter (word, filter){
  if (bloomFilter[hashAsNumber(word)]){
    console.log("Found! At index " + hashAsNumber(word) );
    return true
  } else {
    console.log("Not found :(");
    return false
  }
}

//My dictionary's contents
dictionary = ["hello", "world", "i", "love", "algorithms"]

let bloomFilter = makeBloomFilter(dictionary);

console.log("Again, janky JavaScript arrays aren't doing what I expected. The array has properties, not indices like an array:");
console.log(bloomFilter);
console.log(`The array has a length of: ${bloomFilter.length}`);
