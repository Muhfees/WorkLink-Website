import React from 'react';
import { ServicesOverview } from './ServicesOverview';
import { WhyChooseUs } from './WhyChooseUs';

export function ServicesPage() {
    return (
        <main>
            {/* Page Header */}
            <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Professional workers ready to serve you across Sri Lanka. From plumbing to delivery, electrical to construction - we connect you with verified, skilled workers for all your service needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <ServicesOverview />

            {/* Why Choose Us */}
            <WhyChooseUs />
        </main>
    );
}
