import { ProjectThumbnails } from './imgUrls';

export type Project = {
	name: string;
	technologies: string[];
	projectLink?: string;
	codeLink?: string;
	isDemo: boolean;
	imageSrcKey: keyof (typeof ProjectThumbnails)['en' | 'de'];
};

export const projects: Project[] = [
	{
		name: 'Portfolio',
		technologies: ['React', 'Tailwind', 'TypeScript', 'CSS'],
		codeLink: 'https://github.com/adriangoerken/portfolio',
		isDemo: false,
		imageSrcKey: 'portfolio',
	},
	{
		name: 'TaskDoneify',
		technologies: [
			'React',
			'Tailwind',
			'JavaScript',
			'PHP',
			'MySQL',
			'CSS',
		],
		projectLink: 'https://taskdoneify.pages.dev',
		codeLink: 'https://github.com/adriangoerken/todo-list-app',
		isDemo: true,
		imageSrcKey: 'tasks',
	},
	{
		name: 'ImageTools',
		technologies: ['React', 'Tailwind', 'TypeScript', 'CSS'],
		projectLink: 'https://imagetoolsag.pages.dev',
		codeLink: 'https://github.com/adriangoerken/image-tools',
		isDemo: true,
		imageSrcKey: 'tools',
	},
	{
		name: 'Umami Nights',
		technologies: ['React', 'Tailwind', 'TypeScript'],
		projectLink: 'https://umaminights.pages.dev',
		codeLink: 'https://github.com/adriangoerken/restaurant-site',
		isDemo: true,
		imageSrcKey: 'restaurant',
	},
];
