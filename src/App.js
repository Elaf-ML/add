
import './App.css';
import { GoArrowUp } from "react-icons/go";
import Website from './component/Website/Website';
import UpArrow from './assets/Images/Up.gif'
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";

function App() {
  return (
    <div className="App">
<Website />

{

window.addEventListener('scroll', (event) => {
var BTN = document.querySelector(".Hire-me1")




if(window.scrollY > 440){
BTN.setAttribute("style" , " display:block;  position:fixed; margin-left:1530px; margin-top:400px; transition : 0.5s ease-in; background:#e94b81; width:50px; height:50px; color:#fff; border-radius:50%; text-align:center; font-size:13px;")


}    
else if(window.scrollY <= 438){

 
    BTN.setAttribute("style" , " display:none;   position: absolute;     top:481px;    left: 306px; height: 40px;  border-radius: 4px; width: 150px; transition : 0.3s ease-in; border-radius:9999999999999999999px;")


}   


    })
    
    }
{/* <button className='Hire-me1'>Hire me</button> */}

<HiArrowNarrowUp onClick={()=>{ window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });}} className='UpArrow' />
<HiArrowNarrowDown  onClick={()=>{ window.scrollTo({
        top: 10000,
        behavior: 'smooth',
    });}}  className='DownArrow' />

<div className="OBX">






{
window.addEventListener('scroll', (event) => {
 
    var UpArrow = document.querySelector(".UpArrow");
    var DownArrow = document.querySelector(".DownArrow");

if(window.scrollY < 190){

    UpArrow.setAttribute("style" , "visibility:hidden;")
    DownArrow.setAttribute("style" , "visibility:hidden;")

}    
else if(window.scrollY > 190){

    UpArrow.setAttribute("style" , "visibility:visible;")
    DownArrow.setAttribute("style" , "visibility:visible;")



}   


    })
    
    }
</div>



    </div>
  );
}

export default App;
