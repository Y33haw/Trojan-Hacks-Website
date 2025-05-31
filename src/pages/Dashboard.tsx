import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users, Trophy, Construction } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/logos/logo.png" 
                alt="TroHacks Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-white">Trojan Hacks</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-blue-400 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-blue-400 transition-colors font-medium">
                About
              </Link>
              <Link to="/team" className="text-white hover:text-blue-400 transition-colors font-medium">
                Team
              </Link>
              <Link to="/sponsors" className="text-white hover:text-blue-400 transition-colors font-medium">
                Sponsors
              </Link>
              <Link to="/contact" className="text-white hover:text-blue-400 transition-colors font-medium">
                Contact
              </Link>
              <Link to="/register" className="text-white hover:text-blue-400 transition-colors font-medium">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors mb-8">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Dashboard <span className="text-blue-400">Portal</span>
            </h1>
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 max-w-2xl mx-auto">
              <Construction className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Coming Soon!</h2>
              <p className="text-yellow-200 text-lg">
                The dashboard is under construction. We're working hard to bring you an amazing experience!
              </p>
              <p className="text-yellow-300 mt-4">
                In the meantime, <Link to="/register" className="text-blue-400 hover:text-blue-300 underline">register for the event</Link> to stay updated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-sm border-t border-blue-500/20 py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/logos/logo_white.png" 
              alt="TroHacks Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-white">Trojan Hacks</span>
          </div>
          <p className="text-blue-200 mb-2">
            © 2025 Trojan Hacks. Powered by Trojan innovation and cybersecurity excellence.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-blue-300">
            <span>Fiscally sponsored by</span>
            <img 
              src="/logos/hcb.png" 
              alt="HCB Logo" 
              className="h-5 w-auto"
            />
            <span>Hack Club Bank</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
