const Jimp = require('jimp');
const fs = require('fs');

const quality = 1; //lower is better
// testimage times with linear serach:
// a pattern emarged with even qualities the image is shit
// Time: 28668ms - quality: 1
// Time: 21427ms - quality: 2 - looks awfull
// Time: 14390ms - quality: 3 - looks ok actually
// Time: 10334ms - quality: 4 - shit again
// Time: 7672ms - quality: 5 - looks ok

// Using json files with all colors mapped to an emoji
// Time: 73ms - quality: 1
// Time: 74ms - quality: 2 - and is horrible
// Time: 86ms - quality: 3 - looks allright

// this things makes starting the server a little slow, but worth it
const lowBluesRaw = fs.readFileSync('./lookup/blueLessThan131.json');
const highBluesRaw = fs.readFileSync('./lookup/blueGreaterThan130.json');

const lowBlues = JSON.parse(lowBluesRaw);
const highBlues = JSON.parse(highBluesRaw);

console.log(Object.keys(highBlues)[Object.keys(highBlues).length - 1]);

async function convert(imagePath) {
	return new Promise(async (resolve, reject) => {
		const emojiImage = [];
		await Jimp.read(await imagePath, (err, image) => {
			if (err) {
				reject(err);
			}
			const height = image.bitmap.height;
			const width = image.bitmap.width;
			for (let i = 0; i < height; i++) {
				let row = [];
				for (let j = 0; j < width; j++) {
					const pixel = Jimp.intToRGBA(image.getPixelColor(j, i));
					const hex = rgbaToHex(Math.round(pixel.r / quality) * quality, Math.round(pixel.g / quality) * quality, Math.round(pixel.b / quality) * quality);
					if (pixel.b < 131) {
						row.push(lowBlues[hex]);
					} else {
						if (highBlues[hex] == null) {
							console.log(hex);
						}
						row.push(highBlues[hex]);
					}
				}
				emojiImage.push(row);
			}
			resolve(emojiImage);
		});
	});
}

function rgbaToHex(r, g, b) {
	return '' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

module.exports = convert;
