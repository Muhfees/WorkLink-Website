import { useState, useEffect } from 'react';
import { Router, Route } from './components/Router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ResidentialServices } from './components/ResidentialServices';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { Login } from './components/Login';
import { Signup } from './components/Signup';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Router>
          <Route path="/" component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/residential" component={ResidentialServices} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;