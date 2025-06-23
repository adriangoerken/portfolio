import HeroSection from '../components/sections/HeroSection';

const IndexPage = () => {
	return (
		<>
			<HeroSection />
			{/* 
				2. Professional Summary Section:
				3-4 sentence professional statement highlighting your key strengths
				Focus on outcomes and business value ("I build solutions that..." rather than just "I use technologies...")
				Include keywords relevant to job descriptions you're targeting
				*/}
			{/* 
				3. Experience Section:
				For each role:
					Clear timeline
					Company and position
					Quantifiable achievements (metrics, percentages, outcomes)
					Technologies utilized
				Consider a visual timeline format
				 */}
			{/* 
				4. Skills Section:
				Group skills by category (Frontend, Backend, DevOps, etc.)
				Consider replacing progress bars with skill tags/badges with experience years
				Add context about how you've applied key skills
				*/}
			{/* 
				5. Projects Section:
				Select 3-4 of your most impressive projects
				For each project, highlight:
				Problem solved
				Your specific contribution
				Technologies used
				Outcomes/results
				Screenshot/demo
				Make links to live demos and code repositories prominent
				 */}
			{/* 
				6. Contact Section 
				Keep your current contact information
				Consider adding a simple contact form
				Highlight preferred contact method
				*/}
			{/* 
				Responsive design: Ensure perfect viewing on mobile devices as many recruiters check portfolios on phones
				
				Scannable content: Use bullet points, headings, and short paragraphs to make content skimmable
				
				Technology integration:
				Consider adding a resume download button
				Keep the language toggle since you support multiple languages
				
				Navigation improvements:
				Consider sticky navigation with section highlights
				Add a "back to top" button for longer scrolling
				
				Performance optimization:
				Continue using your ImageLoader component for progressive loading
				Consider implementing lazy loading for project images
				 */}
		</>
	);
};

export default IndexPage;
