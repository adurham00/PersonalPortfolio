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
  // This is what shows in the Browser Tab and Google search results
  title: "Abigail Durham | UI/UX Designer & Portfolio",
  description: "Explore the portfolio of Abigail Durham, featuring creative UI/UX design, research, and digital interface projects.",
  
  // This points to your icon (the "favicon")
  icons: {
    icon: "/D.png", // Standard tab icon
    apple: "/D.png", // Icon for when someone saves your site to an iPhone home screen
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