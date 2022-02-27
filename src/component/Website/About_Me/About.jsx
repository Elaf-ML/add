import '../About_Me/About.css';

import AboutElafSVG from '../../../assets/SVG/AboutElaf1.svg'
import DownloadCVImage from '../../../assets/Images/download.png'
import JSPD from 'jspdf'
import CV from '../About_Me/CV.pdf'
import fileDownload from 'js-file-download';
import { Axios } from 'axios';

const About=()=>{


return(
  <div data-aos="zoom-in" className='AboutDiv'>
      
      <div  className='About-LeftSide'>
          <img className='AboutElafImg' src={AboutElafSVG} alt=''/>

      </div>

      <div className='About-RightSide'>
<h1 className='Let-me-intoduce-meself'>LET ME <br/>INTRODUCE<br/>MYSELF</h1>
<span className='AboutMeNote'>a Web developer, with extensive knowladge an years of experience, working in web technologies and Ui /Ux design, delivering quality work. a Mobile developer (React Native) with a +1 years experience. </span>
      
     <div className='AboutBTN'>
     <button className='Hire-me'>Hire me</button>

     <button className='Download_CV'>Download CV</button>

     </div>

      </div>



  </div>
)

}



export default About;