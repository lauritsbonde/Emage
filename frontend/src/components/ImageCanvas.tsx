import React, {useRef, useLayoutEffect, useState, FC, useEffect} from 'react';
import {Node, search} from '../utils/kdtree';
import EmojiImage from './EmojiImage';

function rgbaToHex(r: number, g: number, b: number) {
	return '' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

interface ImageCanvasProps {
	image: File | null;
	kdTree: Node;
}

const ImageCanvas: FC<ImageCanvasProps> = ({image, kdTree}) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [emojiImage, setEmojiImage] = useState<string[][] | null>(null);
	const [imageUrl, setImageUrl] = useState<string | null>(null);

	useEffect(() => {
		if (!image) {
			return;
		}

		const imageUrl = URL.createObjectURL(image);
		console.log(imageUrl);
		setImageUrl(imageUrl);
	}, [image]);

	useLayoutEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}
		const ctx = canvas.getContext('2d');
		if (!ctx) {
			return;
		}

		if (!imageUrl) {
			return;
		}

		const image = new Image();
		image.src = imageUrl;
		image.crossOrigin = 'Anonymous';

		image.onload = () => {
			canvas.width = image.width;
			canvas.height = image.height;

			const emojiImage = [];
			const emojiCache = {} as {[color: string]: string};
			ctx.drawImage(image, 0, 0);
			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			const data = imageData.data;

			const imageWidth = canvas.width;

			for (let i = 0; i < data.length; i += 4) {
				const red = data[i];
				const green = data[i + 1];
				const blue = data[i + 2];
				const alpha = data[i + 3];

				const hex = rgbaToHex(red, green, blue);

				if (hex in emojiCache) {
					emojiImage.push(emojiCache[hex]);
				} else {
					const closest = search(kdTree, hex);
					emojiImage.push(closest.value);
					emojiCache[hex] = closest.value;
				}
			}

			const emoji2DArray = [];
			for (let i = 0; i < emojiImage.length; i += imageWidth) {
				emoji2DArray.push(emojiImage.slice(i, i + imageWidth));
			}

			setEmojiImage(emoji2DArray);
		};

		image.onerror = () => {
			console.error('Failed to load the image.');
		};
	}, [imageUrl]);

	return (
		<div className="relative max-w-full flex items-center justify-center">
			<canvas ref={canvasRef} className="max-w-full hidden" />
			<EmojiImage emojis={emojiImage} />
		</div>
	);
};

export default ImageCanvas;
