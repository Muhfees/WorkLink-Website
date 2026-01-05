import React from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Plumbing Services', href: '#plumbing' },
    { name: 'Electrical Services', href: '#electrical' },
    { name: 'Delivery Services', href: '#delivery' },
    { name: 'Taxi & Transport', href: '#taxi' },
    { name: 'Construction Work', href: '#construction' },
    { name: 'Emergency Services', href: '#emergency' }
  ];

  const serviceAreas = [
    { name: 'Colombo', href: '#colombo' },
    { name: 'Kandy', href: '#kandy' },
    { name: 'Galle', href: '#galle' },
    { name: 'Jaffna', href: '#jaffna' },
    { name: 'Negombo', href: '#negombo' },
    { name: 'Matara', href: '#matara' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Worklink</span>
            </div>
            <p className="text-sm text-gray-300">
              Your trusted service marketplace in Sri Lanka. Connecting skilled workers with customers for all your service needs.
            </p>

            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>45 Galle Road, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>+94 11 234 5678</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>info@worklink.com</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <a
                    href={area.href}
                    className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                <span className="text-primary font-medium">24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <p>&copy; 2024 Worklink. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>
        </div>

        {/* Platform Info */}
        <div className="mt-8 p-4 bg-white/5 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-gray-300">
              <span className="font-medium">Verified Workers:</span> Quality Guaranteed |
              <span className="font-medium ml-2">Secure:</span> Safe Platform
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-gray-300">Trusted Community</span>
              <span className="text-gray-300">24/7 Support</span>
              <span className="text-gray-300">Sri Lanka Wide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}