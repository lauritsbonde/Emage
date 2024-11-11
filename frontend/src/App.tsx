import React from 'react';
import ImageCanvas from './components/ImageCanvas';

import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className="flex">
			<div className="flex-1">
				<Sidebar />
			</div>
			<div className="flex-[4] flex flex-col items-center pt-4">
				<h2 className="text-5xl font-bold text-center">Emage</h2>
				<p className="text-xl text-center">Your image converted to emojis!</p>
				<ImageCanvas />
			</div>
		</div>
	);
}

export default App;
