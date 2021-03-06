import React, { useRef, useEffect } from 'react';

const EmojiImage = ({ emojis, backgroundColor, scaling, emojiSize, setEmojiSize }) => {
	const canvasRef = useRef(null);
	const scale = { width: (window.innerWidth / emojis[0].length) * scaling, height: (window.innerHeight / emojis.length) * scaling };

	const draw = (ctx) => {
		ctx.fillStyle = backgroundColor;
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = '#000000';
		ctx.font = emojiSize + 'px serif';
		for (let i = 0; i < emojis.length; i++) {
			ctx.fillText(emojis[i], 0, i * scale.height);
		}
		ctx.fill();
	};

	// download canvas as png
	const download = () => {
		const link = document.createElement('a');
		link.download = 'emoji.png';
		link.href = canvasRef.current.toDataURL();
		link.click();
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		const fontSize = context.canvas.width / (emojis[0].length * (10 / 8));
		setEmojiSize(fontSize);

		draw(context);
	});

	return (
		<div>
			<canvas ref={canvasRef} width={emojis[0].length * scale.width + 'px'} height={emojis.length * scale.height + 'px'}></canvas>
			<br />
			<button
				onClick={() => {
					download();
				}}
			>
				Download Image
			</button>
		</div>
	);
};

export default EmojiImage;
