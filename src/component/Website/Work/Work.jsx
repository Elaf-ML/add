import './Work.css';
import HTML from '../../../assets/SVG/HTML.svg'
import SASS from '../../../assets/SVG/SASS.svg'
import JAVASCRIPT from '../../../assets/Images/Javascript.gif'
import REACT from '../../../assets/Images/REACT.gif'
import BIGSVG from '../../../assets/SVG/Skills-svg.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';


const Work=()=>{


return(

<div  data-aos-once="false"  data-aos-duration="1000" data-aos="slide-right"  className='Work-container'>
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

<div className='Skills-left'>
  <h1 className='Skills-title'>My Skills</h1>
</div>


<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
   {AOS.init()}
  </script>
</div>
)


}


export default Work;

