/**
 * Input validation utilities for consultation and sourcing inquiry forms.
 */

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  marketplace: string;
  currentStage: string;
  primaryGoal: string;
  notes?: string;
}

export interface SourcingQuoteFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  category: string;
  orderQuantity: string;
  requirements?: string;
  consent: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  // Accepts 10-15 digits, allowing optional +, spaces, dashes, or parentheses
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  return cleaned.length >= 8 && cleaned.length <= 15 && /^\d+$/.test(cleaned);
}

export function validateConsultationForm(data: Partial<ConsultationFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters long.';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please provide a valid business email address.';
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    errors.phone = 'Please provide a valid contact phone number (at least 8 digits).';
  }

  if (!data.marketplace || data.marketplace.trim() === '') {
    errors.marketplace = 'Please select a primary marketplace focus.';
  }

  if (!data.currentStage || data.currentStage.trim() === '') {
    errors.currentStage = 'Please indicate your current e-commerce stage.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateSourcingQuoteForm(data: Partial<SourcingQuoteFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  }

  if (!data.businessName || data.businessName.trim().length < 2) {
    errors.businessName = 'Business or seller brand name is required.';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    errors.phone = 'Please provide a valid contact number.';
  }

  if (!data.category || data.category.trim() === '') {
    errors.category = 'Please choose a product category of interest.';
  }

  if (!data.orderQuantity || data.orderQuantity.trim() === '') {
    errors.orderQuantity = 'Please specify estimated order quantity.';
  }

  if (data.consent !== true) {
    errors.consent = 'You must confirm consent for our sourcing team to contact you.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
