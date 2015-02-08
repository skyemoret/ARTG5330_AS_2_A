//Assignment 2-A Part 1
//Due Feb 12
//This short exercise will help you gain additional proficiency working with JavaScript objects

var city1 = {
		name:"Boston",
		pop:657000,
		"year founded":1630
	};
var city2 = {
		name:"Cambridge",
		pop:120000,
		"year founded":1631
	};
	
//TODO: write a function that takes two city objects as parameter
//and returns the name of city that has a larger population
function whichCityIsLarger(a,b) {
    if (a.pop > b.pop){                             //.pop retrieves pop value for a and b
        return a.name;
    }
    else{
        return b.name;
    }
}
console.log(whichCityIsLarger(city1,city2));


//TODO: write a function that returns the name of the city that is older
function whichCityIsOlder(a,b){
    if (a["year founded"] < b["year founded"]){     //retrieves property value for "year founded" prop. name
        return a.name;
    }
    else{
        return b.name;
    }
}
console.log(whichCityIsOlder(city1,city2));