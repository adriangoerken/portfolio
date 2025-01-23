import { useState, useEffect } from 'react';

const useActiveSection = (
	sectionRefs: Record<string, React.RefObject<HTMLElement>>
) => {
	const [activeSection, setActiveSection] = useState<string>('');

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Find the key of the current section
						const sectionKey = Object.keys(sectionRefs).find(
							(key) => sectionRefs[key].current === entry.target
						);
						if (sectionKey) {
							setActiveSection(sectionKey);
						}
					}
				});
			},
			{
				threshold: 0.95, // Trigger when 80% of the section is visible
			}
		);

		// Observe all sections
		Object.values(sectionRefs).forEach((ref) => {
			if (ref.current) {
				observer.observe(ref.current);
			}
		});

		return () => observer.disconnect();
	}, [sectionRefs]);

	return activeSection;
};

export default useActiveSection;
