import { Calendar, MapPin, Users, Trophy, ArrowRight } from "lucide-react";
import TypingAnimation from "../components/TypingAnimation";

// Mock Link component
const Link = ({ to, className, children, ...props }) => {
  return (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Navigation - from second version */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/logos/logo_white.png" 
                alt="TroHacks Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-white">Trojan Hacks</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-blue-400 font-medium">
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
              <Link to="/dashboard" className="text-white hover:text-blue-400 transition-colors font-medium">
                Dashboard
              </Link>
              <Link to="/register" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Register
              </Link>
              
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - from first version with modifications */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/logos/logo_white.png" 
              alt="TroHacks Logo" 
              className="h-32 w-auto mx-auto mb-6 animate-fade-in"
            />
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
              <TypingAnimation />Hacks
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto animate-fade-in">
              The Ultimate Student Hackathon - Build Cool Tech Projects with a Secret Twist!
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <Calendar className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Date</h3>
              <p className="text-blue-200">April 2026 (TBD)</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <MapPin className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-blue-200">Melbourne, Venue TBD</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Hackers</h3>
              <p className="text-blue-200">150+ Expected</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <Trophy className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Prizes</h3>
              <p className="text-blue-200">Value TBD</p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Link to="/register" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 w-full md:w-auto">
              <span>Register Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/about" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 w-full md:w-auto">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - from first version */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Build Something <span className="text-blue-400">Amazing</span>
            </h2>
            <p className="text-xl text-blue-200 mb-12 leading-relaxed">
              Join us for 48 hours of building, learning, and having fun! Perfect for students from Year 7 to Year 12 or Under 18! 
              No experience needed - just bring your creativity and we'll teach you the rest!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Build</h3>
                <p className="text-blue-200">
                  Create awesome websites, apps, and robots with your team. We provide all the tools and help you need!
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Learn</h3>
                <p className="text-blue-200">
                  Attend fun workshops about coding, cybersecurity, and robotics. Learn from experts and mentors!
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Win</h3>
                <p className="text-blue-200">
                  Show off your project and win awesome prizes! Plus free food, drinks, and cool swag for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - from second version */}
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

export default Index;