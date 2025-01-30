import React from 'react';
import { Heart, Users, MessageCircle, Shield, Moon, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1618543306904-f4eec959d22e?auto=format&fit=crop&q=80")',
            filter: 'brightness(0.3)'
          }}
        />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            NikahBangla
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8">
            Finding your soulmate through faith and tradition
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
            Start Your Journey
          </button>
        </div>
      </header>
 
    </div>
  );
}

 

export default App;