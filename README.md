# DictionariesAndSets
Exercises on dictionaries and sets for my apprenticeship - https://corndel.atlassian.net/wiki/spaces/AC/pages/78184452/4+-+Dictionaries+and+Sets

This week covers dictionaries and sets.

# Dictionaries

In Javascript there aren't any dictionaries but you can use Objects and Maps to make key:value pairs. In Objects keys must be strings, but in Maps keys can be anything.


Making Bloom Filters : http://codekata.com/kata/kata05-bloom-filters/
More info on Bloom Filters: https://www.jasondavies.com/bloomfilter/

- No false negatives but can yield false positives
  - This will occur if you overload the Bloom filter, i.e. have lots of stored elements requiring lots of bits but not a lot of memory set aside for storing them. There's an inverse relationship between false positives and bit array size
