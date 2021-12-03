import { useState, useEffect } from 'react';
import EmojiImage from './EmojiImage';

function App() {
	const [image, setImage] = useState(null);
	const [emojiImage, setEmojiImage] = useState(null);
	const [backgroundColor, setBackgroundColor] = useState('#fff');
	const [scale, setScale] = useState(0.75);

	const uploadImage = (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('image', image);
		fetch('http://localhost:2020/convert', {
			method: 'POST',
			headers: {
				enctype: 'multipart/form-data',
			},
			body: formData,
		})
			.then((res) => {
				res.json().then((data) => {
					if (data.success) {
						setEmojiImage(data.emojis);
					}
				});
			})
			.catch((err) => console.log(err));
	};

	const validateHex = (hex) => {
		const hexRegex = /^#([A-Fa-f0-9]{6})$/;
		if (hexRegex.test(hex)) {
			setBackgroundColor(hex);
		}
	};

	const validateScale = (scale) => {
		if (scale > 0 && scale <= 1) {
			setScale(scale);
		}
	};

	return (
		<div className="App" style={{ textAlign: 'center' }}>
			<h1>Image to emojiImage</h1>
			<div style={{ display: 'flex', width: '99vw', justifyContent: 'space-evenly' }}>
				<form onSubmit={uploadImage}>
					<input type="file" onChange={(event) => setImage(event.target.files[0])} name="image" />
					<button type="submit">Upload</button>
				</form>
				{image && <img src={URL.createObjectURL(image)} alt="uploaded" />}
				<div>
					<p>
						Hex Background color: <input type="text" onChange={(e) => validateHex(e.target.value)} placeholder="#000000" />
					</p>
					<p>
						Scale: <input type="number" onChange={(e) => validateScale(e.target.value)} placeholder="0.75" /> (0 - 1)
					</p>
				</div>
			</div>
			{emojiImage && <EmojiImage emojis={emojiImage} backgroundColor={backgroundColor} scaling={scale} />}
		</div>
	);
}

export default App;
