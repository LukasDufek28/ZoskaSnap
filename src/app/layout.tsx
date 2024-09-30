// app/layout.tsx
import React from 'react';
import Navbar from '/home/lukasdufek@s.zochova.sk/Dokumenty/dev/neviem/src/components/Navbar.tsx'; // Adjust the import path if necessary
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
