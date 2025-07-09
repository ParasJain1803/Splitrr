import React from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="relative z-50 bg-gray-900 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 text-emerald-400"
              style={{ fill: "currentColor" }}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-3xl font-bold text-white">Splitrr</span>
          </Link>

          <div className="flex items-center space-x-12">
            {/* Added new link for 'Your Groups' */}
            <Link
              href="/groups"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Your Groups
            </Link>
            <Link
              href="/group"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Create Group
            </Link>
            <Link
              href="/expense"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Add Expense
            </Link>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8",
                  userButtonTrigger: "focus:shadow-none",
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
