export interface Node {
	value: string;
	hexValue: string;
	depth: number;
	left: Node | null;
	right: Node | null;
	isLeaf: boolean;
}

export function kdTree(keys: Array<any>, colorMap: {[color: string]: string}, depth = 0): Node {
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

let best = {value: '', hexValue: '', distance: Infinity} as {value: string; hexValue: string; distance: number};
export function search(root: Node, target: string): {value: string; hexValue: string; distance: number} {
	best = {value: '', hexValue: '', distance: Infinity};
	nearestNeighbour(root, target);
	return best;
}

//nearest neighbour search
function nearestNeighbour(node: Node | null, target: string, depth = 0): void {
	if (node === null) {
		return;
	}
	if (node.isLeaf) {
		return;
	}
	const axis = depth % 3;
	const medianKey = node.hexValue;
	const distance = distanceTo(medianKey, target);
	if (distance < best.distance) {
		best = {value: node.value, hexValue: node.hexValue, distance: distance};
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

function distanceTo(color1: string, color2: string): number {
	const r1 = parseInt(color1.substring(0, 2), 16);
	const r2 = parseInt(color2.substring(0, 2), 16);
	const g1 = parseInt(color1.substring(2, 4), 16);
	const g2 = parseInt(color2.substring(2, 4), 16);
	const b1 = parseInt(color1.substring(4, 6), 16);
	const b2 = parseInt(color2.substring(4, 6), 16);
	return Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2));
}
