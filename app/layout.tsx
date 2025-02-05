import "./globals.css";
import { Quicksand } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "EV Matcher",
  description: "Find your perfect electric vehicle match",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
