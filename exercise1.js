/*Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered.
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]].*/ 

function sortInput(input) {
	//sort input from low to high
	let arr = input.sort(function(a, b){return a-b});
	//initialize variables and declare function
	let stringArray = [];
	let numberArray = [];
	let outputArray = [];
	function ArraySort(array) {
		let subArray = [];
		outputArray = [];
		for (let i = 0; i < array.length; i++) {
			if (array[i] === array[i+1]) {
				subArray.push(array[i]);
			}
			else if ((array[i] !== array[i+1]) && (array[i] === array[i-1])) {
				subArray.push(array[i]);
				outputArray.push(subArray);
				subArray = [];
			}
			else {
				outputArray.push(array[i]);
			}
		}
	}
	//divide between strings and numbers
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "string") {
			stringArray.push(arr[i]);
		}
		else {
			numberArray.push(arr[i]);
		}
	}
	//run function with numberArray
	ArraySort(numberArray);
	let sortedNumberArray = outputArray;
	//run function with stringArray
	ArraySort(stringArray);
	let sortedStringArray = outputArray;
	//join number and string arrays and return final array
	if (sortedStringArray.length == 0) {
		return sortedNumberArray;
	}
	else {
		let finalArray = [];
		finalArray.push(sortedNumberArray, sortedStringArray);
		return finalArray;
	}
}