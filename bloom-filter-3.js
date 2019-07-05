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
  if (bloomFilter[indicesInBinaryArray(word)]){
    console.log("Found! At index " + indicesInBinaryArray(word) );
    return true
  } else {
    console.log("Not found :(");
    return false
  }
}

//My dictionary's contents
dictionary = ["hello", "world", "i", "love", "algorithms"]
let bloomFilter = makeBloomFilter(dictionary);
console.log(bloomFilter);
