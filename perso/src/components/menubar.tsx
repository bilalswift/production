"use client"
import { Menubar } from 'primereact/menubar';
import React from 'react'; 
import { MenuItem } from 'primereact/menuitem';

const AppMenubar :React.FC = () =>{
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Components',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];
  return(
    <div className="layout-topbar">
    <div className="p-d-flex p-jc-between p-ai-left">
        <div className="p-mr-2">
        <Menubar model={items} />
        </div>
    </div>
</div>

  )

}
export default AppMenubar
