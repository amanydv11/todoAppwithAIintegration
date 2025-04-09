import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Navbar";
import { ReactNode } from "react";
import { CopilotKit } from "@copilotkit/react-core"; 
import "@copilotkit/react-ui/styles.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <CopilotKit publicApiKey='ck_pub_e964107bfbb5ced7f0f090ee86cfa918'> 
          {children}
        </CopilotKit>
      </body>
    </html>
  );
}
