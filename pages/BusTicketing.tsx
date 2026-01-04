
import React from 'react';
import { BUS_OPERATORS } from '../constants';

interface BusTicketingProps {
  onNavigate: (route: string, params?: any) => void;
}

const BusTicketing: React.FC<BusTicketingProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Bus Ticketing Services</h1>
        <p className="text-slate-500 max-w-xl mx-auto">Select your preferred transport operator to begin your journey across Nigeria.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BUS_OPERATORS.map((operator) => (
          <div 
            key={operator.id}
            onClick={() => onNavigate('operator', operator.id)}
            className="group cursor-pointer bg-white p-8 rounded-2xl border-2 border-transparent hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="text-6xl mb-6 transform group-hover:scale-125 transition duration-300">
              {operator.logo}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{operator.name}</h3>
            <p className="text-slate-500 text-sm mb-6">Reliable travel partners for inter-state logistics.</p>
            <div className="inline-flex items-center justify-center w-full py-3 bg-slate-50 group-hover:bg-orange-600 group-hover:text-white rounded-xl font-bold text-slate-600 transition">
              Select Operator
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-orange-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">Why book with TourOduduwa?</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Secure online payments via Paystack
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Verified bus operators only
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Instant ticket generation
            </li>
          </ul>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20">
          <p className="text-orange-200 text-sm mb-2">Total trips booked today</p>
          <p className="text-4xl font-bold">1,250+</p>
        </div>
      </div>
    </div>
  );
};

export default BusTicketing;
