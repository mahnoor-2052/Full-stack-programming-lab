import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HotSpring Portable Spas",
  description: "Premium portable hot tubs and spas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
