import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Link } from './Router';
import {
  Wrench,
  Zap,
  Truck,
  Car,
  HardHat,
  Lightbulb,
  Package,
  ArrowRight,
  CheckCircle,
  Sun,
  Battery
} from 'lucide-react';

export function ServicesOverview() {
  const services = [
    {
      id: 'plumbing',
      title: 'Plumbing',
      description: 'Leak-free solutions, upgrades, and maintenance for your home and business.',
      icon: Wrench,
      color: 'bg-primary',
      shadowColor: 'hover:shadow-[0_8px_25px_rgba(191,171,57,0.15)]',
      features: ['Repairs & Installations', 'Drain Cleaning', 'Water Heater Services', 'Emergency Plumbing'],
      badge: '70 PSI',
      href: '/plumbing',
      altText: 'Plumbing services repairs installations maintenance'
    },
    {
      id: 'electrical',
      title: 'Electrical & Electronic',
      description: 'Advanced wiring, repairs, and tech integration for modern needs.',
      icon: Zap,
      secondaryIcon: Lightbulb,
      color: 'bg-primary',
      shadowColor: 'hover:shadow-[0_8px_25px_rgba(191,171,57,0.15)]',
      features: ['Wiring & Rewiring', 'Panel Upgrades', 'Smart Home Setup', 'Device Repairs'],
      badge: '260 Volts',
      href: '/electrical',
      altText: 'Electrical and electronic services wiring repairs tech integration'
    },
    {
      id: 'delivery',
      title: 'Delivery',
      description: 'Fast, secure, and reliable transport for all your items.',
      icon: Truck,
      secondaryIcon: Package,
      color: 'bg-primary',
      shadowColor: 'hover:shadow-[0_8px_25px_rgba(191,171,57,0.2)]',
      borderHighlight: true,
      features: ['Same-Day Delivery', 'Courier Services', 'Parcel & Freight', 'Tracked Shipping'],
      badge: '140 Speed (km/h)',
      href: '/delivery',
      altText: 'Delivery services fast transport courier shipping'
    },
    {
      id: 'taxi',
      title: 'Taxi Driver',
      description: 'Safe, comfortable, and punctual rides across the city.',
      icon: Car,
      color: 'bg-primary',
      shadowColor: 'hover:shadow-[0_8px_25px_rgba(191,171,57,0.15)]',
      features: ['Airport Transfers', 'City Rides', '24/7 Service', 'Corporate Travel'],
      badge: '90 Speed (km/h)',
      href: '/taxi',
      altText: 'Taxi driver services safe rides transportation'
    },
    {
      id: 'construction',
      title: 'Construction Work',
      description: 'Building and renovating with quality and precision.',
      icon: HardHat,
      color: 'bg-primary',
      shadowColor: 'hover:shadow-[0_8px_25px_rgba(191,171,57,0.15)]',
      features: ['Renovations', 'New Builds', 'Structural Repairs', 'Project Management'],
      badge: '180 Load (kg/m²)',
      href: '/construction',
      altText: 'Construction work building renovations quality precision'
    },
    {
      id: 'emergency',
      title: 'Emergency Services',
      description: '24/7 critical support, repairs, and recovery when you need it most.',
      icon: Sun,
      secondaryIcon: Battery,
      color: 'bg-primary',
      shadowColor: 'hover:shadow-[0_8px_25px_rgba(191,171,57,0.15)]',
      features: ['24/7 Response', 'Storm Recovery', 'Safety Inspections', 'Rapid Restoration'],
      badge: '100 Intensity',
      href: '/emergency',
      altText: 'Emergency services 24/7 critical support repairs recovery'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Our Services – Reliable Urban Support Across All Needs.
          </h2>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`service-card hover-lift group bg-muted/40 border-2 ${service.borderHighlight ? 'border-primary' : 'border-muted'
                } hover:border-primary/50 ${service.shadowColor} transition-all duration-500`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`icon-container p-2.5 rounded-lg ${service.color} text-background`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    {service.secondaryIcon && (
                      <div className={`icon-container p-2.5 rounded-lg ${service.color} text-background`}>
                        <service.secondaryIcon className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs bg-background border-primary/30 text-foreground">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors font-bold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <CheckCircle className="h-3.5 w-3.5 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.href}>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>

              {/* Hidden alt text for SEO */}
              <span className="sr-only">{service.altText}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}