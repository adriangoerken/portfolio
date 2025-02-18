import { useTranslation } from 'react-i18next';
import { SkillProps } from '../../lib/type';
import H2 from '../atoms/H2';
import Grid from '../atoms/Grid';
import Skill from '../molecules/Skill';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animationUtils';

type SkillsSectionProps = {
	sectionSkillsRef: React.RefObject<HTMLElement>;
};

/*
List your technical skills, tools, and technologies (e.g., HTML, CSS, JavaScript, React, Node.js)
Consider using icons or a skill chart to make it visually engaging
*/
const SkillsSection = ({ sectionSkillsRef }: SkillsSectionProps) => {
	const [t] = useTranslation('global');
	/* 
	Skill Complexity Weighting:
		Basic understanding: 25-40%
		Comfortable in most scenarios: 50-70%
		Advanced implementation: 70-90%
		Can architect complex solutions: 90-100%
	*/
	const skills: SkillProps[] = [
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
		{ tech: 'PHP', startDate: { year: 2017, month: 12 }, width: 'w-[70%]' },
		{
			tech: 'MySQL',
			startDate: { year: 2017, month: 12 },
			width: 'w-[70%]',
		},
		{
			tech: 'JavaScript',
			startDate: { year: 2018, month: 1 },
			width: 'w-[80%]',
		},
		{
			tech: 'Oracle PLSQL',
			startDate: { year: 2021, month: 9 },
			width: 'w-[60%]',
		},
		{
			tech: 'Sass',
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
	];

	return (
		<section ref={sectionSkillsRef}>
			<motion.div
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<H2>{t('SkillsSection.title')}</H2>
			</motion.div>

			<Grid>
				{skills.map((skill, index) => (
					<Skill
						key={index}
						tech={skill.tech}
						startDate={skill.startDate}
						width={skill.width}
					/>
				))}
			</Grid>
		</section>
	);
};

export default SkillsSection;
