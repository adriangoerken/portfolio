const skills = [
	{
		tech: 'HTML5',
		startDate: { year: 2017, month: 11 },
		width: 'w-[100%]',
	},
	{
		tech: 'CSS3',
		startDate: { year: 2017, month: 11 },
		width: 'w-[90%]',
	},
	{
		tech: 'PHP',
		startDate: { year: 2017, month: 12 },
		width: 'w-[70%]',
	},
	{
		tech: 'MySQL',
		startDate: { year: 2017, month: 12 },
		width: 'w-[70%]',
	},
	{
		tech: 'JSON',
		startDate: { year: 2017, month: 12 },
		width: 'w-[100%]',
	},
	{
		tech: 'JavaScript',
		startDate: { year: 2018, month: 1 },
		width: 'w-[80%]',
	},
	{
		tech: 'Oracle PL/SQL',
		startDate: { year: 2021, month: 9 },
		width: 'w-[60%]',
	},
	{
		tech: 'SCSS',
		startDate: { year: 2024, month: 10 },
		width: 'w-[70%]',
	},
	{
		tech: 'React',
		startDate: { year: 2024, month: 9 },
		width: 'w-[40%]',
	},
	{
		tech: 'Tailwind CSS',
		startDate: { year: 2024, month: 10 },
		width: 'w-[90%]',
	},
	{
		tech: 'TypeScript',
		startDate: { year: 2025, month: 1 },
		width: 'w-[80%]',
	},
	{
		tech: 'Vue',
		startDate: { year: 2025, month: 5 },
		width: 'w-[30%]',
	},
];

export const getSkillsByCategory = () => {
	const frontendSkills = skills.filter((skill) =>
		[
			'HTML5',
			'CSS3',
			'JavaScript',
			'SCSS',
			'React',
			'Vue',
			'Tailwind CSS',
			'TypeScript',
		].includes(skill.tech)
	);

	const backendSkills = skills.filter((skill) =>
		['PHP', 'JSON'].includes(skill.tech)
	);

	const databaseSkills = skills.filter((skill) =>
		['MySQL', 'Oracle PL/SQL'].includes(skill.tech)
	);

	return {
		frontend: frontendSkills,
		backend: backendSkills,
		database: databaseSkills,
	};
};
