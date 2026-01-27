import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./app.css";
import Navbar from "./components/Navbar"; // <-- Add this import

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abigail Durham | Portfolio",
  description: "UI/UX Designer & Creative Professional",
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
        {children}
      </body>
    </html>
  );
}