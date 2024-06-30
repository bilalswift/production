import React from 'react';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css'; // Import PrimeIcons for icons

const AppNavbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
      {/* Left side: Persologic text and optional navigation links */}
      <div className="flex space-x-4">
        <span className="text-xl font-bold">Persologic</span>
        {/* Add navigation links here if needed */}
        {/* <ul className="flex space-x-4">
          <li>
            Your navigation links here
          </li>
        </ul> */}
      </div>

      {/* Center: Logo */}
      

      {/* Right side: Icons */}
      <div className="flex space-x-4">
        <Button className="p-button-icon p-button-rounded p-button-text" icon="pi pi-bell" />
        <Button className="p-button-icon p-button-rounded p-button-text" icon="pi pi-search" />
        <Button className="p-button-icon p-button-rounded p-button-text" icon="pi pi-user" />
      </div>
    </nav>
  );
};

export default AppNavbar;
