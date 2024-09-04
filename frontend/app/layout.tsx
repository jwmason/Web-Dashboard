import React from 'react';
import './globals.css'; // Import the CSS file for layout styles

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <header className="header">
            <div className="header-content">
              <h1 className="title">My Dashboard</h1>
            </div>
          </header>

          <main className="main-content">
            {children}
          </main>

          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} My Dashboard. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
