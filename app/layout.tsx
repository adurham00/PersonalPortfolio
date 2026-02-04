import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./app.css";
import Navbar from "./components/Navbar";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abigail Durham | UI/UX Designer & Portfolio",
  description:
    "Explore the portfolio of Abigail Durham, featuring creative UI/UX design, research, and digital interface projects.",
  icons: {
    icon: "/favicon.ico?v=4",
    shortcut: "/favicon.ico?v=4",
    apple: "/favicon.ico?v=4", // Only keep this if you don't have a separate apple-icon.png
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className} style={{ 
        margin: 0, 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}