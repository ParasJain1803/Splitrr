import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Split",
  description: "Split your expenses with your friends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        >
          <Navigation />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
