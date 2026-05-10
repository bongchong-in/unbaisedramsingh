import { Youtube, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-brand-light-purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 w-full flex-shrink-0">
            <img className="rounded-full shadow-2xl mx-auto w-64 h-64 md:w-80 md:h-80 object-cover"
                 src="https://placehold.co/400x400/6f5acd/FFFFFF?text=Ramsingh+Y."
                 alt="Ramsingh Yadav, Certified Insurance Advisor" />
          </div>

          <div className="lg:w-2/3 w-full text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I am <span className="font-bold">Ramsingh Yadav</span>, an IRDAI-certified insurance advisor with over 5 years of experience. My journey is driven by a passion for helping families secure their future with informed decisions. I provide <span className="font-bold text-brand-purple-dark">unbiased advice through paid consultations</span>, ensuring my expertise is dedicated to genuine clients, not commission targets.
            </p>

            <h3 className="text-2xl font-bold text-brand-dark mb-4 mt-8">
              My Mission
            </h3>
            <ul className="space-y-3 text-gray-700 text-base md:text-lg">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>Educate clients on complex policy terms and conditions.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>Clearly explain the claim process for smooth settlements.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span>Highlight the importance of correctly filling proposal forms to avoid rejections.</span>
              </li>
            </ul>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <Youtube className="w-12 h-12 text-red-500 flex-shrink-0" />
              <div className="text-left">
                <h4 className="text-lg font-semibold text-brand-dark">Check out my YouTube Channel</h4>
                <p className="text-gray-600">Get free tips and simplified insurance concepts on <span className="font-bold">Up4updates</span>.</p>
                <a href="https://www.youtube.com/channel/UCf37kX-LY7V3e_erSaZlaBw" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:underline font-medium">
                  Watch Now &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
