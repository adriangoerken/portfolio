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
