import Image from 'next/image'
import "primeflex/primeflex.css";
import Controle from './controle/page';
export default function Home() {
  return (
    <>
      <div className='grid'>
          <div className='col-3' >element 1</div>
          <div className='col-3' >element 2</div>
          <div className='col-3' >element 3</div>
          <div className='col-3' >element 4</div>
    </div>
    
    </>
  )
}
