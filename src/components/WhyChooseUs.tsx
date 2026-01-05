import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import {
  Star,
  Shield,
  Clock,
  Award,
  Users,
  Zap,
  CheckCircle,
  Quote
} from 'lucide-react';

export function WhyChooseUs() {
  const testimonials = [
    {
      name: "Kasun Rajapaksa",
      location: "Colombo",
      rating: 5,
      text: "Excellent service! They fixed our electrical issues quickly and professionally. The team was punctual, clean, and explained everything clearly.",
      service: "Electrical Repair",
      avatar: "KR"
    },
    {
      name: "Mohamed",
      location: "Kandy",
      rating: 5,
      text: "Emergency plumbing call - they came out immediately and fixed our water leak. Couldn't ask for better service!",
      service: "Plumbing Emergency",
      avatar: "TJ"
    },
    {
      name: "Sarankan",
      location: "Jaffna",
      rating: 5,
      text: "Professional delivery service. They handled everything with care and delivered on time. Very satisfied with the quality of service.",
      service: "Delivery Service",
      avatar: "DA"
    }
  ];

  const whyChooseUsFeatures = [
    {
      icon: Award,
      title: "Red Seal Certified",
      description: "All our electricians are Red Seal certified with years of experience",
      color: "text-yellow-600"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your protection and peace of mind",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency response for urgent electrical issues",
      color: "text-red-600"
    },
    {
      icon: CheckCircle,
      title: "Warranty Guaranteed",
      description: "All work comes with our comprehensive warranty guarantee",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Sri Lanka Wide Service",
      description: "Proudly serving communities across Sri Lanka with reliable workers",
      color: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Modern Solutions",
      description: "Using proven techniques and quality tools for superior results",
      color: "text-orange-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Emergency Support", icon: Clock },
    { number: "100%", label: "Customer Satisfaction", icon: Star }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sri Lanka's Trusted Service Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting skilled workers with customers across Sri Lanka for all your service needs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary/20 transition-colors">
              <CardHeader className="pb-2">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-2xl md:text-3xl text-primary">{stat.number}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {whyChooseUsFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">What Our Customers Say</h3>
            <p className="text-muted-foreground">
              Real reviews from satisfied customers across Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {testimonial.location}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.service}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-6 w-6 text-primary/30 mb-2" />
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Certifications & Associations</h3>
            <p className="text-muted-foreground mb-8">
              We maintain the highest quality standards and professionalism
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2">
                <Award className="h-8 w-8 text-primary" />
                <span className="font-semibold">Verified Workers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-primary" />
                <span className="font-semibold">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-8 w-8 text-primary" />
                <span className="font-semibold">Secure Platform</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-primary" />
                <span className="font-semibold">Trusted Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}