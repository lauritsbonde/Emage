const emojiMap = {}; //hex to emoji

function getAvgHex(color, total) {
	return Math.round(color / total)
		.toString(16)
		.padStart(2, 0);
}

function analyzeEmojis() {
	for (let i = 0; i < emojis.length; i++) {
		console.log(emojis[i]);
		let totalPixels = 0;
		const colors = {
			red: 0,
			green: 0,
			blue: 0,
			alpha: 0,
		};
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		ctx.font = '30px Arial';
		ctx.fillText(emojis[i], 0, 28);
		const { data: imageData } = ctx.getImageData(0, 0, 30, 30);
		for (let i = 0; i < imageData.length; i += 4) {
			let [r, g, b, a] = imageData.slice(i, i + 4);
			if (a > 50) {
				totalPixels += 1;
				colors.red += r;
				colors.green += g;
				colors.blue += b;
				colors.alpha += a;
			}
		}
		const r = getAvgHex(colors.red, totalPixels);
		const g = getAvgHex(colors.green, totalPixels);
		const b = getAvgHex(colors.blue, totalPixels);

		emojiMap['' + r + g + b] = emojis[i];
	}
	console.log(JSON.stringify({ emojiMap }) + '\n');
}
