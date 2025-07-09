import React from "react";
import { Button } from "@/components/ui/button";
import { Users, Calculator, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SignUpButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Banner() {
  const router = useRouter();
  const { isSignedIn } = useUser ? useUser() : { isSignedIn: false };

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Split expenses with{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  friends, effortlessly
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Splitrr simplifies shared expenses, making it easy to track and
                settle balances with friends. No more awkward conversations
                about who owes what.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {isSignedIn ? (
                <Link href="/group">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-4 text-lg"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              ) : (
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-4 text-lg"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </SignUpButton>
              )}
            </div>
          </div>
          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-3xl p-8 backdrop-blur-sm border border-emerald-400/30">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-center h-80">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-4xl text-white">+</div>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <Calculator className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="text-white font-semibold text-xl">
                      Split & Track
                    </div>
                    <div className="text-gray-400">Expenses made simple</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
