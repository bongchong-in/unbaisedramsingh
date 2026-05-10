import { CheckCircle2 } from 'lucide-react';

export default function Pricing({ onOpenModal }: { onOpenModal: (plan: string) => void }) {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-16">
          My Consultation Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="border border-gray-200 rounded-xl shadow-lg flex flex-col">
            <div className="p-8 bg-gray-50 rounded-t-xl">
              <h3 className="text-2xl font-bold text-brand-purple">Video Guide</h3>
              <p className="text-gray-500 mt-2">Get 100% Claim Settlement</p>
              <p className="text-5xl font-extrabold text-brand-dark my-4">₹499</p>
              <p className="text-sm text-gray-500">One-time purchase</p>
            </div>
            <div className="p-8 flex-grow">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  Watch-on-demand video
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  Learn secrets to avoid claim rejection
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-b-xl mt-auto">
              <button onClick={() => onOpenModal('Video Guide')} className="block w-full text-center bg-brand-purple text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-brand-purple-dark transition duration-300">
                Get This Video
              </button>
            </div>
          </div>

          <div className="border-2 border-brand-purple rounded-xl shadow-2xl flex flex-col relative">
            <span className="absolute top-0 right-4 bg-brand-accent text-white text-xs font-bold px-4 py-1 rounded-full -mt-3 shadow-lg">
              POPULAR
            </span>
            <div className="p-8 bg-brand-light-purple rounded-t-xl">
              <h3 className="text-2xl font-bold text-brand-purple-dark">Standard Consultation</h3>
              <p className="text-gray-600 mt-2">For individuals & families</p>
              <p className="text-5xl font-extrabold text-brand-dark my-4">₹1499</p>
              <p className="text-sm text-gray-600">Per consultation</p>
            </div>
            <div className="p-8 flex-grow bg-white">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  Unbiased Plan Suggestion
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  Policy T&C Explained
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  Doubt Solving Session
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  1 Session (max 45 Mins)
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-b-xl mt-auto">
              <button onClick={() => onOpenModal('Standard Consultation')} className="block w-full text-center bg-brand-purple text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-brand-purple-dark transition duration-300">
                Book This Plan
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl shadow-lg flex flex-col">
            <div className="p-8 bg-gray-50 rounded-t-xl">
              <h3 className="text-2xl font-bold text-brand-purple">Premium Support</h3>
              <p className="text-gray-500 mt-2">Complete peace of mind</p>
              <p className="text-5xl font-extrabold text-brand-dark my-4">₹1999</p>
              <p className="text-sm text-gray-500">Full advisory package</p>
            </div>
            <div className="p-8 flex-grow">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  All "Standard" features
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  On-screen Proposal Form Filling
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-bold">Lifetime Claim Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  100% Claim Guarantee
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  2 Sessions (max 60 Mins each)
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  Fee adjusted on premium &gt; ₹25k
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-b-xl mt-auto">
              <button onClick={() => onOpenModal('Premium Support')} className="block w-full text-center bg-brand-purple text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-brand-purple-dark transition duration-300">
                Book This Plan
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
