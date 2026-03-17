import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SocialButtons from './SocialButtons';
import LocationButton from './LocationButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
      <SocialButtons />
      <LocationButton />
    </div>
  );
};

export default Layout;
