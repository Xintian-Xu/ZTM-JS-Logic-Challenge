
const hex1 = '#ff00ff';
const hex2 = '#3d259a';
const hex3 = '#ffffff';
const hex4 = '#000000';
const rgb1 = 'rgb(0, 0, 0)';
const rgb2 = 'rgb(0, 255, 45)';
const rgb3 = 'rgb(255, 255, 255)';
const rgb4 = 'rgb(12, 189, 3);';

function autoDetect(color){
	if(color[0] === '#'){
		return hexToRgb(color);
	}
	else {
		return rgbToHex(color);
	}
}

function hexToRgb(color){
	let temp = color.substring(1);
	temp = temp.match(/.{2}/g);
	const r = parseInt(temp[0], 16);
	const g = parseInt(temp[1], 16);
	const b = parseInt(temp[2], 16);

	return `You entered hex color ${color}, this color converted to RGB is (${r}, ${g}, ${b})`;

}

function rgbToHex(color){

	const splitColor = color.slice(4, -1).split(', ');
	let hexColor = '#';
	for(let i = 0; i < splitColor.length; i++){
		let temp = parseInt(splitColor[i], 10).toString(16);
		if (temp.length < 2){
			temp = '0'+ temp;
		}
		hexColor += temp;
	}
	return `You entered RGB color ${color}, this color converted to hex is ${hexColor}`;
}

const convertedColor1 = autoDetect(hex1);
const convertedColor2 = autoDetect(hex2);
const convertedColor3 = autoDetect(hex3);
const convertedColor4 = autoDetect(hex4);
const convertedColor5 = autoDetect(rgb1);
const convertedColor6 = autoDetect(rgb2);
const convertedColor7 = autoDetect(rgb3);
const convertedColor8 = autoDetect(rgb4);