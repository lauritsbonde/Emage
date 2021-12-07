const fs = require('fs');

const mappedEmojis = require('./mappedEmojis');
const emojiMap = mappedEmojis.mappedEmojis.emojiMap;

function makeLookup(bigBlue) {
	//just map  all colors to an emoji 🐢🐢🐢🐢🐢
	const blueString = bigBlue ? '130-255' : '0-131';
	console.log('creating lookup for r 0-255, g 0-255, b ' + blueString);
	map(bigBlue);
}

function map(bigBlue) {
	const colorMap = {};
	let r = 0,
		g = 0,
		b = bigBlue ? 131 : 0;
	for (let i = 0; i < 255 * 255 * 255; i++) {
		const hex = rgbaToHex(r, g, b);
		const emoji = search({ r, g, b });
		r++;
		if (r > 255) {
			r = 0;
			g++;
		}
		if (g > 255) {
			g = 0;
			b++;
		}
		if (emoji) {
			colorMap[hex] = emoji;
		}
		if (b > 255) {
			b = 0;
			break;
		}
		if (!bigBlue && b > 131) {
			break;
		}
		if (i % 10000 === 0) {
			console.log(i.toLocaleString(), '/', (255 * 255 * (bigBlue ? 255 - 129 : 131)).toLocaleString(), 'color r:', r, 'g:', g, 'b', b, 'hex', hex, 'emoji:', emoji);
		}
	}
	const finalPath = bigBlue ? 'blueGreaterThan130.json' : 'blueLessThan131.json';
	fs.writeFileSync('./lookup/' + finalPath, JSON.stringify(colorMap));
}

//find the closest color in the emojiMap - linear search on unsorted elements
function search(pixel) {
	const closest = { key: '', distance: Infinity };
	Object.keys(emojiMap).forEach((key) => {
		const red = parseInt(key.substring(0, 2), 16);
		const green = parseInt(key.substring(2, 4), 16);
		const blue = parseInt(key.substring(4, 6), 16);
		const distance = Math.sqrt(Math.pow(red - pixel.r, 2) + Math.pow(green - pixel.g, 2) + Math.pow(blue - pixel.b, 2));
		if (distance < closest.distance) {
			closest.key = key;
			closest.distance = distance;
			//can be 0 instead of 0+1, should be more accurate but doesnt matter that much
			if (distance <= 0 + 10) {
				return;
			}
		}
	});
	return emojiMap[closest.key];
}

function rgbaToHex(r, g, b) {
	return '' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

module.exports = makeLookup;
