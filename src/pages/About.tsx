import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const About = () => {
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
              <Link to="/about" className="text-blue-400 font-medium">
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
              About <span className="text-blue-400">Trojan Hacks</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Learn more about our mission to inspire the next generation of cybersecurity professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Our Mission */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-blue-200 leading-relaxed">
                At Trojan Hacks, our mission is to empower students with the knowledge, skills, and passion to excel in the field of cybersecurity. 
                We believe that cybersecurity is not just a career, but a critical responsibility in our increasingly digital world.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-blue-200">
                <li>Provide hands-on learning experiences through workshops and challenges</li>
                <li>Foster a collaborative and inclusive community of cybersecurity enthusiasts</li>
                <li>Connect students with industry professionals and career opportunities</li>
                <li>Promote ethical hacking and responsible cybersecurity practices</li>
              </ul>
            </div>

            {/* What to Expect */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">What to Expect</h2>
              <p className="text-blue-200 leading-relaxed">
                Trojan Hacks is more than just a hackathon – it's an immersive experience designed to challenge and inspire. 
                Whether you're a beginner or an experienced hacker, you'll find something to learn and enjoy.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-blue-200">
                <li>48 hours of non-stop hacking and collaboration</li>
                <li>Workshops on a variety of cybersecurity topics</li>
                <li>Opportunities to network with industry experts</li>
                <li>Delicious food, refreshing drinks, and awesome swag</li>
                <li>Prizes for the most innovative and impactful projects</li>
              </ul>
            </div>

            {/* Our Values */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-blue-200 leading-relaxed">
                We are guided by a set of core values that define our culture and drive our actions.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-blue-200">
                <li>Innovation: We encourage creative problem-solving and out-of-the-box thinking.</li>
                <li>Collaboration: We believe in the power of teamwork and knowledge sharing.</li>
                <li>Integrity: We uphold the highest ethical standards in all our activities.</li>
                <li>Inclusion: We welcome participants from all backgrounds and skill levels.</li>
                <li>Impact: We strive to make a positive difference in the cybersecurity community and beyond.</li>
              </ul>
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

export default About;
