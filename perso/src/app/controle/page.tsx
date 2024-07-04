import "primeflex/primeflex.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

export default function Controle() {

  const elements = [
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: '', Finish: ''},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
    { Name : "CIMBE0001" ,ProductionStep: 'controle', Quantity: '50', Start: 'S', Finish: 'F'},
   
   
  ]; 
     
    return (
      <>
      <div className="grid">
          <div className="col-12 border-bottom-1  border-blue-900"> 
              <h1 className="justify-content-start font-bold text-2xl px-2" >Controle</h1>
          </div>
         
          <div className="col-7 mt-1">

              <DataTable value={elements}   paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}  tableStyle={{ maxWidth: '100%'}}>
                  <Column field="Name" header="Name"></Column>
                  
                  <Column field="ProductionStep" header="Production Step"></Column>
                  <Column field="Quantity" header="Quantity">   </Column>
                  <Column field="Start" header="Start"   body={ 
                      <i className="pi pi-heart-fill bg-red-400 font-bold text-black-alpha-80 p-1 m-1"> </i> }>
                  </Column>
                 
                  <Column field="Finish" header="Finish" body={ 
                      <i className="pi  pi-flag-fill bg-green-400 font-bold text-black-alpha-80 p-1 m-1"> </i> }>
                  </Column>

                </DataTable>
        
          </div>
          <div className="col-5 ">
                  <div className="flex justify-content-between  m-1 border-blue-900 border-bottom-1 border-top-1">
                      <h3 className="m-1  p-1 font-bold">
                          <i className="pi pi-credit-card  m-1  p-1 font-bold"></i>
                          ID Card
                      </h3>
                      <Button label="Check"  className="  m-1  p-1  bg-pink-300"/>

                  </div>
                  <Image src="./canvas.png" alt="" width="100%" />

                  <Image src="./canvas2.png" alt="" width="100%" />
            
          </div>
      </div >
      
      </>
    )
  }
  