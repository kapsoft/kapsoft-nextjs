'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Code, Zap, Shield, ArrowRight, ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function KapsoftWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clients = [
    { name: 'Pratt & Whitney', industry: 'Aerospace', gradient: 'from-blue-500 to-sky-600' },
    { name: 'Datalogic', industry: 'Technology', gradient: 'from-purple-500 to-pink-600' },
    { name: 'Megger', industry: 'Electrical Testing', gradient: 'from-yellow-500 to-orange-600' },
    { name: 'Accusort', industry: 'Automation', gradient: 'from-green-500 to-teal-600' },
    { name: 'Hershey Foods', industry: 'Food & Beverage', gradient: 'from-amber-600 to-yellow-700' },
    { name: 'RushOrderTees', industry: 'E-commerce', gradient: 'from-red-500 to-rose-600' },
    { name: 'Orbit/FR', industry: 'Radar Antenna Testing', gradient: 'from-indigo-500 to-blue-600' },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Software Development',
      description: 'From MVPs to enterprise solutions, we build scalable applications that drive your business forward.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Cloud Solutions']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Leverage cutting-edge AI to automate processes and gain insights from your data.',
      features: ['RAG', 'Computer Vision', 'NLP Solutions', 'Predictive Analytics', 'Model Training']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Architecture & Consulting',
      description: 'Expert guidance on technology decisions and system design for optimal performance.',
      features: ['System Design', 'Code Reviews', 'Performance Optimization', 'Tech Strategy']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Kapsoft Logo"
                width={56}
                height={56}
                className="rounded"
              />
              <span className="text-2xl font-bold text-gray-900">
                Kapsoft
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#tech" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Technologies</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-medium">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Services</a>
              <a href="#tech" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Technologies</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mx-auto mb-8 animate-float">
              <Image
                src="/bulb-sketch_50percent.png"
                alt="Innovation Bulb"
                width={233}
                height={233}
                className="rounded-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              We do the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hard Things</span>!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-delay">
              Give your project a boost with Kapsoft.<br />
              Architecture and Design are head of the class.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#clients" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all">
                View Our Work
              </a>
            </div>
          </div>
          <div className="mt-16 flex justify-center animate-bounce">
            <a href="#services">
              <ChevronDown className="h-8 w-8 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              We help companies <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">get the job done</span>
            </h2>
            <p className="text-xl text-gray-600">
              Get immediate results on your next project with our cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <ArrowRight className="h-4 w-4 mr-2 text-purple-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600">We've helped these amazing companies tackle their hardest challenges</p>
          </div>
        </div>

        {/* Client logos carousel */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={`client-${index}`} className="flex-shrink-0 w-64 h-32 bg-white rounded-xl flex flex-col items-center justify-center hover:shadow-xl transition-all border border-gray-200 group overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="text-center relative z-10">
                  <div className="text-xl font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors">{client.name}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{client.industry}</div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop with extra spacing */}
            <div className="w-24"></div>
            {clients.map((client, index) => (
              <div key={`client-dup-${index}`} className="flex-shrink-0 w-64 h-32 bg-white rounded-xl flex flex-col items-center justify-center hover:shadow-xl transition-all border border-gray-200 group overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="text-center relative z-10">
                  <div className="text-xl font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors">{client.name}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{client.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">
              Plus many more innovative companies. <span className="text-blue-600 font-semibold">Contact us</span> to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Innovation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Kapsoft, we specialize in tackling complex technical challenges that others shy away from. 
                Our team of expert developers and architects bring years of experience across diverse industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're building a new product, modernizing legacy systems, or implementing cutting-edge AI solutions, 
                we have the expertise to deliver results that exceed expectations.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">30+</p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">100+</p>
                  <p className="text-sm text-gray-500">Projects Delivered</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-pink-600">100%</p>
                  <p className="text-sm text-gray-500">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">Our Philosophy</h3>
                  <p className="text-gray-600">
                    "We believe in doing the hard things because that's where the real value lies. 
                    Complex problems require elegant solutions, and that's exactly what we deliver."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get Started</span>?
            </h2>
            <p className="text-xl text-gray-600">Let's discuss how we can help with your next project</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"></textarea>
                </div>
                <button onClick={() => alert('Contact form will be connected to your backend API')} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all">
                  Send Message
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-gray-700">kaplan@kapsoft.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-gray-700">610-585-6454</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Philadelphia, PA</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow us</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/kapsoft/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                    <Github className="h-5 w-5 text-gray-700" />
                  </a>
                  <a href="https://www.linkedin.com/in/kapsoft/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                    <Linkedin className="h-5 w-5 text-gray-700" />
                  </a>
                  <a href="https://x.com/kapsoft" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                    <Twitter className="h-5 w-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2025 Kapsoft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}