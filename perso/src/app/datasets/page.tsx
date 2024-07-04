"use client"
import "primeflex/primeflex.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';

export default function Datasets() {

  const elements = [
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: '' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },
    { Number : "1" ,Matricule: '12345', FirstName: 'John', LastName: 'Doe', Grade: 'A', State: 'Active', PersoMachine: 'Machine 1', ProductionStep: 'Step 1', ProductionResult: 'Pass', MachineTask: 'Assembly', Action: 'None' },


  ];

    return (
    
      <div className="grid ">

        <div className="col-12 border-bottom-1 border-blue-900"> 
        
            <h1 className="justify-content-start font-bold text-2xl px-2" >Dataset List</h1>
        
        </div>

        <div className="col-12  flex  justify-content-end  border-bottom-1 border-blue-900 ">
        
            <Button label="New Order"  className="m-1  p-1  w-1 bg-white "/>
            <Button label="Import"     className="m-1  p-1  w-1 bg-green-400"/>    
            <Button label="Upload"     className="m-1  p-1  w-1 bg-pink-300"/>
        
        </div>

        <div className="col-12"> 
        
          <DataTable value={elements} scrollable scrollHeight="flex"  paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}  tableStyle={{ minWidth: '50rem' }}>
               
                <Column field="Number" header="Number"></Column>
                <Column field="Matricule" header="Matricule"></Column>
                <Column field="FirstName" header="First Name"></Column>
                <Column field="LastName" header="Last Name"></Column>
                <Column field="Grade" header="Grade"></Column>
                <Column field="State" header="State "></Column>
                <Column field="PersoMachine" header="Perso Machine"></Column>
                <Column field="ProductionStep" header="Production step"></Column>
                <Column field="ProductionResult" header="Production Results   "></Column>
                <Column field="MachineTask" header="Machine Task "></Column>
                <Column field="Action" header="Action ">  </Column>

          </DataTable>

        </div>
        
      </div>
      
    )
  }
  