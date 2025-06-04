import { PricingPlan } from '@/types/pricing';

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Perfect for side projects and small teams',
    price: {
      monthly: 9,
      yearly: 86,
    },
    features: [
      { name: 'Up to 5 projects', included: true },
      { name: 'Up to 10 team members', included: true },
      { name: 'Basic analytics', included: true },
      { name: '24/7 support', included: false },
      { name: 'Custom domain', included: false },
      { name: 'Advanced security', included: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    description: 'Best for growing businesses',
    price: {
      monthly: 29,
      yearly: 278,
    },
    features: [
      { name: 'Unlimited projects', included: true },
      { name: 'Unlimited team members', included: true },
      { name: 'Advanced analytics', included: true },
      { name: '24/7 priority support', included: true },
      { name: 'Custom domain', included: true },
      { name: 'Advanced security', included: false },
    ],
    cta: 'Start Free Trial',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with advanced needs',
    price: {
      monthly: 99,
      yearly: 950,
    },
    features: [
      { name: 'Unlimited projects', included: true },
      { name: 'Unlimited team members', included: true },
      { name: 'Advanced analytics', included: true },
      { name: '24/7 priority support', included: true },
      { name: 'Custom domain', included: true },
      { name: 'Advanced security', included: true },
    ],
    cta: 'Contact Sales',
  },
]; 