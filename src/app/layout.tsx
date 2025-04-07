import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen">
          <div className="bg-radial from-primary from-20% to-primary-dark h-full to-100% flex gap-6 flex-col px-5">
            {/* Detalles de arrriba */}
            <div className="w-full h-6 flex justify-center">
              <div className="h-6 border-4 rounded-t-0 border-black w-11/12 rounded-bl-2xl rounded-br-2xl flex justify-center">
                <div className="h-full border-4 rounded-t-0 border-b-0 border-t-0 border-black w-1/2 rounded-bl-2xl rounded-br-2xl flex justify-center items-center">
                  <div className="h-1 w-1/5 border-2"></div>
                </div>
              </div>
            </div>
            {/* FIN Detalles de arrriba */}

            <div className="bg-black h-80 px-5 py-2 rounded-2xl flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <div className="h-2 w-2 bg-red-500 rounded-full border border-white"></div>
                <span className="text-white text-[10px] italic uppercase">
                  battery
                </span>
              </div>
              <div className="bg-white h-full flex justify-center items-center">
                {children}
              </div>
              <span className="text-white italic uppercase">game boy</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
