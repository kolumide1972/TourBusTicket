
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StateDetail from './pages/StateDetail';
import BusTicketing from './pages/BusTicketing';
import OperatorBooking from './pages/OperatorBooking';
import PaymentGateway from './pages/PaymentGateway';
import { AppRoute } from './types';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(AppRoute.HOME);
  const [routeParams, setRouteParams] = useState<any>(null);

  const navigate = (route: string, params?: any) => {
    setCurrentRoute(route as AppRoute);
    setRouteParams(params);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentRoute) {
      case AppRoute.HOME:
        return <Home onNavigate={navigate} />;
      case AppRoute.STATE:
        return <StateDetail stateId={routeParams} />;
      case AppRoute.BUS_TICKETING:
        return <BusTicketing onNavigate={navigate} />;
      case AppRoute.OPERATOR_DETAIL:
        return <OperatorBooking operatorId={routeParams} onNavigate={navigate} />;
      case AppRoute.PAYMENT_GATEWAY:
        return <PaymentGateway transaction={routeParams} onNavigate={navigate} />;
      case AppRoute.HOTEL:
      case AppRoute.RESTAURANT:
        return (
          <div className="min-h-screen flex items-center justify-center p-8 text-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4 uppercase tracking-wider">Feature Coming Soon</h2>
              <p className="text-slate-500 max-w-md mx-auto">We are currently integrating the best {currentRoute} partners in the region. Stay tuned!</p>
              <button 
                onClick={() => navigate(AppRoute.HOME)}
                className="mt-8 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition shadow-lg"
              >
                Back to Home
              </button>
            </div>
          </div>
        );
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={navigate} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <footer className="bg-slate-900 text-white py-12 px-4 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">TourOduduwa Services</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering tourism and travel across the Oduduwa heritage states with seamless payment solutions and reliable logistics.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => navigate('home')} className="hover:text-white">Home</button></li>
              <li><button onClick={() => navigate('bus-ticketing')} className="hover:text-white">Bus Services</button></li>
              <li><button className="hover:text-white cursor-not-allowed">Partner with Us</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <p className="text-sm text-slate-400">Email: info@touroduduwa.com</p>
            <p className="text-sm text-slate-400">Phone: +234 800 ODUDUWA</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} TourOduduwa Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
