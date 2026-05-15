import { Heart } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Service impeccable! Mes documents arrivent toujours à temps et en sécurité.",
      author: "Ahmed El Fassi",
      profession: "Cabinet d'avocats",
    },
    {
      quote: "Très réactifs et professionnels. Je recommande vivement TrustGo.",
      author: "Fatima Benali",
      profession: "Architecte",
    },
    {
      quote: "Parfait pour nos livraisons quotidiennes. Clients très satisfaits !",
      author: "Youssef Amrani",
      profession: "E-commerce",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Ils nous font confiance
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Rejoignez plus de 500 clients satisfaits à Casablanca
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-border"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.profession}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
