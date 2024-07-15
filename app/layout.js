import { Crimson_Text } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Crimson_Text({
  subsets: ["latin"],
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: "UIBM CheatSheet",
  description: "The single page you need to remember all the UIBM components",
  robots: "noindex, nofollow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
  );
}
