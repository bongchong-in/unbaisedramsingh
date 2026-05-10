import { useState } from 'react';
import { MessageCircle, ClipboardList } from 'lucide-react';
import qrCodeImage from '../assets/ramsingh_upi_qr.jpg';

export default function Contact({ onOpenModal }: { onOpenModal: () => void }) {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const upiIdText = "up4update@ybl";

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
         await navigator.clipboard.writeText(upiIdText);
      } else {
        // Fallback for older browsers or iframes
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = upiIdText;
        tempTextarea.style.position = 'absolute';
        tempTextarea.style.left = '-9999px';
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999);
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);
      }
      setCopyStatus('success');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopyStatus('error');
    }
    
    setTimeout(() => {
      setCopyStatus(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-16">
          Get Started Today
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center max-w-6xl mx-auto">
          
          <div className="lg:w-1/2 w-full bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-brand-dark mb-4">Book Your Consultation</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Ready for unbiased advice? Choose your preferred method to get in touch. Fill out the consultation form for a structured request, or message me directly on WhatsApp for a quick chat.
            </p>
            <div className="space-y-4">
              <button onClick={() => onOpenModal()} className="flex items-center justify-center w-full bg-brand-purple text-white font-semibold px-6 py-4 rounded-lg shadow-md hover:bg-brand-purple-dark transition duration-300">
                <ClipboardList className="w-6 h-6 mr-3" />
                Fill Consultation Form
              </button>
              <a href="https://api.whatsapp.com/send/?phone=%2B918850272062" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-green-500 text-white font-semibold px-6 py-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                <MessageCircle className="w-6 h-6 mr-3" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full bg-gray-50 p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-brand-dark mb-4">Payment Details</h3>
            <p className="text-gray-700 mb-6">You can pay for the consultation using the QR code or UPI ID below.</p>
            
            <img src={qrCodeImage} 
                 alt="UPI QR Code" 
                 className="mx-auto mb-4 rounded-lg border-4 border-gray-300 w-48 h-48 md:w-56 md:h-56" />
                 
            <p className="text-lg font-medium text-gray-800">
              UPI ID: <span className="font-bold text-brand-purple-dark">{upiIdText}</span>
            </p>
            
            <div className="mt-4 flex items-center justify-center relative min-h-[40px]">
              <button 
                onClick={handleCopy}
                disabled={!!copyStatus}
                className="bg-gray-200 text-gray-800 font-semibold px-5 py-2 rounded-lg hover:bg-gray-300 transition duration-300 disabled:opacity-50"
              >
                Copy UPI ID
              </button>
              {copyStatus === 'success' && (
                <span className="absolute -right-2 transform translate-x-full text-green-600 text-sm ml-2 font-medium whitespace-nowrap">
                  Copied!
                </span>
              )}
              {copyStatus === 'error' && (
                <span className="absolute -right-2 transform translate-x-full text-red-600 text-sm ml-2 font-medium whitespace-nowrap">
                  Failed!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
