export type PricingPeriod = 'monthly' | 'yearly';

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: PricingFeature[];
  isPopular?: boolean;
  cta: string;
} 