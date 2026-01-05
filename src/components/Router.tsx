import React, { useState, useEffect } from 'react';

interface RouterProps {
  children: React.ReactNode;
}

interface RouteProps {
  path: string;
  component: React.ComponentType;
}

// Simple hash-based router for client-side navigation
export function Router({ children }: RouterProps) {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Route) {
          const routeProps = child.props as RouteProps;
          if (routeProps.path === currentPath) {
            return React.createElement(routeProps.component);
          }
        }
        return null;
      })}
    </div>
  );
}

export function Route({ path, component }: RouteProps) {
  // This component is used for configuration only
  return null;
}

export function Link({ to, children, className, ...props }: { 
  to: string; 
  children: React.ReactNode; 
  className?: string;
  [key: string]: any;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = to;
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}