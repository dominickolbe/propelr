import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Propelr",
  description: "NextGen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        async
        src="https://hello.domnc.app/hello.js"
        data-ackee-server="https://hello.domnc.app"
        data-ackee-domain-id="1f4776fa-4767-49c8-a111-38f3c3f5bfcd"
      ></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
