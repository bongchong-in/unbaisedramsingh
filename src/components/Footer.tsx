import { Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.youtube.com/channel/UCf37kX-LY7V3e_erSaZlaBw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="YouTube">
            <span className="sr-only">YouTube</span>
            <Youtube className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/up4updates/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="Instagram">
            <span className="sr-only">Instagram</span>
            <Instagram className="w-8 h-8" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=%2B918850272062" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="WhatsApp">
            <span className="sr-only">WhatsApp</span>
            <MessageCircle className="w-8 h-8" />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; 2025 Unbiased Ramsingh. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-4 max-w-2xl mx-auto">
          Disclaimer: Ramsingh Yadav is an IRDAI-certified insurance advisor. All consultations are paid services to ensure unbiased advice. Insurance is the subject matter of solicitation. Please read all policy documents carefully.
        </p>
        <p className="text-sm text-gray-400 mt-6">
          Designed, Gifted and Supported by <a href="https://mxsstudio.edgentiq.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:underline transition-colors">MxS Studio</a> with ❤️
        </p>
      </div>
    </footer>
  );
}
