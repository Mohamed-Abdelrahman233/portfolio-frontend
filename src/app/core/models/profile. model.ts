export interface IProfile {
  _id?: string;
  name: string;
  jobTitle: string;
  heroTagline: string;
  aboutText: string;
  cvUrl: string;
  image: string;
  whatsapp?: string;
  linkedin: string;
  github: string;
  email: string;
  phone?: string;
  location?: string;
  isAvailable?: boolean;
  availabilityText?: string;
  contactHeading?: string;
  contactSubtext?: string;
}
