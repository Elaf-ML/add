import '../Contact_Me/Contact_Me.css';
import { GoLocation } from "react-icons/go";
import { FiSend , FiPhoneCall } from "react-icons/fi";


const Contact_Me =()=>{



return(
<div  className='mContact'>
 
    <div data-aos="zoom-in" className='ContactDiv'>

    <div className='Left'>
    <h1 className='get'>Get in touch</h1>
    <hr/>
    <p className='ContactNote'>Hi here you can visit my social media accounts and follow me to see what is new on my future plans, and i'm always ready to work projects for you.</p>
    
    
    <div className='LDiv'>
    <div className='Location'> <GoLocation className='Inner'/></div>
    <h2>Morgongåva, Allévägen 11B</h2>
    </div>


    <div className='LDiv'>
    <div className='Location'> <FiSend className='Inner'/></div>
    <h2>elafandalzoubi@gmail.com</h2>
    </div>


    <div className='LDiv'>
    <div className='Location'> <FiPhoneCall className='Inner'/></div>
    <h2>+46 794730660</h2>
    </div>
    </div>

    </div>


</div>
)

}




export default Contact_Me;