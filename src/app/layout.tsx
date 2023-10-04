'use client';
import { useState } from 'react';
import './globals.css';
import { FavoriteProvider } from '../context/FavoriteContext';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import FavoriteList from '@/Components/FavoriteList/FavoriteList';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <html lang="en">
      <head />
      <body className="container mx-auto bg-[url('/paw.png')] bg-right-bottom">
        <Navbar toggleSidebar={handleToggleSidebar} />
        <div className="flex justify-between px-8 gap-20 h-[87vh] ">
          <FavoriteProvider>
            <FavoriteList isVisible={showSidebar} />
            {children}
          </FavoriteProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
