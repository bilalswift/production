"use client"
import "primeflex/primeflex.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState, useEffect } from 'react';

export default function Tasks() {
  const elements = [
    { Number : "1" ,CreationDate: '12345', ProductionState: 'John', ProductionStep: 'Doe', Quantity: 'A', Machine: 'Active',  Datasets: 'Step 1', Actions: 'buttons', Rework: 'None', Label: 'None', Listing: 'None'},
    { Number : "1" ,CreationDate: '12345', ProductionState: 'John', ProductionStep: 'Doe', Quantity: 'A', Machine: 'Active',  Datasets: 'Step 1', Actions: 'buttons', Rework: 'None', Label: 'None', Listing: 'None'},
    { Number : "1" ,CreationDate: '12345', ProductionState: 'John', ProductionStep: 'Doe', Quantity: 'A', Machine: 'Active',  Datasets: 'Step 1', Actions: 'buttons', Rework: 'None', Label: 'None', Listing: 'None'},
    { Number : "1" ,CreationDate: '12345', ProductionState: 'John', ProductionStep: 'Doe', Quantity: 'A', Machine: 'Active',  Datasets: 'Step 1', Actions: 'buttons', Rework: 'None', Label: 'None', Listing: 'None'},
    { Number : "1" ,CreationDate: '12345', ProductionState: 'John', ProductionStep: 'Doe', Quantity: 'A', Machine: 'Active',  Datasets: 'Step 1', Actions: 'buttons', Rework: 'None', Label: 'None', Listing: 'None'},
    { Number : "1" ,CreationDate: '12345', ProductionState: 'John', ProductionStep: 'Doe', Quantity: 'A', Machine: 'Active',  Datasets: 'Step 1', Actions: 'buttons', Rework: 'None', Label: 'None', Listing: 'None'},
    { Number : "1" ,CreationDate: '12345', ProductionState: 'John', ProductionStep: 'Doe', Quantity: 'A', Machine: 'Active',  Datasets: 'Step 1', Actions: 'buttons', Rework: 'None', Label: 'None', Listing: 'None'},
    { Number : "1" ,CreationDate: '12345', ProductionState: 'John', ProductionStep: 'Doe', Quantity: 'A', Machine: 'Active',  Datasets: 'Step 1', Actions: 'buttons', Rework: 'None', Label: 'None', Listing: 'None'},
    

  ];


    return (
      <>
      <div className="grid ">

        <div className="col-12 border-bottom-1  border-blue-900"> 
            <h1 className="justify-content-start font-bold text-2xl px-2" >Machine Task List</h1>
        </div>

        <div className="col-12 flex"> 
        
          <DataTable value={elements} scrollable scrollHeight="flex"  paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}  tableStyle={{ minWidth: '50rem' }}>
                <Column field="Number" header="Number"></Column>
                <Column field="CreationDate" header="Creation Date"></Column>
                <Column field="ProductionState" header="Production State"></Column>
                <Column field="ProductionStep" header="Production Step"></Column>
                <Column field="Quantity" header="Quantity"></Column>
                <Column field="Machine" header="Machine"></Column>
                <Column field="Datasets" header="Datasets"></Column>
                <Column field="Actions" header="Actions "body={
                    
                    <div className="flex justify-content-between font-bold  text-black-alpha-80">
                     
                      <i className="pi pi-print bg-yellow-400  p-1 m-1"> </i> 
                      <i className="pi pi-send bg-blue-200   p-1 m-1"> </i> 
                      <i className="pi pi-trash bg-red-400   p-1 m-1"> </i>
                      <i className="pi pi-flag  bg-green-400   p-1 m-1"> </i>
                      <i className="pi pi-refresh  bg-yellow-400   p-1 m-1"> </i>
                    </div> }>  


                </Column>
                <Column field="Rework" header="Rework "></Column>
                <Column field="Label" header="Label"></Column>
                <Column field="Listing" header="Listing"></Column>

          </DataTable>

        </div>
        
      </div>
      
      </>
    )
  }
  
        
   
  