import{Link, Outlet} from "react-router-dom";


const Service=()=>{
    return(
        <>
        <h1> Our Company Service</h1>
        <table width="100%">
            <tr>
                <td width="20%" height="200">
              
                   <Link to="companyservice"> Company Services </Link> 
                    <br/><br/>
                   <Link to="productservice"> Product Services </Link> 
                    <br/><br/>
                 <Link to="sellsservice"> Sells Services </Link>   
                </td>
                <td>

                   < Outlet/>

                </td>
            </tr>
        </table>
        </>
    )
}
export default Service;