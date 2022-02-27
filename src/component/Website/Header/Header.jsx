import './Header.css';
const Header = ()=>{


return(
    <section>
<div className='Main-Header'>
{

window.addEventListener('scroll', (event) => {
    var varible = document.querySelector(".Main-Header");
    var sec = document.querySelector("section")
    var talk = document.querySelector(".LetsTalk");
    sec.classList.toggle("sticky" ,window.scrollY > 20)
if(window.scrollY > 20){

    varible.setAttribute("style" , "background:linear-gradient( #1E90FF,#1E90FF) ")


}    
else if(window.scrollY < 20){

    varible.setAttribute("style" , "background:transparent ")
 


}   


    })
    
    }





<div className="container">

<h1 className="Header-Name">EA</h1>
<ul>
<li onClick={()=>{ window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });}}>HOME</li>
<li onClick={()=>{ window.scrollTo({
        top: 700,
        behavior: 'smooth',
    });}}> ABOUT</li>
<li onClick={()=>{ window.scrollTo({
        top: 1700,
        behavior: 'smooth',
    });}}>SERVICES</li>
<li onClick={()=>{ window.scrollTo({
        top: 2530,
        behavior: 'smooth',
    });}}>PROJECTS</li>
<li onClick={()=>{ window.scrollTo({
        top: 3400,
        behavior: 'smooth',
    });}}>TESTIMONIAL</li>
<li onClick={()=>{ window.scrollTo({
        top: 5900,
        behavior: 'smooth',
    });}}>CONTACT</li>
</ul>
<button className='LetsTalk' onClick={()=>{ window.scrollTo({
        top: 4700,
        behavior: 'smooth',
    });}}>Talk</button>
<h1 className='menu'>Elaf</h1>
</div>

</div>
</section>

)
}



export default Header;