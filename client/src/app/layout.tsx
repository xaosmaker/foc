import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "foc - Fiber Optic Connections",
    template: "%s | foc - Fiber Optic Connections",
  },
  description:
    "Στόχος μας είναι να φέρουμε αξιόπιστη, υψηλών προδιαγραφών οπτική ίνα σε κάθε σπίτι και επιχείρηση.",
  keywords: [
    "εγκατάσταση οπτικών ινών",
    "ftth εγκατάσταση",
    "οπτική ίνα στο σπίτι",
    "cosmote fiber εγκατάσταση",
    "σύνδεση οπτικής ίνας σε σπίτι",
    "εταιρεία εγκατάστασης οπτικών ινών",
    "συγκόλληση οπτικής ίνας",
    "τεχνικός fiber στην Αθήνα / Θεσσαλονίκη / κλπ",
    "fttr Ελλάδα",

    "fiber optic installation Greece",
    "FTTH installation company",
    "fiber splicing services",
    "fiber to the home setup",
    "fiber cable contractor",
    "underground fiber installation",
    "aerial fiber installation",
    "fiber maintenance services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
