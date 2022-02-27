import '../MyProjects/MyProjects.css';
import Rocket from '../../../assets/Images/Rocket.jpg'
import Iphone from '../../../assets/Images/iphone.png'
const MyProjects = ()=>{

const Go=()=>{
window.location = "https://buffdogenft.net/";

}
return(

<div className="Mproject">
<h1 className='ProjectTitle'>My Latest Work</h1>
<hr/>
<div className='ProjectCards'>


<div  data-aos="zoom-in" className='P1'>
<div className='InnerDiv'>
<h1 className='InnerDivTitle'>NFT STORE</h1>
<p className='UnderText'>Full Website</p>
<button className='View'onClick={()=>{Go()}} >View Website</button>
</div>
<div className='InnerDiv2'><img className='rocket' src={Iphone} alt="" /></div>

</div>



{/* 
<div data-aos="zoom-in" className='P2'>


// <div className='P2InnerDiv'></div>


<div  className='P2InnerDiv2'>

</div>


    
</div> */}





</div>



</div>
)

}



export default MyProjects;