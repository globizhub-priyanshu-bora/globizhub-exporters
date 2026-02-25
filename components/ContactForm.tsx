"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // We will wire this up to an email service later!
    console.log("Form submitted!");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Your Name" 
        className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors" 
        required
      />
      <input 
        type="email" 
        placeholder="Business Email" 
        className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors" 
        required
      />
      <textarea 
        placeholder="Tell us what you are looking for..." 
        rows={4} 
        className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
        required
      ></textarea>
      <button 
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
      >
        Send Request
      </button>
    </form>
  );
}