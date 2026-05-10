import { useState } from 'react';
import { PlayCircle, X } from 'lucide-react';

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const testimonials = [
    { name: 'Sagar Arora', location: 'Pune, Maharashtra', videoId: 'CjBTFsR88iw' },
    { name: 'Aditya Narayan', location: 'Bengaluru, Karnataka', videoId: 'b8YU4so2kpQ' },
    { name: 'Mayank', location: 'Delhi', videoId: 'ZVY7PUrQRTw' },
  ];

  return (
    <section id="feedback" className="py-20 bg-brand-light-purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-16">
          Feedback From My Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg flex flex-col">
              <button 
                onClick={() => setActiveVideo(testimonial.videoId)} 
                className="block aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-white relative group w-full"
              >
                <img src={`https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`} alt={`Video testimonial from ${testimonial.name}`} className="absolute w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition duration-300 rounded-lg"></div>
                <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition duration-300 relative z-10" />
              </button>
              <h3 className="text-xl font-semibold text-brand-dark">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-gray-900/90 backdrop-blur-sm transition-opacity" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="absolute top-2 right-2 z-10">
              <button onClick={() => setActiveVideo(null)} className="p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors backdrop-blur-md">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
