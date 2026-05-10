import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-brand-purple-dark">
              Unbiased Ramsingh
            </a>
          </div>

          <nav className="hidden md:flex md:space-x-8">
            <a href="#about" className="font-medium text-gray-500 hover:text-brand-purple">About</a>
            <a href="#services" className="font-medium text-gray-500 hover:text-brand-purple">Services</a>
            <a href="#pricing" className="font-medium text-gray-500 hover:text-brand-purple">Pricing</a>
            <a href="#feedback" className="font-medium text-gray-500 hover:text-brand-purple">Feedback</a>
            <a href="#contact" className="font-medium text-gray-500 hover:text-brand-purple">Contact</a>
          </nav>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-purple"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-50">About</a>
          <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-50">Services</a>
          <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-50">Pricing</a>
          <a href="#feedback" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple hover:bg-gray-50">Feedback</a>
          <a href="#contact" className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-brand-purple bg-brand-light-purple hover:bg-purple-200">Contact Us</a>
        </div>
      </div>
    </header>
  );
}
