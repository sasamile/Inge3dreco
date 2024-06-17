import type { Metadata } from "next";
import { Acme, Indie_Flower } from "next/font/google";
import "./globals.css";

const acme = Acme({ weight: "400", subsets: ["latin"] });
const indieFlower = Indie_Flower({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${acme.className} `}>
        {children}
      </body>
    </html>
  );
}