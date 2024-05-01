import React from 'react';
import Providers from '@/app/components/providers';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="root-layout">
      <Providers>{children}</Providers>
    </div>
  );
};

export default RootLayout;
