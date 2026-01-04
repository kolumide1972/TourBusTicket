
import React, { useState } from 'react';
import { STATES } from '../constants';

interface NavbarProps {
  onNavigate: (route: string, params?: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [statesOpen, setStatesOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <span className="text-2xl font-bold text-orange-600 tracking-tight">TourOduduwa</span>
            <span className="ml-2 text-xs font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded uppercase">Services</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {/* States Dropdown */}
            <div className="relative">
              <button 
                onMouseEnter={() => setStatesOpen(true)}
                onMouseLeave={() => setStatesOpen(false)}
                className="text-slate-700 hover:text-orange-600 font-medium py-2 flex items-center gap-1"
              >
                States
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {statesOpen && (
                <div 
                  className="absolute left-0 mt-0 w-48 bg-white border border-slate-100 shadow-xl rounded-lg overflow-hidden py-1 z-50"
                  onMouseEnter={() => setStatesOpen(true)}
                  onMouseLeave={() => setStatesOpen(false)}
                >
                  {STATES.map(state => (
                    <button
                      key={state.id}
                      onClick={() => { onNavigate('state', state.id); setStatesOpen(false); }}
                      className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {state.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Payment Dropdown */}
            <div className="relative">
              <button 
                onMouseEnter={() => setPaymentOpen(true)}
                onMouseLeave={() => setPaymentOpen(false)}
                className="text-slate-700 hover:text-orange-600 font-medium py-2 flex items-center gap-1"
              >
                Payment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {paymentOpen && (
                <div 
                  className="absolute left-0 mt-0 w-56 bg-white border border-slate-100 shadow-xl rounded-lg overflow-hidden py-1 z-50"
                  onMouseEnter={() => setPaymentOpen(true)}
                  onMouseLeave={() => setPaymentOpen(false)}
                >
                  <button onClick={() => onNavigate('hotel')} className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600">Hotel Reservation</button>
                  <button onClick={() => onNavigate('restaurant')} className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600">Restaurant & Table Reservation</button>
                  <button onClick={() => onNavigate('bus-ticketing')} className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-orange-50 hover:text-orange-600">Bus Ticketing</button>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            {/* Mobile simplified trigger - for brevity in this SPA */}
            <button className="text-slate-700">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
