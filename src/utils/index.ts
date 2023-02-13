import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const defaultValues = {
  fullName: 'John Doe',
  email: 'john@acme.com',
  pronouns: 'He / Him',
  role: 'Marketing Expert',
  phoneNumber: '+1 234 567 890',
  website: 'https://acme.com',
  profilePicture:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=40',

  company: 'Acme, Inc.',
  companyWebsite: 'https://acme.com',
  companyLogo: '',

  twitter: '',
  facebook: '',
  linkedin: '',
  instagram: '',
  ctaColor: '#02558A',
};
