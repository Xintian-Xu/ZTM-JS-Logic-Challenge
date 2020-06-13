const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function clean(array) {
	array.sort(function(a, b) {return a-b});
	const answer = [];
	let temp = [];
	
	for (i = 0; i < (array.length-1); i++){
		if (array[i]===array[i+1]){
			temp.push(array[i]);
		}
		else{
			if(temp.length === 0){
				answer.push(array[i]);
			}
			else{
				temp.push(array[i]);
				answer.push(temp);
			}
			temp = [];
		}
	}
	return answer;

}

const cleaned = clean(array);
console.log(cleaned);