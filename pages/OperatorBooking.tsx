
import React, { useState } from 'react';
import { BUS_OPERATORS, DESTINATIONS } from '../constants';
import { Destination, AppRoute } from '../types';

interface OperatorBookingProps {
  operatorId: string;
  onNavigate: (route: string, params?: any) => void;
}

const OperatorBooking: React.FC<OperatorBookingProps> = ({ operatorId, onNavigate }) => {
  const operator = BUS_OPERATORS.find(o => o.id === operatorId);
  const availableDestinations = DESTINATIONS[operatorId] || [];
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const handlePayment = () => {
    if (selectedDestination && operator) {
      onNavigate(AppRoute.PAYMENT_GATEWAY, {
        operatorName: operator.name,
        destination: selectedDestination.name,
        price: selectedDestination.price,
        vehicle: selectedDestination.vehicle
      });
    }
  };

  if (!operator) return <div>Operator not found</div>;

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="flex items-center gap-4 mb-12">
        <button 
          onClick={() => onNavigate(AppRoute.BUS_TICKETING)}
          className="p-2 hover:bg-slate-100 rounded-full transition"
        >
          <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <div>
          <h1 className="text-3xl font-bold text-slate-800">{operator.name} Booking</h1>
          <p className="text-slate-500">Choose your destination from the list below</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-lg font-semibold text-slate-700 px-2 uppercase tracking-tight">Available Routes</h2>
          {availableDestinations.length > 0 ? (
            availableDestinations.map((dest) => (
              <button
                key={dest.name}
                onClick={() => setSelectedDestination(dest)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-200 border-2 ${
                  selectedDestination?.name === dest.name 
                    ? 'bg-orange-50 border-orange-500 shadow-md ring-4 ring-orange-500/10' 
                    : 'bg-white border-transparent hover:border-slate-200 hover:shadow-sm shadow-slate-100'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase">To:</p>
                    <p className="text-xl font-bold text-slate-800">{dest.name}</p>
                  </div>
                  <div className="text-orange-600 font-bold">
                    NGN {dest.price.toLocaleString()}
                  </div>
                </div>
              </button>
            ))
          ) : (
            <div className="bg-slate-100 p-8 rounded-2xl text-center text-slate-400 italic">
              Routes for this operator will be updated shortly.
            </div>
          )}
        </div>

        <div className="lg:col-span-2">
          {selectedDestination ? (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-in slide-in-from-right duration-300">
              <div className="aspect-video relative">
                <img 
                  src={selectedDestination.imageUrl} 
                  alt={selectedDestination.vehicle} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-orange-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  {selectedDestination.vehicle}
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-2">{selectedDestination.name}</h3>
                    <p className="text-slate-500 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Estimated Travel Time: 4-6 Hours
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm uppercase font-bold">Total Fare</p>
                    <p className="text-4xl font-black text-slate-900">NGN {selectedDestination.price.toLocaleString()}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={handlePayment}
                    className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-slate-800 transition transform hover:-translate-y-1 active:scale-95 shadow-2xl flex items-center justify-center gap-3"
                  >
                    BOOK AND PAY NGN {selectedDestination.price.toLocaleString()}
                  </button>
                  <p className="text-center text-slate-400 text-sm">
                    Select a payment provider on the next step.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center border-4 border-dashed border-slate-200 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-400 mb-2">Selection Required</h3>
              <p className="text-slate-400 max-w-xs">Please select a destination from the list on the left to view bus details and proceed to payment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OperatorBooking;
