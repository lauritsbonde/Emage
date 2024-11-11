import React, {useRef, useLayoutEffect, useState, FC, useEffect, RefObject} from 'react';
import {search} from '../utils/kdtree';
import EmojiImage from './EmojiImage';
import {ReactCompareSlider} from 'react-compare-slider';
import {useEmoji} from '../contexts/EmojiContext';

function rgbaToHex(r: number, g: number, b: number) {
	return '' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const ImageCanvas: FC = () => {
	const {file: image, kdTree, compareImages} = useEmoji();
	const originalCanvasRef = useRef<HTMLCanvasElement>(null);
	const emojiCanvasRef = useRef<HTMLCanvasElement>(null);
	const emojiComparerRef = useRef<HTMLCanvasElement>(null);
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
		const canvas = originalCanvasRef.current;
		if (!canvas) {
			console.error('Canvas not found');
			return;
		}
		const ctx = canvas.getContext('2d');
		if (!ctx) {
			console.error('Canvas context not found');
			return;
		}

		if (!imageUrl) {
			console.error('Image URL not found');
			return;
		}

		const image = new Image();
		image.src = imageUrl;
		image.crossOrigin = 'Anonymous';

		image.onload = () => {
			console.log('Image loaded');
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
	}, [imageUrl, kdTree]);

	const download = () => {
		const link = document.createElement('a');
		link.download = 'emoji.png';
		if (!(emojiCanvasRef as RefObject<HTMLCanvasElement>).current) {
			return;
		}
		link.href = (emojiCanvasRef as RefObject<HTMLCanvasElement>).current!.toDataURL();
		link.click();
		link.remove();
	};

	return (
		<div className="relative h-full mt-8 w-full flex flex-col pb-10 items-center">
			{/* Original image canvas */}
			<div className="relative h-full mt-8 w-full">
				<div className={`${compareImages ? 'opacity-0' : 'opacity-1'} transition-all duration-500 ease-in-out absolute max-w-full max-h-full left-[25%]`}>
					<EmojiImage emojis={emojiImage} ref={emojiCanvasRef} />
				</div>
				<div className={`${compareImages ? 'opacity-1' : 'opacity-0'} transition-all duration-500 ease-in-out absolute max-w-full max-h-full left-[25%]`}>
					<ReactCompareSlider itemOne={<canvas ref={originalCanvasRef} />} itemTwo={<EmojiImage emojis={emojiImage} ref={emojiComparerRef} />} style={{width: '100%', height: '80dvh'}} />
				</div>
			</div>
			<button className="btn btn-success max-w-56 px-8" onClick={download}>
				Download Emoji image
			</button>
		</div>
	);
};

export default ImageCanvas;
