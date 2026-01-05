import React from 'react';
import { Hero } from './Hero';
import { ServicesOverview } from './ServicesOverview';
import { WhyChooseUs } from './WhyChooseUs';
import { ServiceAreas } from './ServiceAreas';
import { ContactCTA } from './ContactCTA';

export function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <ServiceAreas />
      <ContactCTA />
    </main>
  );
}