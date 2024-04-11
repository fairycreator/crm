// import React from 'react';
// import { Plus_Jakarta_Sans } from 'next/font/google';
// import Providers from '@/app/components/providers';
// import './globals.css';

// const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={font.className}>
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }
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
