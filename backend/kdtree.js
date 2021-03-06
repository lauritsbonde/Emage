const test = {
	111111: 'โพ',
	303231: '๐ถ',
	326855: '๐น๐ฒ',
	333334: '๐ด',
	363028: '๐๐ฟ',
	373636: '๐ค',
	386576: '๐จ๐ฝ',
	388329: '๐จ๐จ',
	397856: '๐น๐ฟ',
	403028: 'โ๐ฟ',
	438778: '๐ง๐ธ',
	444444: '๐ณ',
	445169: '๐ฒ',
	453730: '๐๐ฟ',
	464646: '๐พ',
	473931: '๐ฆ๐ฟ',
	474751: '๐๐ฟ',
	475159: '๐ด',
	475376: '๐ต๐ณ',
	484848: 'โ',
	494332: '๐ฉ',
	494949: 'โ',
	505051: '๐ฅ',
	513168: '๐จ๐ฐ',
	518152: '๐ฒ๐ท',
	525356: '๐ฎ๐พ',
	525458: '๐ฅ',
	533165: '๐ฐ๐พ',
	535456: 'โ',
	536376: '๐ฒ',
	544036: '๐๐ฟ',
	547753: '๐',
	555354: '๐๐ฟ',
	555549: '๐',
	574432: '๐ฑ๐พ',
	593761: '๐น๐จ',
	594729: '๐ธ๐ฟ',
	595550: '๐คน๐ฟ',
	599377: '๐ท๐ผ',
	614331: '๐ง๐พ',
	615750: '๐๐ฟ',
	626162: '๐ฌ',
	636263: '๐ฎ๐ฝ',
	648648: '๐ข',
	655042: '๐ฆ',
	655537: '๐ป๐บ',
	658398: '๐',
	666461: '๐ณ๐ฆ',
	666766: '๐ค',
	674532: '๐ฒ๐ผ',
	675446: '๐',
	677278: '๐',
	688594: '๐',
	696767: '๐ฆ',
	697483: '๐',
	704549: '๐น',
	706052: '๐คน๐พ',
	706254: 'โน๐ฟ',
	709967: '๐ฌ๐ฆ',
	713356: '๐ฑ๐ฎ',
	716254: '๐ต๐พ',
	716676: '๐ถ๐ฝ',
	718086: '๐',
	722928: '๐ฆ๐ด',
	726081: '๐ฆ๐ธ',
	727169: '๐ฟ',
	736256: '๐๐พ',
	736357: '๐ฉ๐ป',
	737679: '๐น',
	745745: '๐คฆ๐พ',
	746756: '๐ง',
	767676: '๐',
	769362: '๐ฃ',
	774831: '๐ฅ',
	776963: '๐๐ฝ',
	777082: '๐ถ๐ป',
	777465: '๐ต๐ธ',
	777676: '๐บ',
	784768: '๐คฐ๐พ',
	786669: '๐ฌ๐ฒ',
	787571: '๐ฆ',
	787975: '๐ฎ๐ผ',
	788075: '๐',
	806653: '๐๐พ',
	807354: '๐ฒ๐บ',
	817061: '๐คน๐ฝ',
	823733: '๐๐ป',
	827268: '๐๐พ',
	835436: '๐ถ๐พ',
	837864: '๐คฝ๐ฟ',
	838688: '๐จ',
};
const keys = Object.keys(test);
const root = kdTree(keys, test);

function kdTree(keys, colorMap, depth = 0) {
	if (keys.length === 0) {
		return {
			value: colorMap[keys[0]],
			hexValue: keys[0],
			depth: depth,
			left: null,
			right: null,
			isLeaf: true,
		};
	}
	const axis = depth % 3;
	const sortedKeys = keys.sort((a, b) => {
		if (axis === 0) {
			return parseInt(a.substring(0, 2), 16) - parseInt(b.substring(0, 2), 16);
		} else if (axis === 1) {
			return parseInt(a.substring(2, 4), 16) - parseInt(b.substring(2, 4), 16);
		}
		return parseInt(a.substring(4, 6), 16) - parseInt(b.substring(4, 6), 16);
	});

	const medianIndex = Math.floor(sortedKeys.length / 2);
	const medianKey = sortedKeys[medianIndex];
	const medianValue = colorMap[medianKey];

	const leftKeys = sortedKeys.slice(0, medianIndex);
	const rightKeys = sortedKeys.slice(medianIndex + 1);

	const node = {
		value: medianValue,
		hexValue: medianKey,
		depth: depth,
		left: kdTree(leftKeys, colorMap, depth + 1),
		right: kdTree(rightKeys, colorMap, depth + 1),
		isLeaf: false,
	};
	return node;
}

let best = { value: null, hexValue: null, distance: Infinity };
function search(root, target) {
	best = { value: null, hexValue: null, distance: Infinity };
	nearestNeighbour(root, target);
	return best;
}

//nearest neighbour search
function nearestNeighbour(node, target, depth = 0) {
	if (node.isLeaf) {
		return;
	}
	const axis = depth % 3;
	const medianKey = node.hexValue;
	const distance = distanceTo(medianKey, target);
	if (distance < best.distance) {
		best = { value: node.value, hexValue: node.hexValue, distance: distance };
	}

	if (axis === 0) {
		if (parseInt(target.substring(0, 2), 16) < parseInt(medianKey.substring(0, 2), 16)) {
			return nearestNeighbour(node.left, target, depth + 1);
		} else {
			return nearestNeighbour(node.right, target, depth + 1);
		}
	} else if (axis === 1) {
		if (parseInt(target.substring(2, 4), 16) < parseInt(medianKey.substring(2, 4), 16)) {
			return nearestNeighbour(node.left, target, depth + 1);
		} else {
			return nearestNeighbour(node.right, target, depth + 1);
		}
	} else if (parseInt(target.substring(4, 6), 16) < parseInt(medianKey.substring(4, 6), 16)) {
		return nearestNeighbour(node.left, target, depth + 1);
	} else {
		return nearestNeighbour(node.right, target, depth + 1);
	}
}

function distanceTo(color1, color2) {
	const r1 = parseInt(color1.substring(0, 2), 16);
	const r2 = parseInt(color2.substring(0, 2), 16);
	const g1 = parseInt(color1.substring(2, 4), 16);
	const g2 = parseInt(color2.substring(2, 4), 16);
	const b1 = parseInt(color1.substring(4, 6), 16);
	const b2 = parseInt(color2.substring(4, 6), 16);
	return Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2));
}

// const testColor = '445169';

// console.log(search(root, testColor));

module.exports = { kdTree, search };
