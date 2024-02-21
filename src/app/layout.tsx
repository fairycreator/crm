import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Using shorthand for React.Fragment
  return <>{children}</>;
}
