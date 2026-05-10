import { MessageCircle } from 'lucide-react';

export default function StickyWhatsApp() {
  return (
    <a href="https://api.whatsapp.com/send/?phone=%2B918850272062" 
       target="_blank" 
       rel="noopener noreferrer" 
       className="sticky-whatsapp-icon"
       aria-label="Chat on WhatsApp">
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  );
}
