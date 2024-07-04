import "primeflex/primeflex.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

export default function Orders() {
  
  const elements = [
    { Name : "Ordre_DP" ,CreationDate: '31/05/2000', State: 'Production', Quantity: '50', JobCreteria: 'button' , Tasks: 'button', Actions: 'buttons'},
   
    { Name : "Ordre_DP" ,CreationDate: '31/05/2000', State: 'Production', Quantity: '50', JobCreteria: 'button' , Tasks: 'button', Actions: 'buttons'},
    { Name : "Ordre_DP" ,CreationDate: '31/05/2000', State: 'Production', Quantity: '50', JobCreteria: 'button' , Tasks: 'button', Actions: 'buttons'},
    { Name : "Ordre_DP" ,CreationDate: '31/05/2000', State: 'Production', Quantity: '50', JobCreteria: 'button' , Tasks: 'button', Actions: 'buttons'},
    { Name : "Ordre_DP" ,CreationDate: '31/05/2000', State: 'Production', Quantity: '50', JobCreteria: 'button' , Tasks: 'button', Actions: 'buttons'},
    { Name : "Ordre_DP" ,CreationDate: '31/05/2000', State: 'Production', Quantity: '50', JobCreteria: 'button' , Tasks: 'button', Actions: 'buttons'},
    { Name : "Ordre_DP" ,CreationDate: '31/05/2000', State: 'Production', Quantity: '50', JobCreteria: 'button' , Tasks: 'button', Actions: 'buttons'},
    { Name : "Ordre_DP" ,CreationDate: '31/05/2000', State: 'Production', Quantity: '50', JobCreteria: 'button' , Tasks: 'button', Actions: 'buttons'},
    { Name : "Ordre_DP" ,CreationDate: '31/05/2000', State: 'Production', Quantity: '50', JobCreteria: 'button' , Tasks: 'button', Actions: 'buttons'},
    { Name : "Ordre_DP" ,CreationDate: '31/05/2000', State: 'Production', Quantity: '50', JobCreteria: 'button' , Tasks: 'button', Actions: 'buttons'},
   
  ]; 
  
  return (
      <>
      <div className="grid">
        <div className="col-12 border-bottom-1  border-blue-900"> 
            <h1 className=" flex justify-content-start font-bold text-2xl px-2" >Orders List</h1>

        </div>
        <div className="col-12  border-bottom-1  border-blue-900  flex justify-content-end  ">
             <Button label="New Order"  className="  m-1  p-1  w-1 bg-pink-300"/> 
        </div>
         
         <div className="col-12">
          <DataTable value={elements} stripedRows   paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}  tableStyle={{ maxWidth: '100%'}}>
                  <Column field="Name" header="Name"></Column>  
                  <Column field="CreationDate" header="Creation Date"></Column>
                  <Column field="State" header="State"></Column>
                  <Column field="Quantity" header="Quantity"></Column>
                  <Column field="JobCreteria" header="Job Creteria"></Column>
                  <Column field="Tasks" header="Tasks"></Column>
                  <Column field="Actions" header="Actions" body={
                    
                    <div className="flex justify-content-between">
                      <i className="pi pi-trash bg-white font-bold text-black-alpha-80 p-1 m-1"> </i> 
                      <i className="pi pi-print bg-yellow-400 font-bold text-black-alpha-80 p-1 m-1"> </i> 
                      <i className="pi pi-trash bg-red-400 font-bold text-black-alpha-80 p-1 m-1"> </i>
                      <i className="pi pi-flag  bg-green-400 font-bold text-black-alpha-80 p-1 m-1"> </i>
                    </div> }>  
                  
                  </Column>

            </DataTable>
        
         </div>
         
      </div >
      
      </>
    )
  }