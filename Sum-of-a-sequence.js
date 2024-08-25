/*
The task is to simply sum all the numbers from the first parameter being the 
beginning to the second parameter being the upper limit (possibly included), 
going in steps expressed by the third parameter:

  sequenceSum(2,2,2) === 2
  sequenceSum(2,6,2) === 12 // 2 + 4 + 6
  sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
  sequenceSum(1,5,3) === 5 // 1 + 4

If it is an impossible sequence, with the beginning being larger than the end 
and a positive step or the other way around, just return 0.

Note: Expect large ranges.
*/