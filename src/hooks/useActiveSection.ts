import { useState, useEffect } from 'react';
import { getScrollOffset } from '../utils/utils';

type NavLink = {
	name: string;
	href: string;
};

const useActiveSection = (navLinks: NavLink[], isHomepage: boolean) => {
	const [activeSection, setActiveSection] = useState('hero');

	// Handle smooth scrolling
	const handleSmoothScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		if (!isHomepage) return; // Only apply on homepage

		e.preventDefault();
		const targetId = href.substring(1);
		const element = document.getElementById(targetId);

		if (element) {
			window.scrollTo({
				top: element.offsetTop - getScrollOffset(),
				behavior: 'smooth',
			});
			setActiveSection(targetId);
		}
	};

	// Detect active section on scroll
	useEffect(() => {
		if (!isHomepage) return;

		// Wait for DOM to be ready
		const setupObserver = () => {
			// Get all section IDs from navLinks
			const sectionIds = navLinks.map((link) => link.href.substring(1));

			// Check if all sections exist before setting up observer
			const allSectionsExist = sectionIds.every((id) =>
				document.getElementById(id)
			);

			if (!allSectionsExist) {
				// Retry after a longer delay
				setTimeout(setupObserver, 200);
				return;
			}

			// Create a map to store intersection ratios with proper typing
			const intersectionRatios: Record<string, number> = {};
			sectionIds.forEach((id) => {
				intersectionRatios[id] = 0;
			});

			const observer = new IntersectionObserver(
				(entries) => {
					// Update intersection ratios
					entries.forEach((entry) => {
						const id = entry.target.id;
						intersectionRatios[id] = entry.intersectionRatio;
					});

					// Find section with highest visibility ratio
					let maxRatio = 0;
					let maxId = activeSection;

					Object.keys(intersectionRatios).forEach((id) => {
						if (intersectionRatios[id] > maxRatio) {
							maxRatio = intersectionRatios[id];
							maxId = id;
						}
					});

					// Only update if there's a visible section
					if (maxRatio > 0) {
						setActiveSection(maxId);
					}
				},
				{
					rootMargin: '-80px 0px -20% 0px',
					threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
				}
			);

			// Observe each section
			sectionIds.forEach((id) => {
				const element = document.getElementById(id);
				if (element) {
					observer.observe(element);
				}
			});

			return () => {
				sectionIds.forEach((id) => {
					const element = document.getElementById(id);
					if (element) {
						observer.unobserve(element);
					}
				});
			};
		};

		// Small delay to ensure sections are rendered
		const timerId = setTimeout(setupObserver, 100);
		return () => clearTimeout(timerId);
	}, [isHomepage, navLinks, activeSection]);

	return { activeSection, handleSmoothScroll };
};

export default useActiveSection;
