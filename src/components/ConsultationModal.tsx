import { useState, FormEvent } from 'react';
import { X, Plus, Trash2, Send, CheckCircle, MessageCircle } from 'lucide-react';

interface Member {
  id: string;
  name: string;
  dob: string;
  preExistingConditions: string;
}

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
}

export default function ConsultationModal({ isOpen, onClose, planName }: ConsultationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    countryCode: '+91',
    phone: '',
    pincode: '',
    allIndiaCoverage: 'yes',
    sumInsured: '',
    hasCorporateInsurance: 'no',
    corporateCoverage: '',
    instructions: '',
    budget: ''
  });

  const [members, setMembers] = useState<Member[]>([{
    id: '1',
    name: '',
    dob: '',
    preExistingConditions: ''
  }]);

  if (!isOpen) {
    if (isSubmitted) {
      setTimeout(() => setIsSubmitted(false), 300); // Reset after closing animation
    }
    return null;
  }

  const handleAddMember = () => {
    setMembers([...members, { id: Date.now().toString(), name: '', dob: '', preExistingConditions: '' }]);
  };

  const handleRemoveMember = (id: string) => {
    setMembers(members.filter(m => m.id !== id));
  };

  const handleMemberChange = (id: string, field: keyof Member, value: string) => {
    setMembers(members.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  const submitToGoogleForm = async () => {
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdSZfYRATKLHIwwjoAAsOZZDJr3WTVUK1G2VwqORPkGBVnSOg/formResponse';
    
    const params = new URLSearchParams();
    
    params.append('entry.231036476', planName || 'No plan selected');
    params.append('entry.1574672621', formData.email);
    params.append('entry.1111674410', `${formData.countryCode} ${formData.phone}`);
    params.append('entry.555593671', formData.pincode);
    params.append('entry.638175460', formData.allIndiaCoverage);
    params.append('entry.1511243128', formData.sumInsured);
    params.append('entry.1828587579', formData.hasCorporateInsurance);
    if (formData.hasCorporateInsurance === 'yes') {
        params.append('entry.1417090563', formData.corporateCoverage);
    }
    
    const memberEntries = [
        'entry.671709786',
        'entry.1460698754',
        'entry.619202770',
        'entry.1441226400',
        'entry.550574794',
        'entry.79009256',
        'entry.2034762036',
        'entry.624014517',
        'entry.1421276834',
        'entry.261738961'
    ];
    
    members.forEach((member, index) => {
        if (index < memberEntries.length) {
            const memberDetails = `Name: ${member.name}, DOB: ${member.dob}, Pre-existing Conditions: ${member.preExistingConditions || 'None'}`;
            params.append(memberEntries[index], memberDetails);
        }
    });

    params.append('entry.1118140557', formData.budget);
    
    const instructions = `Proposer Name: ${formData.fullName}\n\nNotes: ${formData.instructions}`;
    params.append('entry.1050761638', instructions);

    try {
        await fetch(formUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
        });
    } catch (e) {
        console.error('Error submitting form:', e);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitToGoogleForm();
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    let message = `*Consultation Request*\n`;
    if (planName) message += `*Plan*: ${planName}\n\n`;
    message += `*Name*: ${formData.fullName}\n`;
    message += `*Email*: ${formData.email}\n`;
    message += `*Phone*: ${formData.countryCode} ${formData.phone}\n`;
    message += `*Pincode*: ${formData.pincode}\n`;
    message += `*All India Coverage*: ${formData.allIndiaCoverage}\n`;
    message += `*Sum Insured Planned*: ${formData.sumInsured}\n`;
    message += `*Corporate Insurance*: ${formData.hasCorporateInsurance}\n`;
    if (formData.hasCorporateInsurance === 'yes') {
        message += `*Corporate Coverage*: ${formData.corporateCoverage}\n`;
    }
    
    message += `\n*Members to be Insured* (${members.length}):\n`;
    members.forEach((m, idx) => {
        message += `Member ${idx + 1}:\n- Name: ${m.name}\n- DOB: ${m.dob}\n- Pre-existing Conditions: ${m.preExistingConditions || 'None'}\n`;
    });

    message += `\n*Yearly Budget*: ${formData.budget}\n`;
    if (formData.instructions) {
        message += `*Specific Instructions*: ${formData.instructions}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send/?phone=%2B918850272062&text=${encodedMessage}`;
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm sm:p-6 transition-opacity">
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-full flex flex-col shadow-2xl relative overflow-hidden flex-shrink-0 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <div>
            <h2 className="text-xl font-bold text-brand-dark">
              {isSubmitted ? 'Request Received' : 'Request Consultation'}
            </h2>
            {planName && !isSubmitted && <p className="text-sm text-brand-purple font-medium">Selected Plan: {planName}</p>}
          </div>
          <button onClick={() => { onClose(); if(isSubmitted) setIsSubmitted(false); }} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center overflow-y-auto custom-scrollbar shrink-1">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Almost Done!</h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Your details are ready. To complete your request and get a faster response, please send these details to my WhatsApp.
            </p>
            <div className="space-y-4 w-full max-w-sm">
              <a 
                href={generateWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => onClose()}
                className="flex items-center justify-center w-full gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5" /> Send to WhatsApp
              </a>
              <button 
                onClick={() => { onClose(); setIsSubmitted(false); }} 
                className="w-full px-6 py-3.5 text-base font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all"
              >
                Close without sending
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Form Body - Scrollable */}
            <div className="overflow-y-auto p-6 custom-scrollbar shrink-1">
              <form id="consultation-form" onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Primary Info */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                    <input required type="text" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all text-gray-900" placeholder="John Doe" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all text-gray-900" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Primary Contact Number *</label>
                    <div className="flex">
                      <input 
                        type="text" 
                        value={formData.countryCode} 
                        onChange={e => setFormData({...formData, countryCode: e.target.value})} 
                        className="w-16 px-2 text-center text-sm font-medium text-gray-700 bg-gray-50 border border-r-0 border-gray-300 rounded-l-lg outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all" 
                        placeholder="+91" 
                      />
                      <input required type="tel" pattern="[0-9]{10}" maxLength={10} value={formData.phone} onChange={e => {
                        const val = e.target.value.replace(/\D/g, '');
                        setFormData({...formData, phone: val});
                      }} className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all text-gray-900" placeholder="9876543210" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Area Pincode *</label>
                    <input required type="text" pattern="[0-9]{6}" maxLength={6} value={formData.pincode} onChange={e => {
                      const val = e.target.value.replace(/\D/g, '');
                      setFormData({...formData, pincode: val});
                    }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all text-gray-900" placeholder="e.g. 400001" />
                  </div>
                </div>

                <div className="h-px bg-gray-100"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Need All India Coverage?</label>
                    <div className="flex gap-4 mt-1">
                      <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                        <input type="radio" value="yes" checked={formData.allIndiaCoverage === 'yes'} onChange={e => setFormData({...formData, allIndiaCoverage: e.target.value})} className="w-4 h-4 text-brand-purple focus:ring-brand-purple/20" /> Yes
                      </label>
                      <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                        <input type="radio" value="no" checked={formData.allIndiaCoverage === 'no'} onChange={e => setFormData({...formData, allIndiaCoverage: e.target.value})} className="w-4 h-4 text-brand-purple focus:ring-brand-purple/20" /> No
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Sum Insured Planned (ex. 10 Lakhs) *</label>
                    <input required type="text" value={formData.sumInsured} onChange={e => {
                      setFormData({...formData, sumInsured: e.target.value});
                    }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all text-gray-900" placeholder="e.g. 10 Lakhs" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Do you have corporate insurance?</label>
                    <div className="flex gap-4 mt-1">
                      <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                        <input type="radio" value="yes" checked={formData.hasCorporateInsurance === 'yes'} onChange={e => setFormData({...formData, hasCorporateInsurance: e.target.value})} className="w-4 h-4 text-brand-purple focus:ring-brand-purple/20" /> Yes
                      </label>
                      <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                        <input type="radio" value="no" checked={formData.hasCorporateInsurance === 'no'} onChange={e => setFormData({...formData, hasCorporateInsurance: e.target.value})} className="w-4 h-4 text-brand-purple focus:ring-brand-purple/20" /> No
                      </label>
                    </div>
                  </div>

                  {formData.hasCorporateInsurance === 'yes' && (
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Corporate Coverage Amount (ex. 5 Lakhs) *</label>
                      <input required type="text" value={formData.corporateCoverage} onChange={e => {
                        setFormData({...formData, corporateCoverage: e.target.value});
                      }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all text-gray-900" placeholder="e.g. 5 Lakhs" />
                    </div>
                  )}
                </div>

                <div className="h-px bg-gray-100"></div>

                {/* Members Section */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-brand-dark">Members to be Insured</h3>
                    <button type="button" onClick={handleAddMember} className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm font-medium text-brand-purple bg-brand-light-purple hover:bg-purple-200 rounded-lg transition-colors">
                      <Plus className="w-4 h-4" /> Add Member
                    </button>
                  </div>

                  <div className="space-y-4">
                    {members.map((member, index) => (
                      <div key={member.id} className="p-4 border border-gray-200 rounded-xl bg-gray-50/50 space-y-4 relative group">
                        {members.length > 1 && (
                          <button type="button" onClick={() => handleRemoveMember(member.id)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-1" aria-label="Remove member">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider pr-8">Member {index + 1}</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Member Name *</label>
                            <input required type="text" value={member.name} onChange={e => handleMemberChange(member.id, 'name', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all text-gray-900" placeholder="Full Name" />
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Date of Birth *</label>
                            <input required type="date" value={member.dob} max={todayStr} onChange={e => handleMemberChange(member.id, 'dob', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all text-gray-900" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Pre-existing Medical Conditions / Surgeries</label>
                          <textarea value={member.preExistingConditions} onChange={e => handleMemberChange(member.id, 'preExistingConditions', e.target.value)} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all resize-none text-gray-900" placeholder="If none, type 'None' or leave blank."></textarea>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gray-100"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Yearly Insurance Budget (₹) *</label>
                    <input required type="text" value={formData.budget} onChange={e => {
                      setFormData({...formData, budget: e.target.value});
                    }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all text-gray-900" placeholder="e.g. 25000" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Any specific instructions?</label>
                    <textarea value={formData.instructions} onChange={e => setFormData({...formData, instructions: e.target.value})} rows={1} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all resize-none text-gray-900" placeholder="Optional"></textarea>
                  </div>
                </div>
                
              </form>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 shrink-0">
              <button type="button" onClick={() => { onClose(); if(isSubmitted) setIsSubmitted(false); }} className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200 bg-gray-100 rounded-lg transition-colors">Cancel</button>
              <button type="submit" disabled={isSubmitting} form="consultation-form" className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-brand-purple hover:bg-brand-purple-dark disabled:opacity-75 disabled:cursor-not-allowed rounded-lg shadow-md transition-all active:scale-95">
                <Send className="w-4 h-4" /> {isSubmitting ? 'Submitting...' : 'Go to Next Step'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

