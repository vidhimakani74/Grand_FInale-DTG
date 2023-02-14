import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { queries } from "@testing-library/react";
import Table from 'react-bootstrap/Table';
 
function Record(){
    return(
        <>
        <h1 style={{"color":"rgb(22,201,249) ", textAlign:"center", marginTop:"5%"}}>Records List</h1>
        <Table striped bordered hover  style={{width:"80vw",marginLeft:"11vw",marginTop:"10vh",borderRadius:"5px"}} >
      <thead>
        <tr style={{backgroundColor:"rgb(172,235,253)"}}>
          <th  >Sr. No.</th>
          <th>Service Name</th>
          <th>Mobile No.</th>
          <th>Token ID</th>
          <th>Slot Time</th>
          <th>Create Date</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{backgroundColor:"rgba(0,0,0,0)"}}>
          <td>1</td>
          <td>Aadhar Card</td>
          <td>9426984593</td>
          <td>123456</td>
          <td>9:00</td>
          <td>10/02/2023</td>
        </tr>
        <tr style={{backgroundColor:"rgb(172,235,253)"}}>
          <td>2</td>
          <td>Pan Card</td>
          <td>8320908112</td>
          <td>852963</td>
          <td>1.00</td>
          <td>10/02/2023</td>
        </tr>
        <tr style={{backgroundColor:"rgba(0,0,0,0)"}}>
          <td>3</td>
          <td>EWS certificate</td>
          <td>9409311996</td>
          <td>123852</td>
          <td>7.20</td>
          <td>10/02/2023</td>
        </tr>
        <tr style={{backgroundColor:"rgb(172,235,253)"}}>
          <td>4</td>
          <td>Non creamy layer certificate</td>
          <td>7859875910</td>
          <td>465132</td>
          <td>7.40</td>
          <td>10/02/2023</td>
        </tr>
        <tr style={{backgroundColor:"rgba(0,0,0,0)"}}>
          <td>5</td>
          <td>SC/ST Certificate</td>
          <td>9409311996</td>
          <td>123852</td>
          <td>7.20</td>
          <td>10/02/2023</td>
        </tr>
        <tr style={{backgroundColor:"rgb(172,235,253)"}}>
          <td>6</td>
          <td>Income Certificate</td>
          <td>9409311996</td>
          <td>123852</td>
          <td>7.20</td>
          <td>10/02/2023</td>
        </tr>
      </tbody>
    </Table>
        </>
    )
}
export default Record;