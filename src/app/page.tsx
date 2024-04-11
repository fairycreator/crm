import React from 'react';
import RootLayout from './layout';

const HomePage: React.FC = () => {
  return (
    <RootLayout>
      <main>
        <h1 className="text-xl">Home page</h1>
      </main>
    </RootLayout>
  );
};

export default HomePage;
