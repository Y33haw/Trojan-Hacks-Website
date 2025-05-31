
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users, Trophy } from "lucide-react";
import RSVPForm from "@/components/RSVPForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Navigation */}
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
              <Link to="/register" className="text-blue-400 font-medium">
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
              Register for <span className="text-blue-400">Trojan Hacks</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Ready to join Melbourne's biggest student hackathon? Sign up below and we'll keep you updated!
            </p>
          </div>
        </div>
      </section>

      {/* Event Info & Registration */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Event Details */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Event Details</h2>
                
                <div className="grid gap-6 mb-8">
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                    <Calendar className="h-8 w-8 text-blue-400 mb-3" />
                    <h3 className="text-white font-semibold mb-2">When</h3>
                    <p className="text-blue-200">April 2026 (Date TBD)</p>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                    <MapPin className="h-8 w-8 text-blue-400 mb-3" />
                    <h3 className="text-white font-semibold mb-2">Where</h3>
                    <p className="text-blue-200">Melbourne, Venue TBD</p>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                    <Users className="h-8 w-8 text-blue-400 mb-3" />
                    <h3 className="text-white font-semibold mb-2">Who</h3>
                    <p className="text-blue-200">150+ Students (Year 7 to Year 12 or Under 18)</p>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                    <Trophy className="h-8 w-8 text-blue-400 mb-3" />
                    <h3 className="text-white font-semibold mb-2">Prizes</h3>
                    <p className="text-blue-200">Amazing prizes (Value TBD)</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">What to Expect</h3>
                  <ul className="space-y-2 text-blue-200">
                    <li>• 48 hours of building and learning</li>
                    <li>• Workshops on cybersecurity, coding, and robotics</li>
                    <li>• Free food, drinks, and swag</li>
                    <li>• Mentors to help with your projects</li>
                    <li>• Awesome prizes for the best projects</li>
                    <li>• New friends and unforgettable memories</li>
                  </ul>
                </div>
              </div>

              {/* RSVP Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Reserve Your Spot</h2>
                <RSVPForm />
                
                <div className="mt-8 p-6 bg-black/30 rounded-xl border border-blue-500/10">
                  <h4 className="text-lg font-semibold text-white mb-2">What happens next?</h4>
                  <p className="text-blue-200 text-sm">
                    After you RSVP, we'll send you updates about the event including the exact date, venue, 
                    and how to prepare. Registration is completely free!
                  </p>
                </div>
              </div>
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

export default Register;
