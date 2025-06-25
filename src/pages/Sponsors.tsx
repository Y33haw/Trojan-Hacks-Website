import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/logos/logo_white.png" alt="TroHacks Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white">Trojan Hacks</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-blue-400 transition-colors font-medium">Home</Link>
              <Link to="/about" className="text-white hover:text-blue-400 transition-colors font-medium">About</Link>
              <Link to="/team" className="text-white hover:text-blue-400 transition-colors font-medium">Team</Link>
              <Link to="/sponsors" className="text-blue-400 font-medium">Sponsors</Link>
              <Link to="/contact" className="text-white hover:text-blue-400 transition-colors font-medium">Contact</Link>
              <Link to="/register" className="text-white hover:text-blue-400 transition-colors font-medium">Register</Link>
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
              Our <span className="text-blue-400">Sponsors</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We're looking for amazing sponsors to make Trojan Hacks possible and support the next generation of cybersecurity innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/20 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Sponsors</span>
            </h2>

            {/* Sponsors Grid */}
            <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8 mb-8">
              {/* Code Crafters */}
              <div className="bg-white/10 p-6 rounded-xl flex flex-col items-center w-72">
                <a href="https://codecrafters.io" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                  <img src="/logos/code_crafters.png" alt="Code Crafters Logo" className="h-24 w-auto object-contain" />
                  <span className="mt-4 text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors text-center">
                    Code Crafters
                  </span>
                </a>
              </div>

              {/* Hack Club Bank */}
              <div className="bg-white/10 p-6 rounded-xl flex flex-col items-center w-72">
                <a href="https://hackclub.com/bank" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                  <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/ab6701fd3a2bdf1a0a1859bf93889131930f7a4a_hcb-icon-icon-dark.png" alt="Hack Club Bank Logo" className="h-24 w-auto object-contain" />
                  <span className="mt-4 text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors text-center">
                    Hack Club Bank
                  </span>
                </a>
              </div>

              {/* Flatlogic */}
              <div className="bg-white/10 p-6 rounded-xl flex flex-col items-center w-72">
                <a href="https://flatlogic.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                  <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/0301af17a6bed06665b39ce9ed02ebe98e9199a5_download.png" alt="Flatlogic Logo" className="h-24 w-auto object-contain" />
                  <span className="mt-4 text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors text-center">
                    Flatlogic
                  </span>
                </a>
              </div>
            </div>

            <p className="text-xl text-blue-200 leading-relaxed mb-2">
              Thank you to our amazing sponsors for supporting this event!
            </p>
            <p className="text-lg text-blue-300 italic">More Coming Soon...</p>
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-900/40 to-black/40 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/20 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Become a <span className="text-blue-400">Sponsor</span>
            </h2>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Join our mission to inspire the next generation of cybersecurity professionals.
              Partner with us to connect with top talent and showcase your commitment to innovation.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <a
                href="https://hc-cdn.hel1.your-objectstorage.com/s/v3/51c16e0023bef3c8872947ea6acfb270bd1638e5_trojan_hacks_prospectus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 w-full md:w-auto inline-flex items-center justify-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download Sponsorship Kit</span>
              </a>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 w-full md:w-auto inline-block text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-sm border-t border-blue-500/20 py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/logos/logo_white.png" alt="TroHacks Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-white">Trojan Hacks</span>
          </div>
          <p className="text-blue-200 mb-2">
            © 2025 Trojan Hacks. Powered by Trojan innovation and cybersecurity excellence.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-blue-300">
            <span>Fiscally sponsored by</span>
            <img src="/logos/hcb.png" alt="HCB Logo" className="h-5 w-auto" />
            <span>Hack Club Bank</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sponsors;
