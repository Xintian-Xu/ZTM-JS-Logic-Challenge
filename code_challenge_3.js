
const color1;
const color2;
const

function autoDetect(color){
	if(color.length === 7){
		return hexToRgb(color);
	}
	else {
		return rgbToHex(color);
	}
}

function hexToRgb(color){
	let temp = color.substring(1);
	temp.match(/..?/g);
	const r = parseInt(temp[0], 16);
	const g = parseInt(temp[1], 16);
	const b = parseInt(temp[2], 16);

	return `You entered ${color}, this color converted to RGB is (${r}, ${g}, ${b})`

}

function rgbToHex(color){
	
}

const convertedColor = autoDetect(color);