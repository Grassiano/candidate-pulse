import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/components/SettingsProvider";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Candidate Pulse",
  description: "AI-powered candidate interview summaries — from call to decision",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5D07E2",
};

// Inline script that runs before React hydrates — applies stored theme/lang
// to <html> to prevent FOUC (flash of unstyled content).
const themeInitScript = `
(function(){
  try {
    var lang = localStorage.getItem('cp.lang');
    var theme = localStorage.getItem('cp.theme');
    var html = document.documentElement;
    if (lang === 'en') { html.lang = 'en'; html.dir = 'ltr'; }
    else { html.lang = 'he'; html.dir = 'rtl'; }
    if (theme === 'dark') html.classList.add('dark');
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh flex flex-col">
        <SettingsProvider>{children}</SettingsProvider>
      </body>
    </html>
  );
}
