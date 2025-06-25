export type Project = {
	id: number;
	title: string;
	description: string;
	problem: string;
	contribution: string;
	technologies: string[];
	outcomes: string;
	imageUrl?: string;
	demoUrl?: string;
	repoUrl?: string;
	isDemo: boolean;
};
