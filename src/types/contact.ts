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

// Autocomplete for input elements
export type Autocomplete =
	// on/off toggles
	| 'on'
	| 'off'

	// Personal name fields
	| 'name'
	| 'given-name'
	| 'family-name'
	| 'additional-name'
	| 'honorific-prefix'
	| 'honorific-suffix'
	| 'nickname'

	// Account credentials
	| 'username'
	| 'new-password'
	| 'current-password'
	| 'email'

	// Contact numbers
	| 'tel'
	| 'tel-country-code'
	| 'tel-national'
	| 'tel-area-code'
	| 'tel-local'
	| 'tel-extension'

	// Postal address
	| 'street-address'
	| 'address-line1'
	| 'address-line2'
	| 'address-line3'
	| 'postal-code'
	| 'country'
	| 'country-name'

	// Payment details
	| 'cc-name'
	| 'cc-number'
	| 'cc-exp'
	| 'cc-exp-month'
	| 'cc-exp-year'
	| 'cc-csc'
	| 'cc-type'

	// Date of birth & personal
	| 'bday'
	| 'bday-day'
	| 'bday-month'
	| 'bday-year'
	| 'sex'

	// Miscellaneous
	| 'organization'
	| 'organization-title'
	| 'url'
	| 'photo';
