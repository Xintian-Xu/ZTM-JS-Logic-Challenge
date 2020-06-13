const array = [1,2,3];
const array2 = [2,1,3];
const array3 = [0, 2, 15, 4, 9, 3];
const array4 = [-1, -3, 4, 2, 5];

function binarySearch(array, item){
	let low = 0;
	let high = array.length-1;
	
	while(low <= high){
		let midIndex = Math.floor((low + high )/2);
		if (item < array[midIndex]){
			high = midIndex - 1;
		}
		else if (item > array[midIndex]){
			low = midIndex + 1;
		}
		else {
			return array[midIndex];
		}
	}
	return null;
	
}

function targetAdd(array, target){
	
	array.sort(function(a, b) {return a-b});
	const answer = [];
	for(let i = 0; i < array.length; i++){

		const operand2 = binarySearch(array, (target - array[i]));
		if (operand2 !== null){
			answer.push(array[i]);
			answer.push(operand2);
		}

		if (answer.length === 2){
			return answer;
		}
	}
	return answer;
}

const ans1 = targetAdd(array, 4);
const ans2 = targetAdd(array2, 8);
const ans3 = targetAdd(array2, 3);
const ans4 = targetAdd(array3, 9);
const ans5 = targetAdd(array4, -1);

