import { useTranslation } from 'react-i18next';

type socialLinkProps = {
	href: string;
	ariaLabel: string;
	icon: React.ReactNode;
	className?: string;
};

const SocialLink = ({ href, ariaLabel, icon, className }: socialLinkProps) => {
	const { t } = useTranslation();

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`${ariaLabel} ${t('ariaNewTab')}`}
			className={`p-3 text-white rounded-full transition-all ${className}`}
		>
			{icon}
		</a>
	);
};

export default SocialLink;
