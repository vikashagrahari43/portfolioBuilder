"use client";
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Github, Chrome } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Form submitted:', formData);
    }
  };

  const portfolioItems = [
    { title: 'Creative Portfolio', color: 'from-purple-500 to-pink-500', emoji: '🎨' },
    { title: 'Developer Showcase', color: 'from-blue-500 to-cyan-500', emoji: '💻' },
    { title: 'Photography', color: 'from-orange-500 to-red-500', emoji: '📸' },
    { title: 'Design Work', color: 'from-green-500 to-teal-500', emoji: '✨' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-white">Banao</span>
              <span className="text-zinc-600">.com</span>
            </h1>
            <p className="text-zinc-500 mt-2">Create your portfolio account</p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-8">
            <button 
              onClick={() => console.log('Google login')}
              className="w-full flex items-center justify-center gap-3 bg-white text-black px-6 py-3.5 rounded-lg font-semibold hover:bg-zinc-200 transition-all"
            >
              <Chrome className="w-5 h-5" />
              Continue with Google
            </button>
            <button 
              onClick={() => console.log('GitHub login')}
              className="w-full flex items-center justify-center gap-3 bg-zinc-900 text-white border border-zinc-800 px-6 py-3.5 rounded-lg font-semibold hover:bg-zinc-800 transition-all"
            >
              <Github className="w-5 h-5" />
              Continue with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-zinc-950 text-zinc-500">Or continue with email</span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500 w-5 h-5" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg pl-12 pr-4 py-3.5 focus:outline-none focus:border-zinc-600 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg pl-12 pr-4 py-3.5 focus:outline-none focus:border-zinc-600 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-400 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg pl-12 pr-12 py-3.5 focus:outline-none focus:border-zinc-600 transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-zinc-400 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500 w-5 h-5" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg pl-12 pr-12 py-3.5 focus:outline-none focus:border-zinc-600 transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-2 text-sm text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-white text-black px-6 py-3.5 rounded-lg font-semibold hover:bg-zinc-200 transition-all mt-6"
            >
              Create Account
            </button>
          </div>

          {/* Sign In Link */}
          <p className="text-center text-zinc-500 text-sm mt-6">
            Already have an account?{' '}
            <a href="#" className="text-white hover:text-zinc-300 font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Animated Portfolio Showcase (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-black items-center justify-center p-12 relative overflow-hidden">
        {/* Animated Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 w-full max-w-lg">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            Build Your Dream Portfolio
          </h2>
          <p className="text-zinc-400 text-lg mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of creators showcasing their work with beautiful, customizable portfolios.
          </p>

          {/* Animated Portfolio Cards */}
          <div className="space-y-4">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 hover:transform hover:scale-105 transition-all cursor-pointer animate-slide-up opacity-0"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-2xl animate-bounce-subtle`}>
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-12 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-zinc-600 to-zinc-400 animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute -top-8 right-8 w-32 h-32 border border-zinc-800/50 rounded-full animate-spin-slow"></div>
          <div className="absolute -bottom-8 left-8 w-24 h-24 border border-zinc-800/50 rounded-full animate-spin-slow" style={{ animationDelay: '1s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 -right-4 w-16 h-16 border border-zinc-800/30 rounded-lg animate-float"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RegisterPage;