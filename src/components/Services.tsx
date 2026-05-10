import { FileSearch, ShieldCheck, Scale, BookOpen, HelpCircle, FileCheck } from 'lucide-react';

const SERVICES = [
  {
    title: "In-depth Analysis",
    description: "Detailed breakdown of policy features, fine print, and hidden clauses so you know exactly what you're buying.",
    icon: <FileSearch className="w-8 h-8 text-brand-purple" />,
  },
  {
    title: "Claim-related Help",
    description: "Guidance on the claim process to ensure a smooth and successful settlement when you need it most.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-purple" />,
  },
  {
    title: "Unbiased Advice",
    description: "As I am not commission-based, my only goal is to find the best policy for your specific needs.",
    icon: <Scale className="w-8 h-8 text-brand-purple" />,
  },
  {
    title: "Policy Understanding",
    description: "I will translate complex insurance jargon into simple, understandable language for you.",
    icon: <BookOpen className="w-8 h-8 text-brand-purple" />,
  },
  {
    title: "Doubt Solving",
    description: "Have a nagging question about your existing policy or a new one? Get clear and definitive answers.",
    icon: <HelpCircle className="w-8 h-8 text-brand-purple" />,
  },
  {
    title: "Unbiased Review",
    description: "Get an honest review of your current insurance portfolio to identify gaps or overlaps in coverage.",
    icon: <FileCheck className="w-8 h-8 text-brand-purple" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-16">
          How I Can Help You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
              <div className="inline-block bg-brand-light-purple p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
