import './Counter.css';
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import Happy from '../../../assets/SVG/Happybody.svg'
import Checked from '../../../assets/SVG/checklist.svg'
import Done from '../../../assets/Images/done.gif'
import Coffe from '../../../assets/Images/tea.gif'
const Counter=()=>{

    const style = {

        'width': '30px',
        'height': '30px',
      }

return(


<div className='Centers'>
<div data-aos="zoom-in" className='mCounter'>




<CountUp end={50} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <div className='Happy-client'>
               
<img className='HappySvg' src={Happy} alt=''/>
        <h1 className='number' ref={countUpRef}></h1>
<h1 className='Titlte'>Happy customers</h1>


</div>
            </VisibilitySensor>
        )}
    </CountUp>


<CountUp end={14} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <div className='Happy-client'>
                <img className='HappySvg' style={style} src={Done} alt=''/>

<h1 className='number' ref={countUpRef}></h1>
<h1 className='Titlte'>complete projects</h1>
{/* <div className='BottomColorAnimation'></div> */}
</div>
            </VisibilitySensor>
        )}
    </CountUp>






<CountUp end={990} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <div className='Happy-client'>
                <img className='HappySvg' src={Coffe} alt=''/>
<h1 className='number' ref={countUpRef}>100</h1>
<h1 className='Titlte'>cup of coffe</h1>
{/* <div className='BottomColorAnimation'></div> */}
</div>
            </VisibilitySensor>
        )}
    </CountUp>

    <div className='BottomColorAnimation'></div>
    </div>

    </div>




)



}






export default Counter;