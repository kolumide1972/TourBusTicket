
import React, { useEffect, useState } from 'react';
import { STATES } from '../constants';
import { getStateTravelTips } from '../services/gemini';

interface StateDetailProps {
  stateId: string;
}

const StateDetail: React.FC<StateDetailProps> = ({ stateId }) => {
  const state = STATES.find(s => s.id === stateId);
  const [tips, setTips] = useState<string>('Loading dynamic tips...');

  useEffect(() => {
    if (state) {
      getStateTravelTips(state.name).then(setTips);
    }
  }, [state]);

  if (!state) return <div>State not found</div>;

  return (
    <div className="animate-in fade-in duration-500">
      <div className="h-[40vh] relative">
        <img src={state.image} className="w-full h-full object-cover" alt={state.name} />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">Explore {state.name}</h1>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-3xl p-8 shadow-sm -mt-24 relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">About the State</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {state.description} {state.name} State is known for its rich cultural heritage, 
                vibrant markets, and breathtaking landmarks. As a core part of the Oduduwa heritage, 
                it offers a unique blend of historical significance and modern development.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="text-orange-800 font-bold mb-2 flex items-center gap-2">
                  <span className="text-xl">💡</span> Dynamic Travel Tips (by Gemini AI)
                </h3>
                <div className="text-orange-700 whitespace-pre-line text-sm leading-relaxed italic">
                  {tips}
                </div>
              </div>
            </div>
            
            <div className="md:w-64 space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs uppercase text-slate-400 font-bold mb-1">Capital City</p>
                <p className="font-semibold text-slate-800">{state.capital}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs uppercase text-slate-400 font-bold mb-1">Region</p>
                <p className="font-semibold text-slate-800">Southwest / South South Nigeria</p>
              </div>
              <button className="w-full py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition">
                Find Accommodations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateDetail;
