import { ReactNode } from 'react';

// Base contact interface
interface BaseContact {
	icon: ReactNode;
	label: string;
	value: string;
	href: string;
}

// Primary contact extends base with isPrimary flag
export interface PrimaryContact extends BaseContact {
	isPrimary: boolean;
}

// Professional and social networks use the base structure
export type NetworkContact = BaseContact;
