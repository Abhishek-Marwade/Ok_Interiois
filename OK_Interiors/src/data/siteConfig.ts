/**
 * OK INTERIORS - Central Brand & Site Configuration
 * 
 * NOTE FOR BUSINESS OWNER:
 * Update any verified contact details, phone numbers, or social handles
 * directly in this configuration file. All sections of the website
 * read dynamically from here.
 */

export interface SiteConfig {
  brandName: string;
  tagline: string;
  subTagline: string;
  description: string;
  logo: {
    text: string;
    subtext: string;
  };
  contact: {
    // [PLACEHOLDER - Replace with verified business WhatsApp / phone number]
    phone: string;
    phoneDisplay: string;
    // [PLACEHOLDER - Verified WhatsApp number in international format e.g. +91XXXXXXXXXX]
    whatsappNumber: string;
    // [PLACEHOLDER - Replace with verified business email]
    email: string;
    // [PLACEHOLDER - Replace with verified studio address]
    address: string;
    city: string;
    hours: string;
    // Set to true once verified by the owner
    isContactVerified: boolean;
  };
  social: {
    instagram: string;
    instagramHandle: string;
    // Optional additional channels
    pinterest?: string;
    linkedin?: string;
  };
  navigation: Array<{
    name: string;
    href: string;
  }>;
  stats: Array<{
    label: string;
    value: string;
  }>;
}

export const siteConfig: SiteConfig = {
  brandName: "OK Interiors",
  tagline: "SPACES THAT MOVE YOU",
  subTagline: "Spaces Designed Around You.",
  description: "Thoughtfully designed interiors that bring beauty, functionality, and personality into every space.",
  logo: {
    text: "OK",
    subtext: "INTERIORS"
  },
  contact: {
    phone: "+919876543210", // Mark for replacement
    phoneDisplay: "+91 (0) 98765-43210",
    whatsappNumber: "+919876543210", // Mark for replacement
    email: "hello@okinteriors.design", // Mark for replacement
    address: "Bespoke Design Studio, Luxury Avenue", // Mark for replacement
    city: "New Delhi & NCR, India",
    hours: "Monday – Saturday: 10:00 AM – 7:00 PM (By Appointment)",
    isContactVerified: false, // Flag clearly identifying sample/pending status
  },
  social: {
    instagram: "https://www.instagram.com/ok_interiors/",
    instagramHandle: "@ok_interiors",
    pinterest: "https://pinterest.com/ok_interiors",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  stats: [
    { label: "Bespoke Design Ethos", value: "100%" },
    { label: "Material Sourcing", value: "Artisanal" },
    { label: "Precision Craft", value: "Turnkey" },
    { label: "Design Vision", value: "Timeless" },
  ]
};

/**
 * Generates an encoded WhatsApp deep-link with pre-filled enquiry message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const defaultMsg = `Hello OK Interiors, I discovered your portfolio website and would like to schedule a design consultation for my space.`;
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${number}?text=${text}`;
}
