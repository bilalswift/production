import "primeflex/primeflex.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function Mailinig() {
  const elements = [
    { Name : "CIMBE0001" ,ProductionStep: 'controle', ProductionState: 'OnMachine', Quantity: '18', Actions: 'Button' ,Mailed:'Button' },
    { Name : "CIMBE0001" ,ProductionStep: 'controle', ProductionState: 'OnMachine', Quantity: '18', Actions: 'Button' ,Mailed:'Button' },
    { Name : "CIMBE0001" ,ProductionStep: 'Mailing', ProductionState: 'OnMachine', Quantity: '18', Actions: 'Button' ,Mailed:'Button' },
    { Name : "CIMBE0001" ,ProductionStep: 'Proàduction', ProductionState: 'OnMachine', Quantity: '18', Actions: 'Button' ,Mailed:'Button' },
    { Name : "CIMBE0001" ,ProductionStep: 'controle', ProductionState: 'OnMachine', Quantity: '18', Actions: 'Button' ,Mailed:'Button' },
    { Name : "CIMBE0001" ,ProductionStep: 'controle', ProductionState: 'OnMachine', Quantity: '18', Actions: 'Button' ,Mailed:'Button' },

   
  
  ];
    return (
      <>
       <div className="grid">
          <div className="col-12 border-bottom-1  border-blue-900"> 
                <h1 className="justify-content-start font-bold text-2xl px-2" >Mailing</h1>
          </div>
          <div className="col-12">
            <DataTable value={elements}   paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}  tableStyle={{ maxWidth: '100%'}}>
                  <Column field="Name" header="Name"></Column>   
                  <Column field="ProductionStep" header="Production Step"></Column>
                  <Column field="ProductionState" header="Production State"></Column>
                  <Column field="Quantity" header="Quantity"></Column>
                  <Column field="Actions" header="Actions"></Column>
                  <Column field="Mailed" header="Mailed"></Column>
                         
            </DataTable>
        
         </div>


        
        
      </div>
      </>
    )
  }