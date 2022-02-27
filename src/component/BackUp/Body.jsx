import './Body.css';
import AnimeElaf from '../../../assets/Images/BussnisMan.png'
import ICON from '../../../assets/Images/BodyIcon.png'
import Typical from 'react-typical'

const Body = ()=>{


return(
<div className='container-Body'>

<div className='left'>
    <h2>Hi everyone' I'm</h2>
    <h1>Elaf Alzoubi</h1>
    <spanc className="underText">UX/UI Designer + Fullstack developer <br/>+ Mobile developer (React Native). </spanc>
    
    <div className='Image-Div'>
        <img className='ElafImage' src={AnimeElaf} alt=''/>
        
    </div>

</div>

<div className='right'>
<div className='Text-animation'>
<p className='im'>I'am</p>   
<Typical 
        steps={['UI/UX developer 🎨', 900, 'Backend Developer 💻', 1100 ,'Mobile Developer 📱', 1000 , "Problem Solving 👨‍💻" , 1000]}
        loop={Infinity}
        wrapper="b"
      />


</div>
<img className='ICON' src={ICON} alt=''/>
<div className='Clip'>

</div>
    
</div>

</div>
)



}



export default Body;