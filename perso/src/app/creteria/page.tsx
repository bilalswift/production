import "primeflex/primeflex.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



export default function Creteria() {
    const elements = [
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: '18', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: '14', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: '10', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: '10', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: 'S', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: 'S', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: 'S', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: 'S', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: 'S', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: 'S', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: 'S', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: 'S', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: 'S', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: 'S', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: 'S', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},
      { Name : "CIMBE0001" ,JobName: 'controle', JobSize: '50', MaxOrder: 'S', MinOrder: 'F' ,QcRate:'F' ,Product : 'F', Machine : 'F',Action : 'F'},

    
    ]; 
        

     return (
      <>
      <div className="grid">
          <div className="col-12 border-bottom-1  border-blue-900"> 
                <h1 className="justify-content-start font-bold text-2xl px-2" >Job Criteria List</h1>
          </div>
          <div className="col-12">
            <DataTable value={elements}   paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}  tableStyle={{ maxWidth: '100%'}}>
                  <Column field="Name" header="Name"></Column>   
                  <Column field="JobName" header="Job Name"></Column>
                  <Column field="JobSize" header="Job Size"></Column>
                  <Column field="MaxOrder" header="Max Order Size"></Column>
                  <Column field="MinOrder" header="Min Order Size"></Column>
                  <Column field="QcRate" header="Qc Rate"></Column>
                  <Column field="Product" header="Product"></Column>
                  <Column field="Machine" header="Machine"></Column>
                  <Column field="Action" header="Action"></Column>       
            </DataTable>
        
         </div>


        
        
      </div>
      
      </>
    )
  }
  