const Jimp = require('jimp');
const kdTree = require('./kdtree.js');

async function convert(imagePath, kdTreeRoot) {
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
					const hex = rgbaToHex(pixel.r, pixel.g, pixel.b);
					const closest = kdTree.search(kdTreeRoot, hex);
					if (closest.value !== '🖱') {
						console.log(closest);
					}
					row.push(closest.value);
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
