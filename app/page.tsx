"use client";

import React from "react";
import { Camera, Users, Shield } from "lucide-react";
import Banner from "@/components/Banner";
import FeatureCard from "@/components/FeatureCard";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-gray-300">
      {/* Hero Section */}
      <Banner />
      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-white">Why Splitrr?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Splitrr is the easiest way to split bills with friends and family.
              We're trusted by millions of people around the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Camera className="h-6 w-6 text-white" />}
              title="Simple and intuitive"
              description="Our app is designed for ease of use, making expense tracking and splitting a breeze."
              gradientFrom="from-emerald-400"
              gradientTo="to-emerald-600"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6 text-white" />}
              title="For any group size"
              description="Whether it's a small group of friends or a large family, Splitrr handles it all."
              gradientFrom="from-blue-400"
              gradientTo="to-blue-600"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-white" />}
              title="Secure and reliable"
              description="Your data is safe with us. We use industry-standard security measures to protect your information."
              gradientFrom="from-purple-400"
              gradientTo="to-purple-600"
            />
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 text-center text-sm text-gray-300">
        By using <span className="text-emerald-400">Split</span>, you agree to
        our Terms of Service and Privacy Policy
      </footer>
    </div>
  );
}
