"use client"
import { Sidebar } from 'primereact/sidebar';
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import 'primeicons/primeicons.css';
import './Sidebar_style.css'
//import 'primeflex/primeflex.css'; // Ensure primeflex is included for responsive utilities

const AppSidebar: React.FC = () => {
    const [visible, setVisible] = useState(true);
    const [collapsed, setCollapsed] = useState(false);
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({
        datasets: false,
        mailing: false,
        warehouse: false,
        users: false,
    });

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    const toggleItem = (itemKey: string) => {
        setExpandedItems(prevState => ({
            ...prevState,
            [itemKey]: !prevState[itemKey]
        }));
    };
    
    const DataSetitems = [
        {
            label: 'Display',
            icon: '',

        },
        {
            label: 'Create',
        },



    ]
    return (
        <>
           
            <Sidebar visible={visible} onHide={() => setVisible(true)} className={`light-blue-bg ${collapsed ? 'collapsed' : 'expanded'}`}>
               
                    <div id="app-sidebar-2" className={`surface-section h-screen flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none transition-all transition-duration-300 ${collapsed ? 'collapsed' : 'expanded'} light-blue-bg`}>
                        <div className="overflow-y-auto">
                            
                            <ul className="list-none p-5 m-0 overflow-hidden">
                                <li className="mb-2 sidebar-item" onClick={() => toggleItem('datasets')}>
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-list"></i>
                                        {!collapsed && <span className="ml-2">
                                            DataSets
                                           
                                            </span>
                                        }   
                                    </a>
                                    {/*!collapsed && (
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li className="py-2">
                                                <span>Display</span>
                                            </li>
                                            <li className="py-2">
                                                <span>Create</span>
                                            </li>
                                        </ul>
                                    )*/}
                                </li>
                                <li className="mb-2 sidebar-item">
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-shopping-cart"></i>
                                        {!collapsed && <span className="ml-2">Orders</span>}
                                    </a>
                                </li>
                                <li className="mb-2 sidebar-item">
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-list-check"></i>
                                        {!collapsed && <span className="ml-2">Tasks</span>}
                                    </a>
                                </li>
                                <li className="mb-2 sidebar-item">
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-verified"></i>
                                        {!collapsed && <span className="ml-2">Controle</span>}
                                    </a>
                                </li>
                                <li className="mb-2 sidebar-item">
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-envelope"></i>
                                        {!collapsed && <span className="ml-2">Mailing</span>}
                                    </a>
                                </li>
                                <li className="mb-2 sidebar-item">
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-truck"></i>
                                        {!collapsed && <span className="ml-2">Shipping</span>}
                                    </a>
                                </li>
                                <li className="mb-2 sidebar-item">
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-cog"></i>
                                        {!collapsed && <span className="ml-2">Machines</span>}
                                    </a>
                                </li>
                                <li className="mb-2 sidebar-item">
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-warehouse"></i>
                                        {!collapsed && <span className="ml-2">Warehouse</span>}
                                    </a>
                                </li>
                                <li className="mb-2 sidebar-item">
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-users"></i>
                                        {!collapsed && <span className="ml-2">Users</span>}
                                    </a>
                                </li>
                                <li className="mb-2 sidebar-item">
                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-tags"></i>
                                        {!collapsed && <span className="ml-2">Creteria</span>}
                                    </a>
                                </li>
                            </ul>
                            <button className="sidebar-button" onClick={toggleCollapse}>
                                <i className={collapsed ? 'pi pi-chevron-right' : 'pi pi-chevron-left'}></i>
                            </button>
                        </div>
                    </div>
                
            </Sidebar>
        </>
    );
};

export default AppSidebar;
