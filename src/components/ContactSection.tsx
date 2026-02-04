import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:s.nithin6112@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const contactInfo = [{
    icon: Mail,
    title: 'Email',
    value: 's.nithin6112@gmail.com',
    href: 'mailto:s.nithin6112@gmail.com'
  }, {
    icon: Phone,
    title: 'Phone',
    value: '+91-9538186124 / +91-9019818807',
    href: 'tel:+919538186124'
  }, {
    icon: MapPin,
    title: 'Location',
    value: 'Shivamogga, Karnataka, India',
    href: '#'
  }];
  return <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-lg text-cyan-100">
            Let's connect! Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map(info => <a key={info.title} href={info.href} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>)}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="form-input" />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="form-input" />
            </div>
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="form-input" />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={5} className="form-input resize-none" />
            <button type="submit" className="btn-hero-primary flex items-center gap-2 w-full sm:w-auto justify-center">
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>;
};
export default ContactSection;