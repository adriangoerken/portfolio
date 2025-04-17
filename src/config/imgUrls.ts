import { ImageUrls, TechIconsType, ProjectThumbnailsType } from '../lib/type';
import { IMGUR_BASE_URL } from './constants';

export const Images: ImageUrls = {
	portrait: `${IMGUR_BASE_URL}/ayBZBpI.png`,
};

export const TechIcons: TechIconsType = {
	css3: `${IMGUR_BASE_URL}/INl02vY.png`,
	html5: `${IMGUR_BASE_URL}/uQogfHb.png`,
	javascript: `${IMGUR_BASE_URL}/lD862pj.png`,
	mysql: `${IMGUR_BASE_URL}/RQp4mmi.png`,
	oracle: `${IMGUR_BASE_URL}/Ak9QJY0.png`,
	php: `${IMGUR_BASE_URL}/IuxEEte.png`,
	react: `${IMGUR_BASE_URL}/SYatXlN.png`,
	sass: `${IMGUR_BASE_URL}/TQFf6AV.png`,
	tailwind: `${IMGUR_BASE_URL}/pbU40uy.png`,
	typescript: `${IMGUR_BASE_URL}/CwoWAHF.png`,
};

export const ProjectThumbnails: ProjectThumbnailsType = {
	en: {
		tools: `${IMGUR_BASE_URL}/myZNjjD.png`,
		portfolio: `${IMGUR_BASE_URL}/TdzPyVB.png`,
		tasks: `${IMGUR_BASE_URL}/cXTP92a.png`,
		restaurant: `${IMGUR_BASE_URL}/KA1DcDK.png`,
	},
	de: {
		tools: `${IMGUR_BASE_URL}/LpmZsAZ.png`,
		portfolio: `${IMGUR_BASE_URL}/NGMwu9V.png`,
		tasks: `${IMGUR_BASE_URL}/GXzVlIA.png`,
		restaurant: `${IMGUR_BASE_URL}/KA1DcDK.png`,
	},
};
