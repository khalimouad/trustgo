import { Phone, MapPin } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-dark-border">
      {/* Top Banner */}
      <div className="bg-primary text-white text-center py-2 px-4 text-sm font-medium">
        Offre de lancement: -20% sur toutes vos courses avec le code TRUSTGO20!
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">TrustGo</span>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Maarif, Casablanca</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+212 650-827583</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">Accueil</a>
            <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Services</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Commander</a>
            <a href="#tarifs" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Tarifs</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition-colors">
              Commander une course
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
