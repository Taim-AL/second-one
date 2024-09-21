import {createRoot} from 'react-dom/client';
import  './assets/Style.css';
import "bootstrap/dist/css/bootstrap.css";
/////////////////////component
import CollapsibleExample from './componant/Navbar';
import Sec from './componant/Sec';
import Sec2 from './componant/Sec2';
import Sec3 from './componant/Sec3';
import Sec4 from './componant/Sec4';
import Sec5 from './componant/Sec5';
import Sec6 from './componant/Sec6';
import Sec7 from './componant/Sec7';
import Sec8 from './componant/Sec8';
import Sec9 from './componant/Sec9';
import Sec10 from './componant/Sec10';
import Sec11 from './componant/Sec11';
import Footer from './componant/Footer';




///////////component
// import CollapsibleExample from './componant/nav';
// import Sec1 from './componant/Sec1';
function App(){
    // const[taim,Settaim]=useState(true)
  return(
    <>
    {/* <CollapsibleExample/>
    <Sec1 /> */}
    {/* <Sec1/> */}
    {/* <New  change={()=>{
      Settaim(!taim)
    }}/>
    {
      taim ? <div className='text-center card mt-3 shadow' style={{fontSize:"3vw",fontStyle:"italic"}} >
      Hello
    </div> : <div  className='text-center card mt-3 shadow' style={{fontSize:"3vw",fontStyle:"italic",backgroundColor:"gray",color:'white'}} >
      Hello
    </div>
    } */}
    <CollapsibleExample/>
    <Sec/>
    <Sec2/>
    <Sec3/>
    <Sec4/>
    <Sec5/>
    <Sec6/>
    <Sec7/>
    <Sec8/>
    <Sec9/>
    <Sec10/>
    <Sec11/>
    <Footer/>
    </>
  )
}
createRoot(document.getElementById('root')).render(<App/>)