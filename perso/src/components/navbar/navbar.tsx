import React from 'react';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css'; // Import PrimeIcons for icons
import "primeflex/primeflex.css";
import"./navbar_style.css"

const AppNavbar: React.FC = () => {
  return (
   <div className="flex justify-content-between" >
   
      <div className="m-1">
       <h1 className='font-bold ml-3 mt-2 text-2xl'>Persologic</h1>  
      </div>

      <div >
        <Button className="p-button-icon p-button-rounded p-button-text " icon="pi pi-bell" />
        <Button className="p-button-icon p-button-rounded p-button-text " icon="pi pi-search" />
        <Button className="p-button-icon p-button-rounded p-button-text " icon="pi pi-user" />
     </div>
       
        
     </div>   
   
  );
};

export default AppNavbar;
