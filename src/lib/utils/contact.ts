import contactData from '../data/contact.json';

export interface Phone {
	number: string;
	display: string;
	country: string;
	countryCode: string;
}

export interface ContactInfo {
	email: string;
	phones: Phone[];
	whatsapp: {
		number: string;
		display: string;
	};
	social: {
		linkedin: string;
	};
	responseTime: string;
	areaServed: string[];
	availableLanguage: string[];
}

export const contact: ContactInfo = contactData as ContactInfo;

// Helper functions for common use cases
export function getEmail(): string {
	return contact.email;
}

export function getEmailLink(): string {
	return `mailto:${contact.email}`;
}

export function getPhoneByCountry(country: string): Phone | undefined {
	return contact.phones.find((phone) => phone.country === country);
}

export function getPhoneLink(phone: Phone): string {
	return `tel:${phone.number}`;
}

export function getWhatsAppLink(): string {
	return `https://wa.me/${contact.whatsapp.number}`;
}

export function getPrimaryPhone(): Phone {
	return contact.phones[0];
}

export function getPrimaryPhoneForStructuredData(): string {
	// Format: +971-58-561-7895
	const phone = getPrimaryPhone();
	// Remove the + sign, format, then add it back
	const digits = phone.number.replace('+', '');
	const formatted = digits.replace(/(\d{3})(\d{2})(\d{3})(\d{4})/, '$1-$2-$3-$4');
	return `+${formatted}`;
}

