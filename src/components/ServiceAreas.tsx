import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  MapPin,
  Phone,
  Clock,
  Car,
  ArrowRight
} from 'lucide-react';

export function ServiceAreas() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const serviceAreas = [
    {
      id: 'colombo',
      name: 'Colombo',
      description: 'Our main service hub covering Colombo and surrounding areas',
      responseTime: '30 minutes',
      population: '750,000+',
      services: ['Plumbing', 'Electrical', 'Delivery', 'Taxi', 'Construction', 'Emergency'],
      coordinates: { lat: 6.9271, lng: 79.8612 }
    },
    {
      id: 'kandy',
      name: 'Kandy',
      description: 'Comprehensive services for Kandy and central region',
      responseTime: '45 minutes',
      population: '125,000+',
      services: ['Plumbing', 'Electrical', 'Construction', 'Taxi'],
      coordinates: { lat: 7.2906, lng: 80.6337 }
    },
    {
      id: 'galle',
      name: 'Galle',
      description: 'Serving Galle and southern coastal communities',
      responseTime: '40 minutes',
      population: '100,000+',
      services: ['Plumbing', 'Electrical', 'Delivery', 'Construction'],
      coordinates: { lat: 6.0535, lng: 80.2210 }
    },
    {
      id: 'jaffna',
      name: 'Jaffna',
      description: 'Quality services for Jaffna and northern communities',
      responseTime: '50 minutes',
      population: '88,000+',
      services: ['Plumbing', 'Electrical', 'Taxi', 'Construction'],
      coordinates: { lat: 9.6615, lng: 80.0255 }
    },
    {
      id: 'negombo',
      name: 'Negombo',
      description: 'Serving Negombo and western coastal areas',
      responseTime: '35 minutes',
      population: '142,000+',
      services: ['Plumbing', 'Electrical', 'Delivery', 'Emergency'],
      coordinates: { lat: 7.2008, lng: 79.8358 }
    },
    {
      id: 'matara',
      name: 'Matara',
      description: 'Reliable services for Matara and deep south region',
      responseTime: '45 minutes',
      population: '52,000+',
      services: ['Plumbing', 'Electrical', 'Construction'],
      coordinates: { lat: 5.9549, lng: 80.5550 }
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">
            Service Areas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proudly Serving Across Sri Lanka
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From Colombo to Jaffna, we connect skilled workers with customers across all major cities in Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Real Google Map */}
          <div className="order-2 lg:order-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Service Coverage Map
                </CardTitle>
                <CardDescription>
                  Interactive map showing our service areas across Sri Lanka
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full rounded-lg overflow-hidden" style={{ height: '400px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2027392.5726667654!2d78.9629!3d7.8731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sri Lanka Service Coverage Map"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Areas List */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 gap-4">
              {serviceAreas.map((area) => (
                <Card
                  key={area.id}
                  className={`cursor-pointer transition-all duration-200 ${selectedArea === area.id ? 'border-primary shadow-lg' : 'hover:shadow-md'
                    }`}
                  onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-primary" />
                        {area.name}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {area.population}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{area.responseTime} response</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Car className="h-4 w-4 mr-1" />
                        <span>Mobile service</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {area.services.map((service, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    {selectedArea === area.id && (
                      <div className="mt-4 pt-3 border-t">
                        <Button size="sm" className="w-full">
                          <Phone className="h-4 w-4 mr-2" />
                          Get Quote for {area.name}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Coverage Details */}
        <div className="mt-16 bg-card rounded-lg p-8 border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Complete Sri Lanka Coverage</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're strategically positioned to serve all major cities across Sri Lanka with fast, reliable service connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Fast Response Times</h4>
              <p className="text-sm text-muted-foreground">
                Emergency services available 24/7 with fast response times across all regions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Mobile Service Units</h4>
              <p className="text-sm text-muted-foreground">
                Mobile workers ready with professional tools and equipment
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Verified Workers</h4>
              <p className="text-sm text-muted-foreground">
                All workers are verified and reviewed by the community for quality assurance
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Find Services in Your Area
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}