export type Section = {
	id: string;
	ref: React.RefObject<HTMLElement>;
};

export type StartDate = {
	year: number;
	month: number;
};

export type SkillProps = {
	tech: string;
	startDate: StartDate;
	width: string;
};

export type ValidLink =
	| `http${'s' | ''}://${string}`
	| `mailto:${string}`
	| `tel:${string}`;

// For img urls
export type ImageUrls = {
	portrait: string;
};

export type TechIconsType = {
	css3: string;
	html5: string;
	javascript: string;
	mysql: string;
	oracle: string;
	php: string;
	react: string;
	sass: string;
	tailwind: string;
	typescript: string;
	vue: string;
};

export type SupportedLanguages = 'en' | 'de';

export type ProjectThumbnailsType = {
	[K in SupportedLanguages]: {
		tools: string;
		portfolio: string;
		tasks: string;
		restaurant: string;
	};
};
