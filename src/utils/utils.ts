import { TFunction } from 'i18next';
import { StartDate } from '../lib/type';

interface ExtendedNavigator extends Navigator {
	userLanguage?: string;
	browserLanguage?: string;
}

export const getLanguage = () => {
	const extendedNavigator = navigator as ExtendedNavigator;
	return (
		extendedNavigator.language ||
		extendedNavigator.userLanguage ||
		extendedNavigator.browserLanguage ||
		'en-US'
	);
};

export const getExperienceYears = (
	startDate: StartDate,
	t: TFunction<'global'>
) => {
	const currentDate = new Date();
	const startYear = startDate.year;
	const startMonth = startDate.month;

	const years = currentDate.getFullYear() - startYear;
	const months = currentDate.getMonth() + 1 - startMonth; // getMonth() returns 0-11

	let totalYears = years;

	if (months < 0) {
		totalYears -= 1;
	}

	if (totalYears === 0) {
		return t('SkillsSection.Skill.year_zero');
	}

	return `${t('SkillsSection.Skill.year', {
		count: totalYears === 0 ? 1 : totalYears,
	})}`;
};

// Animations
export const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
};

export const fadeInScale = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.5 },
	},
};

export const cardVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 0.8,
		},
	},
	hover: {
		y: -10,
		transition: {
			type: 'spring',
			bounce: 0.4,
		},
	},
	tap: {
		scale: 0.98,
	},
};

export const staggerChildren = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};
