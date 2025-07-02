const LighthouseBanner = () => {
	const metrics = [
		{ name: 'Performance', score: 100, color: '#0cce6b' },
		{ name: 'Accessibility', score: 100, color: '#0cce6b' },
		{ name: 'Best Practices', score: 100, color: '#0cce6b' },
		{ name: 'SEO', score: 100, color: '#0cce6b' },
	];
	return (
		<div className="mt-6 pt-4 border-t border-gray-800">
			<div className="flex flex-col items-center">
				<a
					href="/lighthouse_desktop.html"
					target="_blank"
					className="hover:cursor-pointer"
				>
					<h2 className="text-white text-sm font-medium mb-4">
						Google Lighthouse Score (view full report)
					</h2>
				</a>
				<div className="flex flex-wrap justify-center gap-6">
					{metrics.map((metric) => (
						<div
							key={metric.name}
							className="flex flex-col items-center mb-4"
						>
							<div className="relative w-16 h-16 mb-1">
								<div
									className="absolute inset-0 rounded-full flex items-center justify-center"
									style={{
										background: `conic-gradient(${metric.color} ${metric.score}%, transparent ${metric.score}% 100%)`,
									}}
								>
									<div className="w-[80%] h-[80%] bg-black rounded-full flex items-center justify-center">
										<span className="text-white font-bold text-lg">
											{metric.score}
										</span>
									</div>
								</div>
							</div>
							<span className="text-gray-300 text-xs">
								{metric.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LighthouseBanner;
