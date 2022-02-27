import './Body.css';
import MainSvg from '../../../assets/SVG/MainSvg.svg'
import AOS from 'aos';
import Wave from '../../../assets/SVG/wave5.svg'

import 'aos/dist/aos.css';
// import Typical from 'react-typical'
import Blob from '../../../assets/Images/BodyIcon.png'
const Body = ()=>{


return(
<div data-aos="zoom-in" className='container-Body'>

<img  className='wave' src={Wave} alt=''></img>
|<div className='MobileBackground'></div>


<div className='left'>
<div className='Text-animation'>

</div>


<div className="Body-Name">

  <div className="hey">
    <h1 className='Hey'>Hey</h1> 
  <h1 className='Iam'>I'm Elaf Alzoubi</h1>  
  </div>
  <span className='NoteMe'>UX/Ui designer + back-end developer. Will create your website from A to Z with hight quality design and give you an advice until your website published
</span>

<div className='Buttons'>
<button className='Hire-me' onClick={()=>{ window.scrollTo({
        top: 5700,
        behavior: 'smooth',
    });}}>Hire Me</button>
{/* #e94b81 */}
<button className='Watch-me'>Watch me</button>
</div>

</div>



</div>


{/* background:linear-gradient( #1E90FF,#5742da);
 */}


<div   className='right' >
 <img className='Body-Vector' src={MainSvg} alt=''/>
 
    {/* <h1>Hello, I am Elaf Alzoubi</h1>
    <span className='UnderText'>Hi there, let's create your project from A to Z with a pretty design <br/> and technical and mechanical Website, with a hight quality design performance.</span>
    
    <input className='See-Portofolio' type="button" value="See My Portofolio   >"/> */}

{/* <span className="underText">UX/UI Designer + Fullstack developer <br/>+ Mobile developer (React Native). </span> */}
</div>


</div>
)



}
export default Body;