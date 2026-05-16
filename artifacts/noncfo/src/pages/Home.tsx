import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu, X, ArrowRight, CheckCircle2, ChevronRight, BarChart3, FileText, Settings, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import stevenHeadshot from "@assets/Steve_headshot_1778950122528.jpg";

export default function Home() {
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormState, setContactFormState] = useState({
    submitted: false,
    name: "",
    email: "",
    phone: "",
    website: "",
    size: "",
    problem: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormState((prev) => ({ ...prev, submitted: true }));
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      toast({
        title: "Subscribed successfully",
        description: "Thank you for subscribing to our newsletter.",
      });
      setNewsletterEmail("");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-sans">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm py-4" : "bg-transparent py-6"
        }`}
        data-testid="navbar"
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="nav-logo"
          >
            <span className={`text-2xl font-light ${isScrolled ? "text-primary" : "text-white"}`}>Non</span>
            <span className="text-2xl font-bold font-serif text-accent">CFO</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {["Services", "Why", "How", "Resources", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
                data-testid={`nav-link-${item.toLowerCase()}`}
              >
                {item === "Why" ? "Why Us" : item === "How" ? "How We Work" : item}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-accent hover:bg-accent/90 text-white border-none rounded-md px-6 py-2"
              data-testid="nav-cta"
            >
              Schedule a Consultation
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? "text-primary" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 md:hidden">
            {["Services", "Why", "How", "Resources", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-left text-lg font-medium text-primary py-2 border-b border-gray-100"
              >
                {item === "Why" ? "Why Us" : item === "How" ? "How We Work" : item}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-accent hover:bg-accent/90 text-white w-full mt-4"
            >
              Schedule a Consultation
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 hero-grid-overlay opacity-20"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center mt-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-medium tracking-wide mb-8 bg-white/5 backdrop-blur-sm">
            Fractional CFO Services for Nonprofits
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white max-w-4xl leading-tight mb-6">
            Financial Clarity for Mission-Driven Organizations
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light mb-10 leading-relaxed">
            NonCFO gives nonprofits and faith-based organizations the strategic financial leadership they need to grow their impact—without the cost of a full-time CFO.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 h-14 text-base rounded-md w-full sm:w-auto"
              onClick={() => scrollTo("contact")}
            >
              Schedule a Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 h-14 text-base rounded-md w-full sm:w-auto"
              onClick={() => scrollTo("services")}
            >
              Explore Services
            </Button>
          </div>
          
          <div className="w-full max-w-4xl border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif text-accent font-bold mb-2">15+</div>
              <div className="text-white/80 text-sm font-medium tracking-wide uppercase">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif text-accent font-bold mb-2">40+</div>
              <div className="text-white/80 text-sm font-medium tracking-wide uppercase">Organizations Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif text-accent font-bold mb-2">100%</div>
              <div className="text-white/80 text-sm font-medium tracking-wide uppercase">Mission-Focused</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Services</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary">The Financial Partnership Your Mission Deserves</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <BarChart3 className="text-primary w-7 h-7" />
              </div>
              <h4 className="text-xl font-serif font-bold text-primary mb-4">Fractional CFO Services</h4>
              <ul className="space-y-3 mb-8 flex-grow text-gray-600">
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-primary shrink-0 mr-2" /> Executive-level financial oversight</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-primary shrink-0 mr-2" /> Board and funder engagement</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-primary shrink-0 mr-2" /> Strategic planning and scenario analysis</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-primary shrink-0 mr-2" /> Systems transformation</li>
              </ul>
              <button onClick={() => scrollTo("contact")} className="text-primary font-bold flex items-center hover:underline mt-auto">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <FileText className="text-secondary w-7 h-7" />
              </div>
              <h4 className="text-xl font-serif font-bold text-primary mb-4">Grants & Contracts Management</h4>
              <ul className="space-y-3 mb-8 flex-grow text-gray-600">
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-secondary shrink-0 mr-2" /> Pre- and post-award management</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-secondary shrink-0 mr-2" /> Cost proposals and budget proposals</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-secondary shrink-0 mr-2" /> Narrative alignment</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-secondary shrink-0 mr-2" /> T&C negotiations and compliance policy</li>
              </ul>
              <button onClick={() => scrollTo("contact")} className="text-secondary font-bold flex items-center hover:underline mt-auto">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Settings className="text-accent w-7 h-7" />
              </div>
              <h4 className="text-xl font-serif font-bold text-primary mb-4">Financial Operations & Analysis</h4>
              <ul className="space-y-3 mb-8 flex-grow text-gray-600">
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-accent shrink-0 mr-2" /> Cash flow modeling and scenario planning</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-accent shrink-0 mr-2" /> Budget vs actuals tracking</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-accent shrink-0 mr-2" /> KPI dashboards</li>
                <li className="flex items-start"><ChevronRight className="w-5 h-5 text-accent shrink-0 mr-2" /> Board-ready monthly financial packages</li>
              </ul>
              <button onClick={() => scrollTo("contact")} className="text-accent font-bold flex items-center hover:underline mt-auto">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">

          {/* Founder Story */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-20 pb-20 border-b border-gray-100">
            {/* Headshot */}
            <div className="w-full lg:w-2/5 flex-shrink-0">
              <div
                className="relative mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl"
                style={{ maxWidth: "400px", aspectRatio: "3/4", background: "#e8e4dc" }}
              >
                <img
                  src={stevenHeadshot}
                  alt="Steven H. Tran, Founder of NonCFO"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 8%" }}
                  data-testid="founder-headshot"
                />
                {/* Subtle gradient fade at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(15,36,68,0.18) 0%, transparent 100%)" }}
                />
                {/* Gold accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ background: "#c49a3c" }} />
              </div>
            </div>

            {/* Story */}
            <div className="w-full lg:w-3/5">
              <span className="text-sm font-bold tracking-widest uppercase mb-3 block" style={{ color: "#2d7d6e" }}>
                Meet the Founder
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: "#0f2444" }}>
                Steven H. Tran
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Steven founded NonCFO after more than 15 years working inside nonprofit finance—as a controller, CFO, and grants manager for organizations ranging from small faith-based ministries to multi-million-dollar human services agencies. He built NonCFO because he saw too many mission-driven leaders making critical decisions without the financial clarity they deserved.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                His approach is grounded in a simple belief: strong financial systems don't constrain a mission—they protect and accelerate it. From indirect cost negotiations to board-ready reporting, Steven brings the same rigor to a $300K organization that a Fortune 500 CFO brings to a billion-dollar one.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                He holds deep expertise in federal grant compliance, cost allocation, and nonprofit financial strategy, and has helped more than 40 organizations strengthen the financial foundations that their work depends on.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1" style={{ background: "#e5e0d6" }} />
                <span className="text-sm text-gray-400 italic font-light">Founder &amp; Principal Consultant, NonCFO</span>
                <div className="h-px flex-1" style={{ background: "#e5e0d6" }} />
              </div>
            </div>
          </div>

          {/* Why NonCFO heading + feature tiles */}
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/3">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Why Us</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Why Nonprofits Choose NonCFO</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're not just another consulting firm. We partner with leaders who are deeply committed to their mission—and we bring the same commitment to their financial health.
              </p>
            </div>
            
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Mission-First Mindset", desc: "We understand that finances are a means, not an end. Every recommendation amplifies your mission." },
                { title: "Board-Ready Expertise", desc: "We translate complex financial data into clear, actionable insights for boards and funders." },
                { title: "Tools That Last", desc: "We build frameworks and systems your team keeps using long after our engagement ends." },
                { title: "Nonprofit-Specific Guidance", desc: "From indirect cost rates to grant compliance, we speak the language of mission-driven finance." }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-background p-6 rounded-lg border border-gray-100 transition-all duration-300 cursor-default"
                  style={{ transitionProperty: "transform, box-shadow" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(15,36,68,0.12)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#c49a3c";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "";
                  }}
                >
                  <div className="w-8 h-1 bg-accent mb-4 rounded-full"></div>
                  <h4 className="text-lg font-serif font-bold text-primary mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how" className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Process</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary">How We Work</h3>
          </div>

          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gray-200 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Discovery Call", desc: "A no-pressure conversation to understand your situation, goals, and challenges." },
                { step: "02", title: "Financial Assessment", desc: "A thorough review of your current systems, reporting, and processes." },
                { step: "03", title: "Tailored Engagement", desc: "A service scope that matches your needs, timeline, and budget." },
                { step: "04", title: "Ongoing Partnership", desc: "Insights, tools, and frameworks—plus continued access to your strategic financial partner." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-md mb-6 relative">
                    <span className="text-3xl font-serif font-bold text-primary">{item.step}</span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">What Our Clients Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "NonCFO gave us the financial clarity we needed to confidently approach major funders. Our board finally understands our financial health at a glance.", author: "Executive Director, Community Development Nonprofit" },
              { quote: "Steven's approach is different—he doesn't just hand you reports. He builds your team's capacity and leaves you stronger than he found you.", author: "Founder & CEO, Faith-Based Social Services Organization" },
              { quote: "We had no idea how much we were leaving on the table with our indirect cost structure. NonCFO restructured our grants approach and it made a real difference.", author: "Development Director, Mid-size Human Services Nonprofit" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-xl border border-white/10 relative">
                <div className="text-6xl font-serif text-accent absolute top-4 left-6 opacity-50">"</div>
                <p className="text-lg font-light leading-relaxed mb-8 relative z-10 pt-4">
                  {testimonial.quote}
                </p>
                <div className="w-10 h-[1px] bg-accent mb-4"></div>
                <p className="text-sm text-white/70 font-medium uppercase tracking-wide">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Resources</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary">Tools That Empower Your Team</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              { title: "Indirect Rate Template", type: "Excel", desc: "A ready-to-use template for calculating and documenting your organization's indirect cost rate.", badge: "Coming Soon", active: false },
              { title: "Budget vs Actuals Dashboard", type: "Excel", desc: "Track performance against your approved budget with this visual, board-ready dashboard.", badge: "Coming Soon", active: false },
              { title: "Nonprofit Financial Toolkit", type: "PDF Guide", desc: "A comprehensive guide covering financial best practices, compliance, and reporting.", badge: "Download", active: true },
              { title: "Grant Budget Template", type: "Excel", desc: "Build accurate, funder-ready grant budgets with built-in cost allocation.", badge: "Coming Soon", active: false }
            ].map((resource, idx) => (
              <div key={idx} className="bg-background p-8 rounded-xl border border-gray-100 flex items-start gap-6 hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Download className={`w-6 h-6 ${resource.active ? "text-secondary" : "text-gray-400"}`} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{resource.type}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${resource.active ? "bg-secondary/10 text-secondary" : "bg-gray-200 text-gray-600"}`}>
                      {resource.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-primary mb-2">{resource.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{resource.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-primary text-white p-10 rounded-2xl text-center">
            <h4 className="text-2xl font-serif font-bold mb-4">Get Financial Insights in Your Inbox</h4>
            <p className="text-white/80 mb-6 font-light">Join other nonprofit leaders receiving our monthly insights on financial strategy and compliance.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 focus-visible:ring-accent"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-white h-12 px-8">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              {contactFormState.submitted ? (
                <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-primary mb-4">Thank you!</h3>
                  <p className="text-gray-600 text-lg">We'll be in touch within 1–2 business days.</p>
                </div>
              ) : (
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-3xl font-serif font-bold text-primary mb-8">Schedule Your Free Consultation</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <Input required placeholder="Jane Doe" className="bg-background border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <Input required type="email" placeholder="jane@nonprofit.org" className="bg-background border-gray-200" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone</label>
                        <Input type="tel" placeholder="(555) 123-4567" className="bg-background border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Organization Website</label>
                        <Input placeholder="www.nonprofit.org" className="bg-background border-gray-200" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Organization Size</label>
                      <Select required>
                        <SelectTrigger className="bg-background border-gray-200">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-250k">Under $250K</SelectItem>
                          <SelectItem value="250k-500k">$250K–$500K</SelectItem>
                          <SelectItem value="500k-1m">$500K–$1M</SelectItem>
                          <SelectItem value="1m-3m">$1M–$3M</SelectItem>
                          <SelectItem value="3m-10m">$3M–$10M</SelectItem>
                          <SelectItem value="over-10m">Over $10M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">What problem are you trying to solve?</label>
                      <Textarea required placeholder="Tell us a bit about your current situation..." className="min-h-[120px] bg-background border-gray-200" />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg">
                      Request My Free Consultation
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-4">
                      No commitment required. We'll respond within 1–2 business days.
                    </p>
                  </form>
                </div>
              )}
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl font-serif font-bold text-primary mb-8">What to Expect</h3>
              <div className="space-y-8 mb-12">
                {[
                  { step: "1", title: "We review your form", desc: "Our team reads every submission to ensure we're the right fit." },
                  { step: "2", title: "Schedule discovery call", desc: "We'll find a time that works for you for a 30-minute introductory chat." },
                  { step: "3", title: "Listen to your situation", desc: "We want to understand your specific challenges and goals." },
                  { step: "4", title: "Share honest feedback", desc: "If we can help, we'll propose next steps. If not, we'll point you in the right direction." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="font-serif text-lg text-primary italic mb-4">
                  "The initial call with Steven was unlike any consulting conversation I'd had. He actually listened."
                </p>
                <p className="text-sm font-bold text-gray-600 uppercase tracking-wider">
                  — Recent Client
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white pt-20 pb-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="mb-6">
                <span className="text-2xl font-light text-white">Non</span>
                <span className="text-2xl font-bold font-serif text-accent">CFO</span>
              </div>
              <p className="text-white/70 mb-6 font-medium tracking-wide">Finance on a Mission</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-serif font-bold mb-6 text-accent">Services</h4>
              <ul className="space-y-3 text-white/70">
                <li><button onClick={() => scrollTo("services")} className="hover:text-white transition-colors">Fractional CFO</button></li>
                <li><button onClick={() => scrollTo("services")} className="hover:text-white transition-colors">Grants & Contracts</button></li>
                <li><button onClick={() => scrollTo("services")} className="hover:text-white transition-colors">Financial Operations</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-serif font-bold mb-6 text-accent">Company</h4>
              <ul className="space-y-3 text-white/70">
                <li><button onClick={() => scrollTo("why")} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollTo("resources")} className="hover:text-white transition-colors">Resources</button></li>
                <li><button onClick={() => scrollTo("contact")} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-serif font-bold mb-6 text-accent">Contact</h4>
              <p className="text-white/70 mb-2">hello@noncfo.com</p>
              <p className="text-white/70">Based in the US</p>
              <Button onClick={() => scrollTo("contact")} className="mt-6 bg-transparent border border-white hover:bg-white/10 text-white">
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
            <p>© 2025 NonCFO. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
