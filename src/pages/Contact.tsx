import { useState } from "react";
import { ArrowLeft, Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree to send email automatically
      const formspreeResponse = await fetch('https://formspree.io/f/xldnrpdd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _replyto: email,
          _subject: `Trojan Hacks - Contact Form: ${name}`,
          form_type: 'contact_form'
        })
      });

      if (!formspreeResponse.ok) {
        throw new Error('Failed to send email');
      }

      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully!",
        description: "Your message has been sent automatically to the Trojan Hacks team. We'll get back to you soon!",
      });

    } catch (error) {
      console.error('Error sending email:', error);
      
      // Fallback to mailto if automatic email fails
      const emailBody = `Contact Form Submission%0D%0A%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
      const mailtoLink = `mailto:trohacksmelbourne@gmail.com?subject=Trojan Hacks - Contact Form Submission&body=${emailBody}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Fallback: Email Client Opened",
        description: "Automatic sending failed. Please send the pre-filled email manually.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
  };

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
              <a href="#" className="text-white hover:text-blue-400 transition-colors font-medium">
                Home
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors font-medium">
                About
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors font-medium">
                Team
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors font-medium">
                Sponsors
              </a>
              <a href="#" className="text-blue-400 font-medium">
                Contact
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors font-medium">
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <a href="#" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors mb-8">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </a>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Have questions or suggestions? We'd love to hear from you! Reach out and let us know.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              {isSubmitted ? (
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
                  <p className="text-green-200 mb-6">
                    Thanks {name}! Your message has been automatically sent to the Trojan Hacks team. 
                    We'll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={resetForm}
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-2 px-6 rounded-xl font-semibold transition-all duration-300"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="contact-name" className="text-white">Your Name</Label>
                      <Input
                        id="contact-name"
                        type="text"
                        className="bg-black/30 border-blue-500/30 text-white placeholder:text-blue-200/50 disabled:opacity-50"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email" className="text-white">Your Email</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        className="bg-black/30 border-blue-500/30 text-white placeholder:text-blue-200/50 disabled:opacity-50"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-message" className="text-white">Message</Label>
                      <Textarea
                        id="contact-message"
                        className="bg-black/30 border-blue-500/30 text-white placeholder:text-blue-200/50 h-24 resize-none disabled:opacity-50"
                        placeholder="Write your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Mail className="h-5 w-5 mr-2" />
                          Send Message Automatically
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-black/20 rounded-xl border border-blue-500/10">
                    <p className="text-blue-200 text-sm text-center">
                      🔒 Your message will be sent directly to trohacksmelbourne@gmail.com
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Contact Information */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                    <p className="text-blue-200">trohacksmelbourne@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-white">Phone</h3>
                    <p className="text-blue-200">+61 0459 403 003</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-white">Address</h3>
                    <p className="text-blue-200">Melbourne, VIC (Venue TBD)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-sm rounded-xl border border-blue-500/10">
                <h3 className="text-lg font-semibold text-white mb-3">Quick Response Times</h3>
                <p className="text-blue-200 text-sm">
                  We typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to call us directly at the number above.
                </p>
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

export default Contact;