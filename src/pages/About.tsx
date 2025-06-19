import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, Shield, Lightbulb, Heart, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-x-hidden">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .section-hidden {
          opacity: 0;
          transform: translateY(60px);
        }
        
        .parallax-slow {
          transform: translateY(${scrollY * 0.3}px);
        }
        
        .parallax-fast {
          transform: translateY(${scrollY * 0.5}px);
        }
      `}</style>

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/40"></div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl parallax-slow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl parallax-fast"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <Link to="/" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors mb-8">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              About
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Trojan Hacks
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 mb-12 leading-relaxed font-light">
              Inspiring the next generation of
              <br />
              <span className="text-white font-medium">cybersecurity innovators</span>
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div ref={addToRefs} className="section-hidden">
              <div className="relative">
                <Target className="h-16 w-16 text-blue-400 mb-8" />
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Our
                  <br />
                  <span className="text-blue-400">Mission</span>
                </h2>
                <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                  At Trojan Hacks, we believe cybersecurity isn't just a career—it's a responsibility. 
                  We're here to empower students with the knowledge, skills, and passion to protect our digital world.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-blue-200">Hands-on learning through workshops and challenges</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-blue-200">Building an inclusive cybersecurity community</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-blue-200">Connecting students with industry professionals</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-blue-200">Promoting ethical hacking practices</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div ref={addToRefs} className="section-hidden">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20">
                  <img 
                    src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Students collaborating on cybersecurity projects"
                    className="w-full h-80 object-cover rounded-2xl mb-6"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Empowering Tomorrow's Defenders</h3>
                    <p className="text-blue-200">
                      Every line of code, every security protocol, every ethical hack brings us closer to a safer digital future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div ref={addToRefs} className="section-hidden lg:order-2">
              <div className="relative">
                <Users className="h-16 w-16 text-purple-400 mb-8" />
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  The
                  <br />
                  <span className="text-purple-400">Experience</span>
                </h2>
                <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                  Trojan Hacks isn't just a hackathon—it's an immersive journey into the world of cybersecurity. 
                  Whether you're taking your first steps or you're already deep in the code, there's something here for you.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-black/30 rounded-2xl p-6 border border-purple-500/20">
                    <h4 className="text-2xl font-bold text-white mb-2">48</h4>
                    <p className="text-purple-200">Hours of Innovation</p>
                  </div>
                  <div className="bg-black/30 rounded-2xl p-6 border border-purple-500/20">
                    <h4 className="text-2xl font-bold text-white mb-2">150+</h4>
                    <p className="text-purple-200">Young Innovators</p>
                  </div>
                  <div className="bg-black/30 rounded-2xl p-6 border border-purple-500/20">
                    <h4 className="text-2xl font-bold text-white mb-2">∞</h4>
                    <p className="text-purple-200">Possibilities</p>
                  </div>
                  <div className="bg-black/30 rounded-2xl p-6 border border-purple-500/20">
                    <h4 className="text-2xl font-bold text-white mb-2">100%</h4>
                    <p className="text-purple-200">Unforgettable</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div ref={addToRefs} className="section-hidden lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
                  <img 
                    src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Hackathon participants working intensively"
                    className="w-full h-80 object-cover rounded-2xl mb-6"
                  />
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <p className="text-purple-200">Non-stop collaboration and creativity</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <p className="text-purple-200">Expert-led workshops and mentorship</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <p className="text-purple-200">Amazing prizes and recognition</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <p className="text-purple-200">Lifelong friendships and memories</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto">
          <div ref={addToRefs} className="section-hidden text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our <span className="text-green-400">Values</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              These core principles guide everything we do and shape the culture of our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div ref={addToRefs} className="section-hidden">
              <div className="bg-gradient-to-br from-green-900/40 to-black/40 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20 h-full">
                <Lightbulb className="h-12 w-12 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-green-200 leading-relaxed">
                  We encourage creative problem-solving and out-of-the-box thinking. Every challenge is an opportunity to innovate.
                </p>
              </div>
            </div>

            <div ref={addToRefs} className="section-hidden">
              <div className="bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20 h-full">
                <Users className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
                <p className="text-blue-200 leading-relaxed">
                  We believe in the power of teamwork and knowledge sharing. Together, we achieve more than we ever could alone.
                </p>
              </div>
            </div>

            <div ref={addToRefs} className="section-hidden">
              <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 h-full">
                <Shield className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
                <p className="text-purple-200 leading-relaxed">
                  We uphold the highest ethical standards in all our activities. Trust and honesty are the foundation of our community.
                </p>
              </div>
            </div>

            <div ref={addToRefs} className="section-hidden">
              <div className="bg-gradient-to-br from-yellow-900/40 to-black/40 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20 h-full">
                <Heart className="h-12 w-12 text-yellow-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Inclusion</h3>
                <p className="text-yellow-200 leading-relaxed">
                  We welcome participants from all backgrounds and skill levels. Diversity makes us stronger and more creative.
                </p>
              </div>
            </div>

            <div ref={addToRefs} className="section-hidden">
              <div className="bg-gradient-to-br from-red-900/40 to-black/40 backdrop-blur-sm rounded-3xl p-8 border border-red-500/20 h-full">
                <Award className="h-12 w-12 text-red-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Impact</h3>
                <p className="text-red-200 leading-relaxed">
                  We strive to make a positive difference in the cybersecurity community and create lasting change in the world.
                </p>
              </div>
            </div>

            <div ref={addToRefs} className="section-hidden">
              <div className="bg-gradient-to-br from-indigo-900/40 to-black/40 backdrop-blur-sm rounded-3xl p-8 border border-indigo-500/20 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
                  <p className="text-indigo-200 leading-relaxed">
                    We pursue excellence in everything we do, constantly pushing boundaries and raising the bar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto">
          <div ref={addToRefs} className="section-hidden text-center max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Join the <span className="text-blue-400">Revolution?</span>
              </h2>
              <p className="text-xl text-blue-200 mb-12 leading-relaxed">
                Be part of something bigger. Help us shape the future of cybersecurity, one hack at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/register"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Register Now
                </Link>
                <Link 
                  to="/team"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Meet the Team
                </Link>
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

export default About;
