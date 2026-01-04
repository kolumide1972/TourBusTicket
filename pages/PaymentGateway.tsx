
import React, { useState } from 'react';
import { AppRoute } from '../types';

interface PaymentGatewayProps {
  transaction: {
    operatorName: string;
    destination: string;
    price: number;
    vehicle: string;
  };
  onNavigate: (route: string, params?: any) => void;
}

const PaymentGateway: React.FC<PaymentGatewayProps> = ({ transaction, onNavigate }) => {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleFinalize = (provider: string) => {
    setLoadingProvider(provider);
    setTimeout(() => {
      alert(`Redirecting to ${provider} Secure Checkout for NGN ${transaction.price.toLocaleString()}...`);
      setLoadingProvider(null);
      onNavigate(AppRoute.HOME);
    }, 2000);
  };

  if (!transaction) return <div>No transaction data found.</div>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Complete Your Booking</h1>
        <p className="text-slate-500">Securely pay for your trip to {transaction.destination}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Transaction Summary */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Summary</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-slate-400">Operator</p>
                <p className="font-bold text-slate-800">{transaction.operatorName}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Route</p>
                <p className="font-bold text-slate-800">To {transaction.destination}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Vehicle</p>
                <p className="font-bold text-slate-800">{transaction.vehicle}</p>
              </div>
              <div className="pt-4 border-t border-slate-50">
                <p className="text-xs text-slate-400">Total to Pay</p>
                <p className="text-2xl font-black text-orange-600">NGN {transaction.price.toLocaleString()}</p>
              </div>
            </div>
            
            <button 
              onClick={() => onNavigate(AppRoute.BUS_TICKETING)}
              className="mt-8 text-sm text-slate-400 hover:text-slate-600 flex items-center gap-1 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              Change Destination
            </button>
          </div>
        </div>

        {/* Payment Options */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Select Payment Method</h2>
          
          {/* Paystack Card */}
          <div className={`group relative bg-white p-8 rounded-3xl border-2 transition-all duration-300 ${loadingProvider === 'Paystack' ? 'border-teal-500 ring-4 ring-teal-50' : 'border-slate-100 hover:border-teal-400 hover:shadow-xl'}`}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-teal-50 p-4 rounded-2xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Paystack_Logo.png" alt="Paystack" className="h-8 md:h-10 object-contain" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-800">Paystack</h3>
                <p className="text-slate-500 text-sm">Best for local cards, Bank Transfer, and USSD payments.</p>
              </div>
              <button 
                onClick={() => handleFinalize('Paystack')}
                disabled={!!loadingProvider}
                className="px-6 py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition shadow-lg flex items-center gap-2"
              >
                {loadingProvider === 'Paystack' ? 'Loading...' : 'Pay with Paystack'}
              </button>
            </div>
          </div>

          {/* Stripe Card */}
          <div className={`group relative bg-white p-8 rounded-3xl border-2 transition-all duration-300 ${loadingProvider === 'Stripe' ? 'border-indigo-500 ring-4 ring-indigo-50' : 'border-slate-100 hover:border-indigo-400 hover:shadow-xl'}`}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-indigo-50 p-4 rounded-2xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-8 md:h-10 object-contain" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-800">Stripe</h3>
                <p className="text-slate-500 text-sm">Fast, secure checkout for international Credit/Debit cards.</p>
              </div>
              <button 
                onClick={() => handleFinalize('Stripe')}
                disabled={!!loadingProvider}
                className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg flex items-center gap-2"
              >
                {loadingProvider === 'Stripe' ? 'Loading...' : 'Pay with Stripe'}
              </button>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl flex items-start gap-4">
            <div className="text-slate-400 pt-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Your payment information is processed securely. We do not store your credit card details on our servers. All transactions are encrypted and protected by the selected gateway's infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
