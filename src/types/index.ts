export type MarketplaceType = 'amazon' | 'flipkart' | 'meesho' | 'multi';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'onboarding' | 'growth' | 'operations' | 'protection';
  deliverables: string[];
}

export interface CorePathCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  actionId: string;
  badge: string;
  accentColor: string;
}

export interface ProductSourcingCategory {
  id: string;
  name: string;
  description: string;
  sampleMoq: string;
  inspectionStandards: string[];
  keyAttributes: string[];
  imagePlaceholderText: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'services' | 'marketplaces' | 'sourcing' | 'academy' | 'consultation';
}
