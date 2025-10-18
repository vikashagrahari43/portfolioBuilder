"use client";
import React, { useState } from 'react';
import { Menu, X, Sparkles, Palette, Code, Zap, Smartphone, Rocket, Link2 } from 'lucide-react';
import Link from 'next/link';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Template {
  emoji: string;
  title: string;
  category: string;
  description: string;
  gradient: string;
}

interface Stat {
  number: string;
  label: string;
}

const LandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const features: Feature[] = [
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Beautiful Templates",
      description: "Choose from dozens of professionally designed templates that make you stand out."
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: "Easy Customization",
      description: "Edit every aspect of your portfolio with our intuitive drag-and-drop editor."
    },
    {
      icon: <Link2 className="w-7 h-7" />,
      title: "Instant Live Preview",
      description: "Generate a shareable link instantly and preview your portfolio in real-time."
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Fully Responsive",
      description: "Your portfolio looks perfect on all devices - mobile, tablet, and desktop."
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance. Your portfolio loads in milliseconds."
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "One-Click Deploy",
      description: "Publish your portfolio with a single click and get your custom domain."
    }
  ];

  const templates: Template[] = [
    { emoji: "🎨", title: "Creative Pro", category: "Design", description: "Perfect for designers and artists", gradient: "from-purple-500 to-pink-500" },
    { emoji: "💻", title: "Developer", category: "Tech", description: "Showcase your code projects", gradient: "from-blue-500 to-cyan-500" },
    { emoji: "📸", title: "Photography", category: "Media", description: "Beautiful image galleries", gradient: "from-orange-500 to-red-500" },
    { emoji: "✍️", title: "Writer", category: "Content", description: "Elegant blog and articles", gradient: "from-green-500 to-teal-500" },
    { emoji: "🎬", title: "Video Creator", category: "Media", description: "Showcase your video work", gradient: "from-pink-500 to-rose-500" },
    { emoji: "💼", title: "Business", category: "Corporate", description: "Professional and minimal", gradient: "from-indigo-500 to-purple-500" }
  ];

  const stats: Stat[] = [
    { number: "50K+", label: "Active Users" },
    { number: "100+", label: "Templates" },
    { number: "4.9/5", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="text-3xl font-bold tracking-tight">
              <span className="text-white">Banao</span>
              <span className="text-zinc-600">.com</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
             <Link href={"login"} >Login</Link>
                <Link href={"signup"} >Signup</Link>
              <button className="bg-white text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-zinc-200 transition-all">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-zinc-800">
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-zinc-400 hover:text-white transition-colors py-2 font-medium">Features</a>
                <a href="#templates" className="text-zinc-400 hover:text-white transition-colors py-2 font-medium">Templates</a>
                <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors py-2 font-medium">Pricing</a>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-zinc-200 transition-all mt-2">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-zinc-400" />
            <span className="text-sm text-zinc-400 font-medium">Trusted by 50,000+ creators</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Build Your Dream <br />
            <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
              Portfolio in Minutes
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Choose from stunning templates, customize everything, and generate a live preview link. No coding required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-zinc-200 transition-all text-base">
              Start Building Free
            </button>
            <button className="bg-transparent border border-zinc-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-zinc-900 transition-all text-base">
              Browse Templates
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-12 justify-center mt-20 pt-16 border-t border-zinc-800">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-zinc-600 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-zinc-900 text-zinc-400 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold mb-6">
              Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Why Choose Banao?</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Everything you need to create a stunning portfolio that stands out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-800">
            {features.map((feature, index) => (
              <div key={index} className="bg-zinc-950 p-10 hover:bg-zinc-900 transition-colors">
                <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-zinc-900 text-zinc-400 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold mb-6">
              Templates
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Choose Your Template</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              Start with a professionally designed template and make it your own
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div key={index} className="group bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all cursor-pointer hover:-translate-y-2">
                <div className={`h-72 bg-gradient-to-br ${template.gradient} flex items-center justify-center text-7xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <span className="relative z-10">{template.emoji}</span>
                </div>
                <div className="p-8">
                  <div className="inline-block bg-zinc-900 text-zinc-500 px-3 py-1 rounded-full text-xs uppercase tracking-wider font-semibold mb-4">
                    {template.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                  <p className="text-zinc-600 text-sm">{template.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white text-black rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-black/[0.02] rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Build Your Portfolio?</h2>
              <p className="text-lg text-zinc-700 mb-10 max-w-xl mx-auto">
                Join thousands of creators who trust Banao.com to showcase their work
              </p>
              <button className="bg-black text-white px-10 py-4 rounded-lg font-semibold hover:bg-zinc-800 transition-all inline-flex items-center gap-2">
                Start Building Now - It's Free
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Banao.com</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Build stunning portfolios in minutes. No coding required.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">Features</a></li>
                <li><a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">Templates</a></li>
                <li><a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">Pricing</a></li>
                <li><a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">Examples</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">About</a></li>
                <li><a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">Privacy</a></li>
                <li><a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">Terms</a></li>
                <li><a href="#" className="text-zinc-600 hover:text-white transition-colors text-sm">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 text-center text-zinc-600 text-sm">
            © 2024 Banao.com - Build Your Portfolio with Ease
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;