// app/layout.tsx
import React from 'react';
import Navbar from '../components/Navbar'; // Corrected import path
import './globals.css'; // Import your global styles

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Include the Navbar here */}
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
