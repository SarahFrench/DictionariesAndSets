const crypto = require('crypto'); // Using built in Node module for hash functions


function indicesInBinaryArray(word) {
  let hash = crypto.createHmac('md5', word).digest('hex');
  let fingerprint = []
  fingerprint.push(parseInt(hash.slice(0,8), 16));
  fingerprint.push(parseInt(hash.slice(8,16), 16));
  fingerprint.push(parseInt(hash.slice(16,24), 16));
  fingerprint.push(parseInt(hash.slice(24,32), 16));
  return fingerprint;
}

function makeBloomFilter(set_values_array) {
  //Empty bit array
  let bloomFilter = [];

  //Set bits to true for each value
  set_values_array.forEach( value => {
    let fingerprint = indicesInBinaryArray(value)
    fingerprint.forEach( index => {
      bloomFilter[index] = 1;
    })
  })

  return bloomFilter
}

function searchBloomFilter (word, filter){
  let fingerprint = indicesInBinaryArray(word);
  let anyZeros = false;
  fingerprint.forEach( index => {
    if (filter[index] != 1){
      anyZeros = true;
      // console.log("Found a zero!");
    }
  })
  if (anyZeros) {
    console.log("Word not in list");
  } else {
    console.log("Word is in list");
  }
}

//My dictionary's contents
dictionary = ["hello", "world", "i", "love", "algorithms"]
let bloomFilter = makeBloomFilter(dictionary);
console.log(bloomFilter);
searchBloomFilter("hello", bloomFilter )
searchBloomFilter("lolz", bloomFilter )
