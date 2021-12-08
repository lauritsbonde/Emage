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
};
const keys = Object.keys(test);
const indexes = { start: 0, end: keys.length - 1 };
const root = kdTree(indexes, keys, test);

function kdTree(indexes, keys, colorMap, depth = 0) {
	if (indexes.start >= indexes.end) {
		return {
			value: colorMap[keys[indexes.start]],
			hexValue: keys[indexes.start],
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

	const medianIndex = Math.floor((indexes.start + indexes.end) / 2);
	const medianKey = sortedKeys[medianIndex];
	const medianValue = colorMap[medianKey];

	const leftIndexes = { start: indexes.start, end: medianIndex - 1 };
	const rightIndexes = { start: medianIndex + 1, end: indexes.end };

	const node = {
		value: medianValue,
		hexValue: medianKey,
		depth: depth,
		left: kdTree(leftIndexes, sortedKeys, colorMap, depth + 1),
		right: kdTree(rightIndexes, sortedKeys, colorMap, depth + 1),
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
	const distance = distanceTo(node.hexValue, target);
	if (distance < best.distance) {
		best = { value: node.value, hexValue: node.hexValue, distance: distance };
	}
	if (node.isLeaf) {
		return;
	}
	const axis = depth % 3;
	const medianKey = node.hexValue;

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
	}
	if (parseInt(target.substring(4, 6), 16) < parseInt(medianKey.substring(4, 6), 16)) {
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

module.exports = { kdTree, search };
