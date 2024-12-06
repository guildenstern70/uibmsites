/*
 * MiMIT UIBM CheatSheet
 *
 * Copyright (C) 2024 IBM Consulting Italy - All Rights Reserved
 * This is copyrighted software
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential by IBM Consulting
 *
 */

import { Crimson_Text } from "next/font/google";
import "./globals.css";

const inter = Crimson_Text({
  subsets: ["latin"],
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: "UIBM CheatSheet",
  description: "A collection of useful resources for UIBM developers.",
  robots: "noindex, nofollow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
  );
}
