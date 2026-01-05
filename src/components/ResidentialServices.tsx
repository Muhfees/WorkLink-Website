import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { InteractiveTools } from './InteractiveTools';
import {
  Home,
  Zap,
  Lightbulb,
  Shield,
  Gauge,
  Wrench,
  Settings,
  ThermometerSun,
  AlertCircle,
  Battery,
  Search,
  Calculator,
  ArrowRight,
  Star,
  CheckCircle,
  Play,
  Pause,
  RotateCcw,
  Eye,
  DollarSign,
  Leaf,
  Quote,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

export function ResidentialServices() {
  const [selectedService, setSelectedService] = useState('wiring');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: '',
    timeline: ''
  });

  const residentialServices = [
    {
      id: 'wiring',
      title: 'New Construction & Wiring',
      searchVolume: '90 vol',
      icon: Zap,
      color: 'bg-blue-500',
      description: 'Complete electrical wiring for new homes and additions',
      features: [
        'New home electrical installation',
        'Room additions and extensions',
        'Basement finishing electrical',
        'Garage and workshop wiring',
        'Outdoor electrical installations'
      ],
      benefits: [
        'Code-compliant installations',
        'Energy-efficient designs',
        'Future-proofed capacity',
        'Smart home ready infrastructure'
      ],
      tools: {
        calculator: 'Wire gauge calculator',
        simulator: '3D home layout viewer',
        estimator: 'Real-time cost estimation'
      }
    },
    {
      id: 'renovations',
      title: 'Renovations & Rewiring',
      searchVolume: '30 vol',
      icon: Wrench,
      color: 'bg-green-500',
      description: 'Electrical updates for home renovations and rewiring projects',
      features: [
        'Knob and tube replacement',
        'Aluminum wiring updates',
        'Kitchen renovation electrical',
        'Bathroom electrical upgrades',
        'Whole house rewiring'
      ],
      benefits: [
        'Improved safety and reliability',
        'Increased home value',
        'Modern electrical capacity',
        'Insurance compliance'
      ],
      tools: {
        calculator: 'Rewiring cost calculator',
        simulator: 'Before/after visualizer',
        estimator: 'Timeline estimation tool'
      }
    },
    {
      id: 'panels',
      title: 'Service Panel Upgrades',
      searchVolume: '110 vol',
      icon: Gauge,
      color: 'bg-purple-500',
      description: 'Electrical panel upgrades and service capacity increases',
      features: [
        '100A to 200A service upgrades',
        'Panel replacement and modernization',
        'Sub-panel installations',
        'GFCI and AFCI protection',
        'Surge protection systems'
      ],
      benefits: [
        'Increased electrical capacity',
        'Enhanced safety features',
        'Modern circuit protection',
        'Reduced fire risk'
      ],
      tools: {
        calculator: 'Amperage calculator',
        simulator: '3D panel configurator',
        estimator: 'Upgrade cost calculator'
      }
    },
    {
      id: 'lighting',
      title: 'Lighting Installations & Upgrades',
      searchVolume: '90 vol',
      icon: Lightbulb,
      color: 'bg-yellow-500',
      description: 'Interior and exterior lighting solutions',
      features: [
        'LED lighting installations',
        'Recessed lighting design',
        'Landscape lighting systems',
        'Security lighting',
        'Decorative and accent lighting'
      ],
      benefits: [
        'Energy savings up to 80%',
        'Enhanced home aesthetics',
        'Improved security',
        'Long-lasting LED technology'
      ],
      tools: {
        calculator: 'Energy savings calculator',
        simulator: 'Lighting design tool',
        estimator: 'LED conversion calculator'
      }
    },
    {
      id: 'automation',
      title: 'Home Automation & Smart Systems',
      searchVolume: '20 vol',
      icon: Settings,
      color: 'bg-indigo-500',
      description: 'Smart home technology and automation systems',
      features: [
        'Smart switches and dimmers',
        'Automated lighting controls',
        'Smart electrical outlets',
        'Home energy monitoring',
        'Voice control integration'
      ],
      benefits: [
        'Enhanced convenience',
        'Energy efficiency',
        'Remote control capabilities',
        'Increased home value'
      ],
      tools: {
        calculator: 'Smart home ROI calculator',
        simulator: 'Home automation planner',
        estimator: 'System cost estimator'
      }
    },
    {
      id: 'hvac',
      title: 'Heating & Cooling Electrical',
      searchVolume: '50 vol',
      icon: ThermometerSun,
      color: 'bg-orange-500',
      description: 'Electrical work for HVAC systems and climate control',
      features: [
        'Furnace and AC electrical connections',
        'Heat pump installations',
        'Thermostat wiring and upgrades',
        'Ventilation fan installations',
        'Radiant heating systems'
      ],
      benefits: [
        'Optimized HVAC performance',
        'Energy efficiency improvements',
        'Precise climate control',
        'Reduced utility costs'
      ],
      tools: {
        calculator: 'HVAC load calculator',
        simulator: 'Energy efficiency analyzer',
        estimator: 'Installation cost calculator'
      }
    },
    {
      id: 'safety',
      title: 'Security & Safety Systems',
      searchVolume: '70 vol',
      icon: Shield,
      color: 'bg-red-500',
      description: 'Electrical safety and security system installations',
      features: [
        'Security system wiring',
        'Smoke and CO detector installation',
        'Emergency lighting systems',
        'Backup power solutions',
        'GFCI outlet installations'
      ],
      benefits: [
        'Enhanced home security',
        'Life safety protection',
        'Code compliance',
        'Peace of mind'
      ],
      tools: {
        calculator: 'Safety assessment tool',
        simulator: 'Security coverage planner',
        estimator: 'System cost calculator'
      }
    },
    {
      id: 'appliances',
      title: 'Appliance & Specialty Installations',
      searchVolume: '150 vol',
      icon: Battery,
      color: 'bg-teal-500',
      description: 'Electrical connections for appliances and specialty equipment',
      features: [
        'Hot tub and spa electrical',
        'Pool equipment wiring',
        'Electric vehicle charging prep',
        'Generator connections',
        'High-voltage appliance hookups'
      ],
      benefits: [
        'Safe appliance operation',
        'Optimal performance',
        'Code compliance',
        'Professional installation'
      ],
      tools: {
        calculator: 'Load requirement calculator',
        simulator: 'Installation planner',
        estimator: 'Project cost calculator'
      }
    },
    {
      id: 'repairs',
      title: 'Repairs & Troubleshooting',
      searchVolume: '70 vol',
      icon: AlertCircle,
      color: 'bg-gray-500',
      description: 'Electrical repairs and problem diagnosis',
      features: [
        'Circuit breaker repairs',
        'Outlet and switch replacement',
        'Wiring repairs and updates',
        'Electrical troubleshooting',
        'Emergency electrical repairs'
      ],
      benefits: [
        'Quick problem resolution',
        'Restored electrical function',
        'Safety improvements',
        '24/7 emergency service'
      ],
      tools: {
        calculator: 'Diagnostic tool',
        simulator: 'Problem identifier',
        estimator: 'Repair cost calculator'
      }
    },
    {
      id: 'efficiency',
      title: 'Energy Efficiency & Audits',
      searchVolume: '100 vol',
      icon: Leaf,
      color: 'bg-green-600',
      description: 'Energy efficiency improvements and electrical audits',
      features: [
        'Electrical energy audits',
        'Power factor correction',
        'LED retrofit projects',
        'Smart meter installations',
        'Energy monitoring systems'
      ],
      benefits: [
        'Reduced energy costs',
        'Environmental benefits',
        'Utility rebates available',
        'Improved power quality'
      ],
      tools: {
        calculator: 'Energy savings calculator',
        simulator: 'Efficiency analyzer',
        estimator: 'ROI calculator'
      }
    },
    {
      id: 'inspections',
      title: 'Safety Inspections & Testing',
      searchVolume: '110 vol',
      icon: Search,
      color: 'bg-blue-600',
      description: 'Comprehensive electrical inspections and testing services',
      features: [
        'Home electrical inspections',
        'Code compliance testing',
        'Insurance inspections',
        'Pre-purchase inspections',
        'Electrical system certification'
      ],
      benefits: [
        'Safety assurance',
        'Code compliance verification',
        'Insurance requirements met',
        'Professional certification'
      ],
      tools: {
        calculator: 'Inspection checklist',
        simulator: 'Compliance analyzer',
        estimator: 'Inspection cost calculator'
      }
    }
  ];

  const testimonials = [
    {
      name: "Sarath Perera",
      location: "Colombo",
      service: "Electrical Services",
      rating: 5,
      text: "Outstanding service! The electrician was professional and fixed all our wiring issues quickly. Highly recommended!",
      avatar: "SP"
    },
    {
      name: "Nimal Fernando",
      location: "Kandy",
      service: "Plumbing Repairs",
      rating: 5,
      text: "Excellent plumbing work! Fixed our water heater and pipes. The team was respectful and the quality exceeded expectations.",
      avatar: "NF"
    },
    {
      name: "Amara Silva",
      location: "Galle",
      service: "Construction Work",
      rating: 5,
      text: "Amazing construction service! They renovated our home beautifully. Professional workers and great attention to detail.",
      avatar: "AS"
    }
  ];

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    console.log('Quote form submitted:', quoteFormData);
  };

  const handleQuoteInputChange = (field, value) => {
    setQuoteFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#home">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#services">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Residential Electrical</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Residential electrical services Vancouver Island - electrician upgrading home electrical panel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Badge */}
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
              <Home className="h-4 w-4 mr-2" />
              Residential Electrical Services
            </Badge>

            {/* Main Heading with Kinetic Typography */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block kinetic-text animate-energy-flow">Residential Electrical</span>
              <span className="block text-primary animate-pulse-glow delay-300">Solutions</span>
              <span className="block text-lg md:text-xl font-normal mt-4 animate-fade-in delay-600">
                Safe, Efficient Power for Your Vancouver Island Home
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              From New Wiring to Smart Upgrades – Code-Compliant Expertise for Every Home
            </p>

            {/* AI-Enhanced CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 animate-pulse"
              >
                Get Free Residential Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6"
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              >
                {isVideoPlaying ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
                View Services Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Code Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-sm">5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Intro Section */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Comprehensive Residential Electrical Services
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Tailored for Your Home Needs – Reduce energy bills with professional audits while ensuring safety, personalized for your lifestyle.
                </p>
              </div>

              {/* Bento Grid Teaser */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card className="service-card hover-lift group border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="icon-container bg-blue-500 text-white p-3 rounded-lg">
                        <Zap className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle>Wiring & Installation</CardTitle>
                        <CardDescription>New construction and renovations</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 animate-pulse-glow" />
                        Code-compliant installations
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 animate-pulse-glow" />
                        Future-proofed capacity
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="service-card hover-lift group border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="icon-container bg-purple-500 text-white p-3 rounded-lg">
                        <Gauge className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle>Panel Upgrades</CardTitle>
                        <CardDescription>Service capacity increases</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 animate-pulse-glow" />
                        100A to 200A upgrades
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 animate-pulse-glow" />
                        Modern safety features
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="service-card hover-lift group border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="icon-container bg-red-500 text-white p-3 rounded-lg">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle>Safety & Inspections</CardTitle>
                        <CardDescription>Compliance and protection</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 animate-pulse-glow" />
                        Professional inspections
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 animate-pulse-glow" />
                        Safety certifications
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="service-card hover-lift group border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="icon-container bg-indigo-500 text-white p-3 rounded-lg">
                        <Settings className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle>Smart Automation</CardTitle>
                        <CardDescription>Modern home technology</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 animate-pulse-glow" />
                        Voice control integration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 animate-pulse-glow" />
                        Energy monitoring
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Key Benefits */}
              <div className="bg-muted/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Residential Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="h-8 w-8 text-primary animate-pulse" />
                    </div>
                    <h4 className="font-semibold mb-2">Energy-saving upgrades</h4>
                    <p className="text-sm text-muted-foreground">Save up to 30% on energy bills</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-primary animate-pulse delay-300" />
                    </div>
                    <h4 className="font-semibold mb-2">Safety first approach</h4>
                    <p className="text-sm text-muted-foreground">Code compliant installations</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-primary animate-pulse delay-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Quality guaranteed</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive warranties</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Subsections */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Residential Services</h2>
                <p className="text-muted-foreground">
                  Explore our comprehensive range of residential electrical services
                </p>
              </div>

              {/* Service Tabs */}
              <Tabs defaultValue="wiring" className="w-full">
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                  <TabsTrigger value="wiring" className="text-xs">Wiring</TabsTrigger>
                  <TabsTrigger value="panels" className="text-xs">Panels</TabsTrigger>
                  <TabsTrigger value="lighting" className="text-xs">Lighting</TabsTrigger>
                  <TabsTrigger value="automation" className="text-xs">Smart</TabsTrigger>
                  <TabsTrigger value="safety" className="text-xs">Safety</TabsTrigger>
                  <TabsTrigger value="efficiency" className="text-xs">Efficiency</TabsTrigger>
                </TabsList>

                {residentialServices.slice(0, 6).map((service) => (
                  <TabsContent key={service.id} value={service.id}>
                    <Card className="border-2">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`${service.color} text-white p-3 rounded-lg`}>
                              <service.icon className="h-6 w-6" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{service.title}</CardTitle>
                              <CardDescription>{service.description}</CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline">{service.searchVolume}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold mb-3">Service Features:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-sm">
                                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Key Benefits:</h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center text-sm">
                                  <Star className="h-4 w-4 text-primary mr-2" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Interactive Tools */}
                        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                          <h4 className="font-semibold mb-3">Interactive Tools:</h4>
                          <div className="flex flex-wrap gap-2">
                            <Button size="sm" variant="outline">
                              <Calculator className="h-4 w-4 mr-2" />
                              {service.tools.calculator}
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-2" />
                              {service.tools.simulator}
                            </Button>
                            <Button size="sm" variant="outline">
                              <DollarSign className="h-4 w-4 mr-2" />
                              {service.tools.estimator}
                            </Button>
                          </div>
                        </div>

                        <div className="mt-6">
                          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            Get Quote for {service.title}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              {/* Additional Services Accordion */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Additional Residential Services</h3>
                <Accordion type="single" collapsible className="w-full">
                  {residentialServices.slice(6).map((service, index) => (
                    <AccordionItem key={service.id} value={service.id}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center space-x-3">
                          <div className={`${service.color} text-white p-2 rounded-lg`}>
                            <service.icon className="h-4 w-4" />
                          </div>
                          <span className="font-semibold">{service.title}</span>
                          <Badge variant="outline" className="ml-auto">{service.searchVolume}</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-12">
                          <p className="text-muted-foreground mb-4">{service.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold mb-2">Features:</h5>
                              <ul className="space-y-1 text-sm">
                                {service.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <CheckCircle className="h-3 w-3 text-primary mr-2" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold mb-2">Benefits:</h5>
                              <ul className="space-y-1 text-sm">
                                {service.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <Star className="h-3 w-3 text-primary mr-2" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <Button className="mt-4">
                            Learn More About {service.title}
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            {/* Testimonials */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">What Our Residential Customers Say</h2>
                <p className="text-muted-foreground">
                  Real reviews from customers across Sri Lanka
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="relative">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                            {testimonial.avatar}
                          </div>
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
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Quote Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    Get Quick Quote
                  </CardTitle>
                  <CardDescription>
                    Free estimates for residential services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleQuoteSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="sidebar-name">Name</Label>
                      <Input
                        id="sidebar-name"
                        value={quoteFormData.name}
                        onChange={(e) => handleQuoteInputChange('name', e.target.value)}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sidebar-service">Service</Label>
                      <Select
                        value={quoteFormData.service}
                        onValueChange={(value) => handleQuoteInputChange('service', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {residentialServices.slice(0, 6).map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sidebar-description">Description</Label>
                      <Textarea
                        id="sidebar-description"
                        value={quoteFormData.description}
                        onChange={(e) => handleQuoteInputChange('description', e.target.value)}
                        placeholder="Describe your project..."
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Get Free Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Interactive Tools */}
              <InteractiveTools serviceType="residential" />

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help Choosing?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">(250) 555-0123</p>
                      <p className="text-sm text-muted-foreground">Call for consultation</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">info@vanisleelectrical.ca</p>
                      <p className="text-sm text-muted-foreground">Email for quotes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Mon-Fri 8AM-6PM</p>
                      <p className="text-sm text-muted-foreground">24/7 Emergency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Nanaimo
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Parksville
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Courtenay
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Campbell River
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Ladysmith
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Qualicum Beach
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Residential Electrical Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get started with a free consultation and quote. Our residential electrical experts are ready to help transform your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-5 w-5" />
                Call (250) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}