import React, {useState, useRef} from 'react';
import ImageCanvas from './components/ImageCanvas';

import mappedEmojis from './utils/MappedEmojis';
import {kdTree} from './utils/kdtree';
import Sidebar from './components/Sidebar';

function App() {
	const [image, setImage] = useState<File | null>(null);

	const kdRef = useRef(kdTree(Object.keys(mappedEmojis), mappedEmojis));

	return (
		<div className="flex">
			<div className="flex-1">
				<Sidebar image={image} setImage={setImage} />
			</div>
			<div className="flex-[4] flex flex-col items-center pt-4">
				<h2 className="text-5xl font-bold text-center">Emage</h2>
				<p className="text-xl text-center">Your image converted to emojis!</p>
				<ImageCanvas image={image} kdTree={kdRef.current} />
			</div>
		</div>
	);
}

export default App;
