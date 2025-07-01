import { Experience } from '../types/experience';

export const experiences: Experience[] = [
	{
		id: 1,
		period: '09/2021 – 11/2024',
		title: 'experience:experiences.1.title',
		company: 'experience:experiences.1.company',
		location: 'experience:experiences.1.location',
		achievements: [
			'experience:experiences.1.achievements.1',
			'experience:experiences.1.achievements.2',
			'experience:experiences.1.achievements.3',
		],
		technologies: ['JavaScript', 'PHP', 'Oracle', 'PL/SQL', 'HTML', 'CSS'],
	},
	{
		id: 2,
		period: '06/2021 – 06/2021',
		title: 'experience:experiences.2.title',
		company: 'experience:experiences.2.company',
		location: 'experience:experiences.2.location',
		achievements: [
			'experience:experiences.2.achievements.1',
			'experience:experiences.2.achievements.2',
		],
		technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
	},
	{
		id: 3,
		period: '08/2018 – 06/2021',
		title: 'experience:experiences.3.title',
		company: 'experience:experiences.3.company',
		location: 'experience:experiences.3.location',
		achievements: [
			'experience:experiences.3.achievements.1',
			'experience:experiences.3.achievements.2',
			'experience:experiences.3.achievements.3',
		],
		technologies: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL', 'SCRUM'],
	},
];
