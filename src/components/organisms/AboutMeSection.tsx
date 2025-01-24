import H2 from '../atoms/H2';

type AboutMeSectionProps = {
	sectionAboutRef: React.RefObject<HTMLElement>;
};
/*
A more detailed introduction about yourself, your background, and your journey into web development
A summary of your skills and expertise
A personal touch (e.g., hobbies, interests, or a brief story)
*/
const AboutMeSection = ({ sectionAboutRef }: AboutMeSectionProps) => {
	return (
		<section ref={sectionAboutRef}>
			<H2>About Me</H2>
			<div className="max-w-prose justify-self-center">
				<p className="mb-4">
					Hi, I'm Adrian Goerken, a Full Stack Web Developer with 5
					years of experience. My passion for web development comes
					from solving complex problems and creating impactful
					solutions that make a difference in people's lives.
				</p>
				<p className="mb-4">
					After gaining extensive experience developing warehouse
					management systems, I've transitioned to freelancing, where
					I build custom web solutions. My technical toolkit includes
					React, TypeScript, and Tailwind CSS for creating responsive
					user interfaces, while I handle server-side operations with
					PHP and MySQL, implementing secure authentication through
					JWTs.
				</p>
				<p>
					When I'm not coding, you'll find me on the soccer field,
					following football matches, or diving into a good book. I
					believe maintaining interests outside of tech helps bring
					fresh perspectives to problem-solving in development.
				</p>
			</div>
		</section>
	);
};

export default AboutMeSection;
