const test = {
	111111: '◾',
	303231: '🕶',
	326855: '🇹🇲',
	333334: '🏴',
	363028: '💂🏿',
	373636: '🖤',
	386576: '🇨🇽',
	388329: '🇨🇨',
	397856: '🇹🇿',
	403028: '✍🏿',
	438778: '🇧🇸',
	444444: '🕳',
	445169: '🖲',
	453730: '💆🏿',
	464646: '🐾',
	473931: '👦🏿',
	474751: '🙏🏿',
	475159: '🛴',
	475376: '🇵🇳',
	484848: '➕',
	494332: '🎩',
	494949: '➖',
	505051: '🖥',
	513168: '🇨🇰',
	518152: '🇲🇷',
	525356: '👮🏾',
	525458: '🎥',
	533165: '🇰🇾',
	535456: '⛏',
	536376: '🚲',
	544036: '👌🏿',
	547753: '🐊',
	555354: '🏋🏿',
	555549: '🌘',
	574432: '🇱🇾',
	593761: '🇹🇨',
	594729: '👸🏿',
	595550: '🤹🏿',
	599377: '🇷🇼',
	614331: '👧🏾',
	615750: '🙋🏿',
	626162: '🎬',
	636263: '👮🏽',
	648648: '🐢',
	655042: '🦇',
	655537: '🇻🇺',
	658398: '🌏',
	666461: '🇳🇦',
	666766: '🎤',
	674532: '🇲🇼',
	675446: '🐗',
	677278: '🚔',
	688594: '🌍',
	696767: '🦍',
	697483: '🚝',
	704549: '🕹',
	706052: '🤹🏾',
	706254: '⛹🏿',
	709967: '🇬🇦',
	713356: '🇱🇮',
	716254: '🕵🏾',
	716676: '🚶🏽',
	718086: '🔊',
	722928: '🇦🇴',
	726081: '🇦🇸',
	727169: '🗿',
	736256: '🙇🏾',
	736357: '👩🏻',
	737679: '📹',
	745745: '🤦🏾',
	746756: '🐧',
	767676: '📓',
	769362: '🛣',
	774831: '🥀',
	776963: '🏋🏽',
	777082: '🚶🏻',
	777465: '🇵🇸',
	777676: '🐺',
	784768: '🤰🏾',
	786669: '🇬🇲',
	787571: '🦏',
	787975: '👮🏼',
	788075: '🚍',
	806653: '🙋🏾',
	807354: '🇲🇺',
	817061: '🤹🏽',
	823733: '💃🏻',
	827268: '🙆🏾',
	835436: '👶🏾',
	837864: '🤽🏿',
	838688: '🖨',
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
