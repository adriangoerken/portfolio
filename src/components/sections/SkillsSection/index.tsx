import { getSkillsByCategory } from '../../../data/skillsData';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import SectionHeading from '../../ui/SectionHeading';
import SkillCategory from './SkillCategory';
import Tools from './Tools';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const SkillsSection = () => {
	const { t } = useTranslation();

	const skillCategories = useMemo(
		() => [
			{
				title: t('skills:categories.frontend.name'),
				description: t('skills:categories.frontend.description'),
				skills: getSkillsByCategory().frontend,
				icon: <FaCode />,
			},
			{
				title: t('skills:categories.backend.name'),
				description: t('skills:categories.backend.description'),
				skills: getSkillsByCategory().backend,
				icon: <FaServer />,
			},
			{
				title: t('skills:categories.databases.name'),
				description: t('skills:categories.databases.description'),
				skills: getSkillsByCategory().database,
				icon: <FaDatabase />,
			},
		],
		[]
	);

	return (
		<div aria-labelledby="skills-heading">
			<SectionHeading id="skills-heading">
				{t('skills:heading')}
			</SectionHeading>

			<p className="mb-10 text-center">{t('skills:description')}</p>

			<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skillCategories.map((category) => (
					<li key={category.title}>
						<SkillCategory
							title={category.title}
							description={category.description}
							skills={category.skills}
							icon={category.icon}
						/>
					</li>
				))}
			</ul>

			<Tools />
		</div>
	);
};

export default SkillsSection;
