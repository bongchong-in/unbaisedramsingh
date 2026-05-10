export default function Hero() {
  return (
    <section id="home" className="bg-brand-purple text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Welcome to Unbiased Ramsingh
        </h1>
        <p className="text-xl md:text-2xl text-brand-light-purple mb-10 max-w-3xl mx-auto">
          Your IRDAI Certified Insurance Advisor for Clear, Honest Advice. No Fluff, Just Clarity.
        </p>
        <a href="#pricing" className="inline-block bg-white text-brand-purple-dark font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          See My Consultation Plans
        </a>
      </div>
    </section>
  );
}
