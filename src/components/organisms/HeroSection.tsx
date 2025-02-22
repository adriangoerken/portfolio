import Button from '../atoms/Button';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Images } from '../../config/imgUrls';
import {
	fadeInScale,
	fadeInUp,
	staggerChildren,
} from '../../utils/animationUtils';
import ImageLoader from '../atoms/ImageLoader';

type HeroSectionProps = {
	sectionHeroRef: React.RefObject<HTMLElement>;
	sectionProjectsRef: React.RefObject<HTMLElement>;
	scrollToSection: (elementRef: React.RefObject<HTMLElement>) => void;
};

/*
A professional photo or a creative illustration of yourself
A brief, impactful introduction (e.g., “Hi, I'm [Your Name], a passionate web developer specializing in creating dynamic and responsive websites.”)
Call to Action (e.g., “Explore My Work” button)
*/
const HeroSection = ({
	sectionHeroRef,
	sectionProjectsRef,
	scrollToSection,
}: HeroSectionProps) => {
	const [t] = useTranslation('global');

	return (
		<motion.section
			ref={sectionHeroRef}
			initial="hidden"
			animate="visible"
			className="max-w-[1488px] mx-auto flex flex-col md:flex-row justify-between"
		>
			{/* Left Column */}
			<motion.div
				variants={staggerChildren}
				className="flex flex-col items-center md:items-start gap-6 md:self-center md:w-[744px] mr-4"
			>
				<motion.h1
					variants={fadeInUp}
					className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center md:text-start"
				>
					<motion.span variants={fadeInUp} className="inline-block">
						{t('HeroSection.title.greeting')}
					</motion.span>
					<motion.span variants={fadeInUp} className="inline-block">
						{t('HeroSection.title.intro')}
						<motion.span
							variants={fadeInUp}
							className="text-blue-700"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{t('HeroSection.title.name')}
						</motion.span>
						.
					</motion.span>
				</motion.h1>

				<motion.div
					variants={staggerChildren}
					className="flex flex-col gap-3"
				>
					<motion.p variants={fadeInUp}>
						{t('HeroSection.messageOne')}
					</motion.p>
					<motion.p variants={fadeInUp}>
						{t('HeroSection.messageTwo')}
					</motion.p>
					<motion.p variants={fadeInUp} className="italic">
						{t('HeroSection.messageThree')}
					</motion.p>
				</motion.div>

				<motion.div
					variants={fadeInUp}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Button onClick={() => scrollToSection(sectionProjectsRef)}>
						{t('HeroSection.btnCTA')}
					</Button>
				</motion.div>
			</motion.div>

			{/* Right Column */}
			<motion.div
				variants={fadeInScale}
				className="flex justify-center items-center mt-8 md:mt-0"
			>
				<motion.div
					className="relative h-80 w-80 lg:h-96 lg:w-96"
					whileHover={{ scale: 1.02 }}
					transition={{ type: 'spring', bounce: 0.4 }}
				>
					<ImageLoader
						src={Images.portrait}
						alt={t('HeroSection.imgAlt')}
						className="object-cover object-custom-top rounded-full h-full w-full"
					/>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default HeroSection;
