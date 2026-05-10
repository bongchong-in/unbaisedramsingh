/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleOpenModal = (plan = '') => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing onOpenModal={handleOpenModal} />
        <Testimonials />
        <Contact onOpenModal={handleOpenModal} />
      </main>
      <Footer />
      <StickyWhatsApp />
      
      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan}
      />
    </div>
  );
}
