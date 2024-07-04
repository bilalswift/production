"use client"
import "primeflex/primeflex.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
export default function Machines() {
  const elements = [
    { ID : "1" ,Name: 'SCP-X', Type: 'Perso', Description: '192.1.1.1', Status: 'On/Off', Actions: 'Active', Tasks:'buttons'}, 
    { ID : "1" ,Name: 'SCP-X', Type: 'Perso', Description: '192.1.1.1', Status: 'On/Off', Actions: 'Active', Tasks:'buttons'},
    { ID : "1" ,Name: 'SCP-X', Type: 'Perso', Description: '192.1.1.1', Status: 'On/Off', Actions: 'Active', Tasks:'buttons'},
    { ID : "1" ,Name: 'SCP-X', Type: 'Perso', Description: '192.1.1.1', Status: 'On/Off', Actions: 'Active', Tasks:'buttons'},
    { ID : "1" ,Name: 'SCP-X', Type: 'Perso', Description: '192.1.1.1', Status: 'On/Off', Actions: 'Active', Tasks:'buttons'},
    { ID : "1" ,Name: 'SCP-X', Type: 'Perso', Description: '192.1.1.1', Status: 'On/Off', Actions: 'Active', Tasks:'buttons'},
    { ID : "1" ,Name: 'SCP-X', Type: 'Perso', Description: '192.1.1.1', Status: 'On/Off', Actions: 'Active', Tasks:'buttons'},
    { ID : "1" ,Name: 'SCP-X', Type: 'Perso', Description: '192.1.1.1', Status: 'On/Off', Actions: 'Active', Tasks:'buttons'},
    { ID : "1" ,Name: 'SCP-X', Type: 'Perso', Description: '192.1.1.1', Status: 'On/Off', Actions: 'Active', Tasks:'buttons'} 
   

  ];
    return (
      <>
      <div className="grid ">

        <div className="col-12 border-bottom-1 border-blue-900 "> 
            <h1 className="justify-content-start font-bold text-2xl px-2" >Machine List</h1>
        </div>

        <div className=" flex justify-content-end col-12 border-bottom-1  border-blue-900"> 
                  <Button label="New Machine"  className=" m-1  p-1  w-2 bg-green-400  "/>
        </div>
        <div className="col-12 -conjustifytent-end"> 

          <DataTable value={elements} scrollable scrollHeight="flex"  paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}  tableStyle={{ minWidth: '50rem' }}>
                <Column field="ID" header="ID"></Column>
                <Column field="Name" header="Name"></Column>
                <Column field="Type" header="Type"></Column>
                <Column field="Description" header="Description"></Column>
                <Column field="Status" header="Status"></Column>
                <Column field="Actions" header="Actions"></Column>
                <Column field="Tasks" header="Tasks"></Column>
          </DataTable>

        </div>

</div>
      
      </>
    )
  }