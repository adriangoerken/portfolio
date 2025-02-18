import { useState } from 'react';

type ImageLoaderProps = {
	src: string;
	alt: string;
	className?: string;
};

const ImageLoader = ({ src, alt, className = '' }: ImageLoaderProps) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className={`relative ${className}`}>
			{isLoading && (
				<div className="absolute inset-0 animate-pulse bg-elevation-300 rounded-inherit" />
			)}
			<img
				src={src}
				alt={alt}
				className={`${className} ${
					isLoading ? 'opacity-0' : 'opacity-100'
				} transition-opacity duration-300`}
				onLoad={() => setIsLoading(false)}
			/>
		</div>
	);
};

export default ImageLoader;
