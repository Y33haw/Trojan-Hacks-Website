import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";

// Mock Link component
const Link = ({ to, className, children, ...props }) => {
  return (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Aarav J",
      role: "Lead Organizer",
      bio: "Ethical Hacker, Cybersecurity Enthusiast, @CyberZenDev",
      image: "/team/aarav.png",
      github: "https://github.com/The-UnknownHacker",
      linkedin: "https://www.linkedin.com/in/aarav-jhamb-5268272a6/",
      email: "aarav@trohacks.xyz"
    },
    {
      name: "Prabhav R.",
      role: "Lead Organizer",
      bio: "Everything in between - filling in the gaps and holes", 
      image: "/team/prabhav.png",
      github: "https://github.com/Y33haw",
      email: "prabhav@trohacks.xyz"
    },
    {
      name: "Jaxon B.",
      role: "Lead Organizer",
      bio: "Factorio addict", 
      image: "/team/jaxon.png",
      github: "https://github.com/beamanj09",
      email: "beamanj09@trohacks.xyz"
    },
    {
      name: "Methuka P.K.",
      role: "Senior Resources Manager",
      bio: "Year 10 student, passionate about Physics and Engineering",
      image: "/team/methuka.png",
      github: "https://github.com/man-samosa",
      email: "mgmkx@trohacks.xyz"
    },
    {
      name: "Kai K.",
      role: "Senior Onboarder and Relations",
      bio: "Coming Soon",
      image: "/team/kai.png",
      github: "https://github.com/man-samosa",
      email: "kai@trohacks.xyz"
    },
    {
      name: "Yuvraj B.",
      role: "Onboarding and Judging",
      bio: "HMU : If you have a buisness idea",
      image: "/team/yuvra.png",
      email: "uv@trohacks.xyz"
    },
  ];

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
              <Link to="/team" className="text-blue-400 font-medium">
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
              Meet the <span className="text-blue-400">Team</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              The passionate individuals behind TroHacks, working tirelessly to create an unforgettable cybersecurity experience.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 group">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center rounded-full border-4 border-blue-500/30 group-hover:border-blue-400/60 transition-colors scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-blue-200 mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-blue-300 transition-all duration-300"
                      aria-label={`${member.name}'s GitHub profile`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-blue-300 transition-all duration-300"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-full bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-blue-300 transition-all duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-sm border-t border-blue-500/20 py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/logos/logo.png" 
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

export default Team;