"use client"
import { Sidebar } from 'primereact/sidebar';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from 'primereact/button';
         
import 'primeicons/primeicons.css';

const AppSidebar :React.FC = () =>{
    const [visible, setVisible] = useState(true);
    return(
        <>
        {!visible &&(<Button icon="pi pi-plus" onClick={() => setVisible(true)} />)

        }
       <div className="card flex justify-content-center">
        
        <Sidebar visible={visible} onHide={() => setVisible(true)}>
            <div className="min-h-screen flex relative lg:static surface-ground">
             <div id="app-sidebar-2" className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}> 
                <div className="overflow-y-auto">
                    <ul className="list-none p-5 m-0 overflow-hidden">
                       <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <li>
                                <i className="pi pi-list"></i>
                                <span className="m-2">DataSets</span>
                                <ul className="list-none py-0 pl-3 pr-0 m-1 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
 
                                        <span>Display</span>
                                    </li>
                                    <li>
                                        <span>Create</span>
                                    </li>


                                </ul>



                                
                            </li>
                        </a>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <li>Orders</li>
                        </a>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <li>Tasks</li>
                        </a>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <li>
                                <i className="pi pi-verified"></i>
                                <span>Controle</span>
                            </li>
                        </a>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <li>
                                <i  className="pi pi-envelope"></i>
                                <span>Mailing</span>
                            </li>
                        </a>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <li>Shiping</li>
                        </a>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                             <li>Machines</li>
                        </a>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <li>
                                <i className="pi pi-warehouse"></i> 
                                <span>Warehouse</span>
                            </li>
                        </a>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <li>
                                <i className="pi pi-users"></i> 
                                <span>Users</span>
                            </li>
                        </a>
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                             <li>Creteria</li>
                        </a>

                    </ul>
                </div>
               </div> 
            </div>
         </Sidebar>
        </div>
        </>
    )


}
export default AppSidebar;