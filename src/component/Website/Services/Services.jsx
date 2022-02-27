import './Services.css';
import light from '../../../assets/SVG/wave1.svg';
import lightPNG from '../../../assets/Images/light.png';
import { MdDesignServices } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Services =()=>{
    


    return(
        <div data-aos="zoom-in" className='mServicesDiv'>
<div  className="mServicesDivTitle">
    <h1 className='ServiceTitle'>Services</h1>
   <hr/>
</div>


<div className='ServicesBox'>
    
    <div className='UiBox'>
        <div className='BG'><MdDesignServices className='F'/></div>
        <h1>UI & UX design </h1>
        <span className='ServiceNote'>Do you have a design problem and want a modern design? We are the strongest and best solution. Contact me for more information</span>
        <div className='BottomColorAnimation'></div>
    </div>


    <div className='MobileBox'>
    <div className='BG'><FaMobileAlt className='F'/></div>
        <h1>Fully Responsive</h1>
        <span className='ServiceNoteMobile'>Full responsive website on all plattforms Ipad Mobile PC and TV</span>

        <div className='BottomColorAnimation'></div>

    </div>
    <div className='Web-development'>

    <div className='BG'><BsCodeSquare className='F'/></div>
        <h1>Web Development</h1>
        <span className='ServiceNoteDevelopment'>Full site developer and worked on many sites in backend and frontend. I have +5 years of experience in website development and design.</span>

        <div className='BottomColorAnimation'></div>
    </div>
</div>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
 {   AOS.init()}
  {AOS.refresh()}

  </script>
        </div>

    )


}


export default Services;