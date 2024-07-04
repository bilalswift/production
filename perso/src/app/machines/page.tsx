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
                <Column field="Actions" header="Actions"
                body={
                    
                  <div className=" justify-content-between font-bold  text-black-alpha-80">
                    <i className="pi pi-desktop bg-green-200   p-1 m-1"> </i> 
                    <i className="pi pi-pen-to-square bg-blue-200   p-1  m-1"> </i> 
                    <i className="pi pi-trash bg-red-400   p-1 m-1"> </i>
                   
                  </div> }></Column>
                <Column field="Tasks" header="Tasks"></Column>
          </DataTable>

        </div>

</div>
      
      </>
    )
  }



/*
design 
color /mode / image maybe 
sidebar: collapse// highlight the current page
persologic ** name 
     
      *** dataset: 
                  /import and upload popups upload csv 
                  // delete new order 
      *** orders:  
                 new order 
                  : the chose of the machine and card type
                 generate **etiquetes  using the Production state , the user choose the specific order

      *** Tasks: 
        

      *** controle** the percentage of the good cards   
              start checking  when we choose the order it automatically start a listener to start checking 

      *** mailing  --> choose the job --> you can choose eather you select them all or you choose the specific person
      
      *** Shipping 

              generate bordoreau // upload SN and Certificats for each task   
              it will activate only when you upload everything -->  expidition      
      *** Machine 
        New machine we add the 
      *** Warehouse 
      
      *** creteria 
   users 
       les roles :   admin / datapreparation / Qc / mailing /Shiping /  privilege des utilisateurs 



*/