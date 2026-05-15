import { Rocket, Clock, Users, CheckCircle, Shield, CreditCard } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-dark-bg dark:via-gray-900 dark:to-dark-bg text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi00LTJjMCAyIDItNCAyLTRzLTItMi00LTJjMCAyIDItNCAyLTRzLTItMi00LTJjMCAyIDItNCAyLTRzLTItMi00LTJjMCAyIDItNCAyLTRzLTItMi00LTJjMCAyIDItNCAyLTRzLTItMi00LTJjMCAyIDItNCAyLTRzLTItMi00LTJjMCAyIDItNCAyLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <Rocket className="w-8 h-8 text-primary" />
              <h1 className="text-4xl lg:text-5xl font-bold">
                Livraison Ultra-Rapide à Casablanca
              </h1>
            </div>

            <p className="text-xl text-gray-300">
              Vos documents et colis livrés en moins de 2h - Fiable, sécurisé et disponible 24h/24
            </p>

            {/* Key Metrics */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold">500+ Clients ravis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold">2h Délai max</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-semibold">24/7 Disponible</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center space-x-2">
              <span>Commander maintenant</span>
              <span>→</span>
            </button>

            {/* Promo Text */}
            <div className="bg-primary/20 border border-primary/30 rounded-lg p-4">
              <p className="text-primary font-semibold">
                OFFRE EXCLUSIVE DE LANCEMENT! Prix normal → -20% avec TRUSTGO20
              </p>
              <p className="text-gray-400 text-sm mt-1">Offre limitée - Ne ratez pas ça !</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Livraison rapide</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Suivi temps réel</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Sécurisé</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Paiement flexible</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="aspect-square bg-gray-800 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Rocket className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-gray-400">Delivery Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
