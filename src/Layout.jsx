import{Link, Outlet} from "react-router-dom";


const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link>
        <Link to="about">About Us</Link>
        <Link to="service">Service</Link>
        <Link to="contact">Contact</Link>
    

        <hr size="3" color="red"/>

        <Outlet/>

        <hr size="3" color="red"/>

        www.mycompany.com 2024

        </>
    )
}
export default Layout;