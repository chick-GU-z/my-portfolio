import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const handlePricingInquiry = () => {
    const subject = "Project Pricing Inquiry";
    const body = `Hi,

I'm interested in learning more about your design services and pricing.

Could you please provide information about:
- Your rates for different types of projects
- Timeline estimates
- Your design process

I'm looking for help with:
[Please specify: Interior Design / Furniture Modeling / Exhibition Design / UI/UX Design]

Project details:
[Please describe your project]

Best regards,
[Your name]`;

    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-32 px-6 bg-muted pattern-lines relative">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-foreground/5"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-foreground/5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/4 h-px bg-foreground/5"></div>
        <div className="absolute top-1/4 right-1/3 w-px h-1/2 bg-foreground/5"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-px bg-foreground/30"></div>
              <span className="text-muted-foreground tracking-widest uppercase text-sm">Contact</span>
              <div className="w-16 h-px bg-foreground/30"></div>
            </div>
            <h2 className="text-4xl md:text-5xl tracking-tight">
              Let&apos;s Create<br />
              <span className="text-muted-foreground">Something Great</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Interested in collaborating? I&apos;d love to hear about your project 
              and discuss how we can create something meaningful together.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {[
            { icon: Mail, title: 'Email', value: 'your.email@example.com', link: 'mailto:your.email@example.com' },
            { icon: Phone, title: 'Phone', value: '+49 123 456 7890', link: 'tel:+491234567890' },
            { icon: MapPin, title: 'Location', value: 'Berlin, Germany', link: null }
          ].map((contact, index) => (
            <div key={contact.title} className="space-y-6 relative">
              <div className="w-16 h-16 mx-auto bg-background border border-border flex items-center justify-center">
                <contact.icon size={24} className="text-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="tracking-wide">{contact.title}</h3>
                {contact.link ? (
                  <a 
                    href={contact.link}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{contact.value}</p>
                )}
              </div>
              {/* Connecting line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-8 left-full w-12 h-px bg-border"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="space-y-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-px bg-foreground/20"></div>
            <div className="w-2 h-2 bg-foreground/20 rounded-full"></div>
            <div className="w-8 h-px bg-foreground/20"></div>
          </div>
          <button
            onClick={handlePricingInquiry}
            className="inline-flex items-center justify-center px-12 py-4 bg-foreground text-background border border-foreground hover:bg-background hover:text-foreground transition-all duration-300 tracking-wide"
          >
            Inquire About Pricing
          </button>
        </div>
      </div>
    </section>
  );
}