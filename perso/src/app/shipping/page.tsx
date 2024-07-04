import "primeflex/primeflex.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

export default function Shipping() {
  const elements = [
    { Name : "CIMBE0001" ,Box: 'controle', ProductionStep: '50', ProductionState: 'S', Quantity: 'F' ,Repot:'F' },
    { Name : "CIMBE0001" ,Box: 'controle', ProductionStep: '50', ProductionState: 'S', Quantity: 'F' ,Repot:'F' },
    { Name : "CIMBE0001" ,Box: 'controle', ProductionStep: '50', ProductionState: 'S', Quantity: 'F' ,Repot:'F' },
    { Name : "CIMBE0001" ,Box: 'controle', ProductionStep: '50', ProductionState: 'S', Quantity: 'F' ,Repot:'F' },
    { Name : "CIMBE0001" ,Box: 'controle', ProductionStep: '50', ProductionState: 'S', Quantity: 'F' ,Repot:'F' },
    { Name : "CIMBE0001" ,Box: 'controle', ProductionStep: '50', ProductionState: 'S', Quantity: 'F' ,Repot:'F' },
    { Name : "CIMBE0001" ,Box: 'controle', ProductionStep: '50', ProductionState: 'S', Quantity: 'F' ,Repot:'F' },
    { Name : "CIMBE0001" ,Box: 'controle', ProductionStep: '50', ProductionState: 'S', Quantity: 'F' ,Repot:'F' },
    { Name : "CIMBE0001" ,Box: 'controle', ProductionStep: '50', ProductionState: 'S', Quantity: 'F' ,Repot:'F' }
  
  ]; 
    return (
       
         <div className="grid">
              <div className="col-12 border-bottom-1  border-blue-900"> 
                    <h1 className="justify-content-start font-bold text-2xl px-2" >Shipping</h1>
              </div>
              <div className=" flex justify-content-end col-12 border-bottom-1  border-blue-900"> 
                  <Button label="Report"  className="m-1  p-1  w-1 bg-green-400  "/>
                  <Button label="Expedition"     className="m-1  p-1  w-1 bg-pink-300"/>    
                
              </div>
              <div className="col-12">
                
                <DataTable value={elements}   paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}  tableStyle={{ maxWidth: '100%'}}>
                      <Column field="Name" header="Name"></Column>   
                      <Column field="Box" header="Job Name"></Column>
                      <Column field="ProductionStep" header="Job Size"></Column>
                      <Column field="ProductionState" header="Max Order Size"></Column>
                      <Column field="Quantity" header="Min Order Size"></Column>
                      <Column field="Repot" header="Qc Rate"></Column>
                      
                </DataTable>
            
              </div>
         
         </div>

   
    )
  }