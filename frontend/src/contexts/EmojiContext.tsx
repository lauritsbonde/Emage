import React, {createContext, FC, ReactNode, useContext, useRef, useState} from 'react';
import {Node, kdTree} from '../utils/kdtree';
import mappedEmojis from '../utils/MappedEmojis';

interface EmojiContextType {
	file: File | null;
	setFile: (file: File) => void;

	kdTree: Node;

	compareImages: boolean;
	setCompareImages: (compareImages: boolean) => void;
}

// Define the context without initializing kdTree outside the provider
const EmojiContext = createContext<EmojiContextType | undefined>(undefined);

interface EmojiProviderProps {
	children: ReactNode;
}

export const EmojiProvider: FC<EmojiProviderProps> = ({children}) => {
	const [file, setFile] = useState<File | null>(null);
	const [compareImages, setCompareImages] = useState<boolean>(false);

	// Initialize kdTree only once in the provider
	const kdRef = useRef(kdTree(Object.keys(mappedEmojis), mappedEmojis));

	return <EmojiContext.Provider value={{file, setFile, kdTree: kdRef.current, compareImages, setCompareImages}}>{children}</EmojiContext.Provider>;
};

export const useEmoji = (): EmojiContextType => {
	const context = useContext(EmojiContext);
	if (!context) {
		throw new Error('useEmoji must be used within an EmojiProvider');
	}
	return context;
};
