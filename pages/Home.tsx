
import React from 'react';
import { STATES } from '../constants';

interface HomeProps {
  onNavigate: (route: string, params?: any) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/travel/1920/1080" 
          alt="Oduduwa Heritage" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Discover the Heart of <span className="text-orange-500">Oduduwa</span>
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Your gateway to Edo, Ogun, Osun, Oyo, Lagos, and Ekiti. Experience culture, luxury, and seamless travel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('bus-ticketing')}
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition transform hover:scale-105 shadow-xl"
            >
              Book a Bus Now
            </button>
            <button 
              onClick={() => onNavigate('hotel')}
              className="px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold rounded-lg transition border border-white/30 shadow-xl"
            >
              Find Hotels
            </button>
          </div>
        </div>
      </section>

      {/* States Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our States</h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STATES.map((state) => (
            <div 
              key={state.id}
              onClick={() => onNavigate('state', state.id)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={state.image} 
                  alt={state.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">{state.name}</h3>
                  <p className="text-sm text-slate-300">Capital: {state.capital}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4 leading-relaxed">{state.description}</p>
                <div className="flex items-center text-orange-600 font-semibold text-sm">
                  Learn more
                  <svg className="w-4 h-4 ml-2 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Our Bus Partners</h2>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-60">
            <span className="text-2xl font-black text-slate-400">NEW EDO LINE</span>
            <span className="text-2xl font-black text-slate-400">EAGLE LINE</span>
            <span className="text-2xl font-black text-slate-400">GOD IS GOOD</span>
            <span className="text-2xl font-black text-slate-400">LIBRA</span>
            <span className="text-2xl font-black text-slate-400">EDEGBE</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
