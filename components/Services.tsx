import { FileText, Package, Zap, Calendar } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: "Livraison de documents",
      description: "Contrats, dossiers urgents, courriers administratifs",
    },
    {
      icon: Package,
      title: "Livraison de colis",
      description: "Petits et moyens colis jusqu'à 20kg",
    },
    {
      icon: Zap,
      title: "Course express",
      description: "Livraison en moins de 2h dans Casablanca",
    },
    {
      icon: Calendar,
      title: "Tournées programmées",
      description: "Livraisons régulières pour vos entreprises",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi choisir TrustGo?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Des solutions de livraison qui révolutionnent votre quotidien
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-dark-card p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-200 dark:border-dark-border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Découvrir tous nos services →
          </button>
        </div>
      </div>
    </section>
  );
}
