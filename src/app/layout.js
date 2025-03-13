//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

import { Crimson_Text } from "next/font/google";
import "./global.scss";

const inter = Crimson_Text({
  subsets: ["latin"],
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: "UIBM Portalino",
  description: "A collection of useful resources for UIBM developers.",
  robots: "noindex, nofollow",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={inter.className}>
          <section className="section">
              <div className={"container"} data-theme="dark">
                  {children}
              </div>
          </section>
      </body>
      </html>
  );
}
