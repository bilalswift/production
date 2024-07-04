"use client"
import "primeflex/primeflex.css";
import React from 'react';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const AppSidebar: React.FC = () => {
    const router = useRouter()

    const items:MenuItem[] = [
        {
            label: 'Datasets',
            icon : 'pi pi-list',
            command: () => {
                router.push('/datasets');
            }
            
        },
        {
            label: 'Orders',
            icon : 'pi pi-list',
            command: () => {
                router.push('/orders');
            }
        },
        {
            label: 'Tasks',
            icon:'pi pi-list-check',
            command: () => {
                router.push('/tasks');
            }
        //    items:[]
            
        },
        {
            label: 'Controle',
            icon : 'pi pi-verified',
            command: () => {
                router.push('/controle');
            }
     
        },
        {
            label: 'Mailing',
            icon : 'pi pi-envelope',
            command: () => {
                router.push('/mailing');
            }
    //items:[]
        },
        {
            label: 'Shipping',
            icon : 'pi pi-truck',
            command: () => {
                router.push('/shipping');
            }
          //  items:[]
        },
        {
            label: 'Machines',
            icon : 'pi pi-cog',
            command: () => {
                router.push('/machines');
            }
          //  items:[]
        },
        {
            label: 'Warehouse',
            icon : 'pi pi-warehouse',
            
           // items:[]
        },
        {
            label: 'Creteria',
            icon : 'pi pi-tags',
            command: () => {
                router.push('/creteria');
            }
            //items:[]
        },
        {
            label: 'Users',
            icon : 'pi pi-users',
           
          //  items:[]
        }
    
    
    
    
    ];



    return ( 
             
                <Menu  model={items} className=" w-full  font-bold bg-inherit" /> 
         
                );
};

export default AppSidebar;

