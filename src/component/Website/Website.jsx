import React from "react";
import {Header , Body, MyProjects,About ,Services , Counter,Testimonial ,Contact_Me} from  '../Website'
import './Website.css'


const Website=()=>{


return(<div className="Website">

<Header/>
<Body />
<About />
<Services/>
<Counter/>
<MyProjects />
<Testimonial/>
<Contact_Me/>


</div>);

}


export default Website;