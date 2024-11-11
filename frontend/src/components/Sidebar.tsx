import React, {FC, useEffect} from 'react';
import {themeChange} from 'theme-change';
import {useEmoji} from '../contexts/EmojiContext';

const Sidebar: FC = () => {
	const {file, setFile, compareImages, setCompareImages} = useEmoji();
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<div className="sidebar bg-primary h-dvh p-4 flex flex-col justify-between">
			<div className="flex flex-col gap-6">
				<div className="text-secondary-content">
					<h1 className="text-5xl font-bold">Emage</h1>
					<p className="text-xl">Upload an image to convert it to emojis!</p>
				</div>
				<div>
					<p className="text-secondary-content text-lg">Select another theme</p>
					<select className="select select-bordered w-full max-w-xs " data-choose-theme>
						<option value="">Select Theme</option>
						<option value="light">Light</option>
						<option value="dark">Dark</option>
						<option value="cupcake">Cupcake</option>
						<option value="bumblebee">Bumblebee</option>
						<option value="emerald">Emerald</option>
						<option value="corporate">Corporate</option>
						<option value="synthwave">Synthwave</option>
						<option value="retro">Retro</option>
						<option value="cyberpunk">Cyberpunk</option>
						<option value="valentine">Valentine</option>
						<option value="halloween">Halloween</option>
						<option value="garden">Garden</option>
						<option value="forest">Forest</option>
						<option value="aqua">Aqua</option>
						<option value="lofi">Lo-fi</option>
						<option value="pastel">Pastel</option>
						<option value="fantasy">Fantasy</option>
						<option value="wireframe">Wireframe</option>
						<option value="black">Black</option>
						<option value="luxury">Luxury</option>
						<option value="dracula">Dracula</option>
						<option value="cmyk">CMYK</option>
						<option value="autumn">Autumn</option>
						<option value="business">Business</option>
						<option value="acid">Acid</option>
						<option value="lemonade">Lemonade</option>
						<option value="night">Night</option>
						<option value="coffee">Coffee</option>
						<option value="winter">Winter</option>
					</select>
				</div>
				<div>
					<p className="text-secondary-content mb-2 text-lg">Upload an image and it will be converted to emojis!</p>
					<input
						type="file"
						accept="image/*"
						className="file-input file-input-bordered file-input-info w-full max-w-xs"
						onChange={(e) => {
							const file = e.target.files?.[0];
							if (file) {
								setFile(file);
							}
						}}
					/>
					<p>* Smaller images give the best result, large images may take a while</p>
					<p>* We are not saving any images</p>
					{file && (
						<div className="mt-4">
							<p className="text-secondary-content text-lg">The original image</p>
							<img src={URL.createObjectURL(file)} alt="Original" className="w-full max-h-44 object-contain" />
						</div>
					)}
				</div>
				<div className="flex items-center">
					<p className="text-secondary-content text-lg">Compare the image with the original</p>
					<label className="cursor-pointer label">
						<input type="checkbox" className="toggle toggle-lg toggle-success" onChange={(e) => setCompareImages(e.target.checked)} checked={compareImages} disabled={!file} />
					</label>
				</div>
			</div>

			<div className="text-center pb-6">
				<p className="text-secondary-content text-lg">
					Developed by <a href="https://github.com/lauritsbonde">Laurits</a>🧑🏼‍💻
				</p>
			</div>
		</div>
	);
};

export default Sidebar;
