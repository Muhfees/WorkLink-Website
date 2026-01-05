import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Zap,
  Shield,
  Clock,
  Phone,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

const backgroundImages = [
  {
    src: "/hero-1.jpg",
    alt: "Professional construction worker on building site"
  },
  {
    src: "/hero-2.jpg",
    alt: "Service professional with taxi"
  },
  {
    src: "/hero-3.jpg",
    alt: "Delivery service professional with scooter"
  },
  {
    src: "/hero-4.jpg",
    alt: "Professional workers in warehouse facility"
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    alt: "Professional electrician working on electrical panel with safety equipment"
  }
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
            <Star className="h-4 w-4 mr-2" />
            Experienced Workers. Trusted Services
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Trusted Workers Instantly
            <span className="block text-primary">Across Sri Lanka</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Trusted Local Service Experts – From Quick Fixes to Major Projects. Connecting Skills to Your Doorstep.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm">24/7 Emergency</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm">Warranty Guaranteed</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency Line
            </Button>
          </div>

          {/* Service Area Indicator */}
          <div className="mt-8 text-sm text-gray-300">
            <p>Serving: Nanaimo, Parksville, Courtenay, Campbell River & surrounding areas</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 hidden lg:block">
        <div className="bg-primary/10 backdrop-blur-sm rounded-full p-4 border border-primary/20">
          <Zap className="h-8 w-8 text-primary animate-pulse" />
        </div>
      </div>

      <div className="absolute bottom-1/4 left-10 hidden lg:block">
        <div className="bg-primary/10 backdrop-blur-sm rounded-full p-4 border border-primary/20">
          <Shield className="h-8 w-8 text-primary animate-pulse delay-1000" />
        </div>
      </div>
    </section>
  );
}