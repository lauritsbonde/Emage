import React, {useRef, useEffect, useCallback, FC} from 'react';

interface EmojiImageProps {
	emojis: string[][] | null;
}

const EmojiImage: FC<EmojiImageProps> = ({emojis}) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const draw = useCallback(
		(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, emojiSize: number) => {
			if (!emojis) {
				return;
			}
			ctx.fillStyle = '#ffffff';
			ctx.fillRect(0, 0, canvasWidth, canvasHeight);
			ctx.fillStyle = '#000000';
			ctx.font = `${emojiSize}px serif`;
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';

			const rows = emojis.length;
			const columns = emojis[0].length;

			for (let i = 0; i < rows; i++) {
				for (let j = 0; j < columns; j++) {
					const x = j * emojiSize + emojiSize / 2;
					const y = i * emojiSize + emojiSize / 2;
					ctx.fillText(emojis[i][j], x, y);
				}
			}
		},
		[emojis]
	);

	const resizeCanvas = useCallback(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			const context = canvas.getContext('2d');
			if (!context) {
				return;
			}

			if (!emojis) {
				return;
			}

			const rows = emojis.length;
			const columns = emojis[0].length;

			// Calculate the ideal emoji size based on window dimensions and emoji grid
			const windowRatio = window.innerWidth / window.innerHeight;
			const emojiRatio = columns / rows;

			let canvasWidth, canvasHeight;

			if (windowRatio > emojiRatio) {
				// Window is wider than emoji grid; base on height
				canvasHeight = window.innerHeight * 0.8;
				canvasWidth = canvasHeight * emojiRatio;
			} else {
				// Window is taller than emoji grid; base on width
				canvasWidth = window.innerWidth;
				canvasHeight = canvasWidth / emojiRatio;
			}

			canvas.width = canvasWidth;
			canvas.height = canvasHeight;

			const emojiSize = Math.min(canvasWidth / columns, canvasHeight / rows);

			// Draw emojis on the canvas with the calculated emoji size
			draw(context, canvas.width, canvas.height, emojiSize);
		}
	}, [draw, emojis]);

	// Initialize and resize the canvas on window resize
	useEffect(() => {
		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);
		return () => window.removeEventListener('resize', resizeCanvas);
	}, [resizeCanvas]);

	// Download the canvas as PNG
	const download = () => {
		const link = document.createElement('a');
		link.download = 'emoji.png';
		if (!canvasRef.current) {
			return;
		}
		link.href = canvasRef.current.toDataURL();
		link.click();

		link.remove();
	};

	return (
		<div className="flex flex-col items-center mt-20 gap-5">
			<canvas ref={canvasRef} className="max-w-full max-h-[80%]"></canvas>
			{!emojis && <p className="text-lg">Upload an image to get started!</p>}
			{emojis && (
				<button className="btn btn-success" onClick={download}>
					Download Image
				</button>
			)}
		</div>
	);
};

export default EmojiImage;
