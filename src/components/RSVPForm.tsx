import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, School, CheckCircle, Loader2 } from "lucide-react";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    year: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using your Formspree endpoint to automatically send emails

      // Using Formspree to send email automatically
      const formspreeResponse = await fetch('https://formspree.io/f/xldnrpdd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          school: formData.school,
          year: formData.year,
          _replyto: formData.email,
          _subject: `New Trojan Hacks Registration: ${formData.name}`,
          message: `New registration details:\n\nName: ${formData.name}\nEmail: ${formData.email}\nSchool: ${formData.school}\nYear Level: ${formData.year}\n\nRegistered at: ${new Date().toLocaleString()}`
        })
      });

      if (!formspreeResponse.ok) {
        throw new Error('Failed to send email');
      }

      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "Your RSVP has been sent automatically to the Trojan Hacks team.",
      });

    } catch (error) {
      console.error('Error sending email:', error);
      
      // Fallback to mailto if automatic email fails
      const emailBody = `RSVP for Trojan Hacks%0D%0A%0D%0AName: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ASchool: ${formData.school}%0D%0AYear Level: ${formData.year}%0D%0A%0D%0AI would like to register for Trojan Hacks!`;
      const mailtoLink = `mailto:trohacksmelbourne@gmail.com?subject=RSVP - Trojan Hacks Registration&body=${emailBody}`;
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      school: "",
      year: ""
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-900/40 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Registration Complete!</h3>
          <p className="text-green-200 mb-6">
            Thanks {formData.name}! Your RSVP has been automatically sent to the Trojan Hacks team. 
            We'll be in touch with more details soon.
          </p>
          <Button
            onClick={resetForm}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-2 px-6 rounded-xl font-semibold transition-all duration-300"
          >
            Register Another Person
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
      <div className="text-center mb-6">
        <User className="h-12 w-12 text-blue-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">RSVP Now</h3>
        <p className="text-blue-200">Save your spot at Trojan Hacks!</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="rsvp-name" className="text-white">Full Name</Label>
          <Input
            id="rsvp-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="bg-black/30 border-blue-500/30 text-white placeholder:text-blue-200/50 disabled:opacity-50"
            placeholder="Your full name"
          />
        </div>

        <div>
          <Label htmlFor="rsvp-email" className="text-white">Email</Label>
          <Input
            id="rsvp-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="bg-black/30 border-blue-500/30 text-white placeholder:text-blue-200/50 disabled:opacity-50"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <Label htmlFor="rsvp-school" className="text-white">School/Educational Institution</Label>
          <Input
            id="rsvp-school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="bg-black/30 border-blue-500/30 text-white placeholder:text-blue-200/50 disabled:opacity-50"
            placeholder="Your school or educational institution"
          />
        </div>

        <div>
          <Label htmlFor="rsvp-year" className="text-white">Year Level</Label>
          <Input
            id="rsvp-year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="bg-black/30 border-blue-500/30 text-white placeholder:text-blue-200/50 disabled:opacity-50"
            placeholder="e.g. Year 7, Year 12, Uni Year 2"
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
              Sending RSVP...
            </>
          ) : (
            <>
              <Mail className="h-5 w-5 mr-2" />
              RSVP Now!
            </>
          )}
        </Button>
      </div>

    </div>
  );
};

export default RSVPForm;