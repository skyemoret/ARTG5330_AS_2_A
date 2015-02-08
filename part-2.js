//Assignment 2-A Part 2
//Due Feb 12
//This short exercise will introduce you to arrays


//TODO: populate the new array with 1000 new random values between 50 and 200

var newArray = [];
var iterations = 10000;                 //took a wild guess here on how many values I would need- should I be guessing??

for (var i = 0; i<iterations; i++){
    var newNum = Math.random()*500;     //multiply Math.random values between 0-1
    if(newNum>50 && newNum<200){        //why doesn't  if(50<newNum<200){  work?
        if(newArray.length<1000){       //only append 1000 values
            newArray.push(newNum);      //add these values to newArray
        }
    }
}
console.log(newArray);
console.log(newArray.length);


//TODO: after you populate the array, find the average of all the values in the array

var arraySum = 0;
//newArray.forEach(function(arrayElement){  //not sure how to do it this way (eek!)

for (var n = 0; n<newArray.length; n++){    //loop through each array element
    arraySum += newArray[n];                //add value to arraySum
}
var arrayAvg = arraySum/(newArray.length);  //divide arraySum by the total number of array elements
console.log(arrayAvg);
