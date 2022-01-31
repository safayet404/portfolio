import React,{useState} from 'react';
import { Button } from 'react-bootstrap';


import Card from '../Card/Card';
import '../Card/Data';
import '../../assets/css/style.css';
import Data from '../Card/Data';

function AllCards() {


  const [active,setActive] = useState("FirstCard");

  return (



    <div >

      <h6 className="portfolioSubHeader text-center margin-top">7+ Years of Experience</h6>
      <h1 className="portfolioHeader text-center">My Resume</h1>

      <div className="text-center mt-5">
        <Button className="btn-background" onClick={()=> setActive("FirstCard")} type="button">Education</Button>
        <Button className="btn-background" onClick={()=> setActive("SecondCard")} type="button">Professional Skills</Button>
        <Button className="btn-background" onClick={()=> setActive("ThirdCard")} type="button">Experience</Button>
       
       
      </div>

      {active === "FirstCard" &&  <Card data={Data} cardIndex={0}/>}
      {active === "SecondCard" &&  <Card data={Data} cardIndex={1}/>}
      {active === "ThirdCard" &&  <Card data={Data} cardIndex={2}/>}
      
    </div>
  );
}

export default AllCards;
