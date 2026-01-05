import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Switch } from './ui/switch';
import { Link } from './Router';
import {
  Menu,
  Phone,
  Home,
  Wrench,
  Building,
  Zap,
  AlertTriangle,
  Sun,
  Moon,
  MessageCircle
} from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Services',
      href: '/services',
      icon: Wrench,
      submenu: [
        { name: 'Residential', href: '/residential', icon: Home },
        { name: 'Commercial', href: '/commercial', icon: Building },
        { name: 'Specialty', href: '/specialty', icon: Zap },
        { name: 'Emergency', href: '/emergency', icon: AlertTriangle }
      ]
    },
    {
      name: 'Projects',
      href: '/#projects',
      icon: Building
    },
    {
      name: 'About',
      href: '/#about',
      icon: Home
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">Worklink</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
              {item.submenu && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className="flex items-center space-x-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <subItem.icon className="h-4 w-4" />
                      <span>{subItem.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Dark mode toggle */}
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4" />
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              aria-label="Toggle dark mode"
            />
            <Moon className="h-4 w-4" />
          </div>

          {/* Auth buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/login">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Emergency hotline */}
          <Button className="hidden lg:flex items-center space-x-2 bg-destructive text-destructive-foreground hover:bg-destructive/90">
            <Phone className="h-4 w-4" />
            <span>Emergency 24/7</span>
          </Button>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Menu</span>
                  <div className="flex items-center space-x-2">
                    <Sun className="h-4 w-4" />
                    <Switch
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                      aria-label="Toggle dark mode"
                    />
                    <Moon className="h-4 w-4" />
                  </div>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <Link
                        to={item.href}
                        className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="text-lg">{item.name}</span>
                      </Link>
                      {item.submenu && (
                        <div className="ml-8 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              <subItem.icon className="h-4 w-4" />
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Auth buttons - Mobile */}
                <div className="flex gap-2">
                  <Link to="/login" className="flex-1" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" className="flex-1" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Sign Up
                    </Button>
                  </Link>
                </div>

                <Button className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency 24/7
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* AI Chat Button - Fixed position */}
      <Button
        className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 bg-primary hover:bg-primary/90 shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </header>
  );
}