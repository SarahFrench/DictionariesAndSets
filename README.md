# DictionariesAndSets
Exercises on dictionaries and sets for my apprenticeship - https://corndel.atlassian.net/wiki/spaces/AC/pages/78184452/4+-+Dictionaries+and+Sets


Making Bloom Filters : http://codekata.com/kata/kata05-bloom-filters/
More info on Bloom Filters: https://www.jasondavies.com/bloomfilter/

- No false negatives but can yield false positives
  - This will occur if you overload the Bloom filter, i.e. have lots of stored elements requiring lots of bits but not a lot of memory set aside for storing them. There's an inverse relationship between false positives and bit array size
