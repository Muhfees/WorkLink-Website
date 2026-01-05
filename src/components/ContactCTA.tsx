import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  ArrowRight,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    serviceType: '',
    description: '',
    urgency: 'normal'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Emergency Hotline',
      description: '24/7 Emergency Service',
      contact: '+94 11 234 5678',
      action: 'Call Now',
      urgent: true
    },
    {
      icon: Phone,
      title: 'General Inquiries',
      description: 'Mon-Fri 8AM-6PM',
      contact: '+94 11 234 5679',
      action: 'Call',
      urgent: false
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Response within 4 hours',
      contact: 'info@worklink.lk',
      action: 'Email',
      urgent: false
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      description: 'Colombo',
      contact: '45 Galle Road, Colombo 03, Sri Lanka',
      action: 'Get Directions',
      urgent: false
    }
  ];

  const serviceTypes = [
    'Plumbing Services',
    'Electrical Services',
    'Delivery Services',
    'Taxi & Transport',
    'Construction Work',
    'Emergency Services',
    'Home Repairs',
    'General Maintenance',
    'Other'
  ];

  const locations = [
    'Colombo',
    'Kandy',
    'Galle',
    'Jaffna',
    'Negombo',
    'Matara',
    'Other Sri Lanka'
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us today for a free quote. Our verified workers are ready to help with all your service needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-primary" />
                Get Your Free Quote
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 2 hours during business hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+94 71 234 5678"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency</Label>
                  <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">
                        <div className="flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
                          Emergency (24/7)
                        </div>
                      </SelectItem>
                      <SelectItem value="urgent">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-orange-500" />
                          Urgent (Same Day)
                        </div>
                      </SelectItem>
                      <SelectItem value="normal">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          Normal (Within 3 Days)
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Please describe your service needs, any issues you're experiencing, or questions you have..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Methods</h3>
              <p className="text-muted-foreground mb-6">
                Choose the best way to reach us. We're here to help with all your service needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className={`group hover:shadow-lg transition-all duration-300 ${method.urgent ? 'border-red-200 bg-red-50/50 dark:bg-red-900/10' : ''
                  }`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${method.urgent ? 'bg-red-500 text-white' : 'bg-primary/10 text-primary'
                          }`}>
                          <method.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{method.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {method.description}
                          </CardDescription>
                        </div>
                      </div>
                      {method.urgent && (
                        <Badge variant="destructive" className="text-xs">
                          24/7
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium mb-3">{method.contact}</p>
                    <Button
                      variant={method.urgent ? "destructive" : "outline"}
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Emergency Only</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span>Emergency Service:</span>
                    <span className="font-medium text-red-600">24/7/365</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}