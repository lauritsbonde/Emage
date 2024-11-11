import React, {useEffect, useCallback, forwardRef, RefObject} from 'react';

interface EmojiImageProps {
	emojis: string[][] | null;
}

const EmojiImage = forwardRef<HTMLCanvasElement, EmojiImageProps>(({emojis}, ref) => {
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
		const canvas = ref as RefObject<HTMLCanvasElement>;
		if (canvas.current) {
			const context = canvas.current.getContext('2d');
			if (!context || !emojis) {
				return;
			}

			const rows = emojis.length;
			const columns = emojis[0].length;

			const windowRatio = window.innerWidth / window.innerHeight;
			const emojiRatio = columns / rows;

			let canvasWidth, canvasHeight;

			if (windowRatio > emojiRatio) {
				canvasHeight = window.innerHeight * 0.8;
				canvasWidth = canvasHeight * emojiRatio;
			} else {
				canvasWidth = window.innerWidth;
				canvasHeight = canvasWidth / emojiRatio;
			}

			canvas.current.width = canvasWidth;
			canvas.current.height = canvasHeight;

			const emojiSize = Math.min(canvasWidth / columns, canvasHeight / rows);

			draw(context, canvasWidth, canvasHeight, emojiSize);
		}
	}, [draw, emojis, ref]);

	useEffect(() => {
		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);
		return () => window.removeEventListener('resize', resizeCanvas);
	}, [resizeCanvas]);

	return <canvas ref={ref} className="max-w-full"></canvas>;
});

export default EmojiImage;
