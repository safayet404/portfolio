import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

import Card from "../Card/Card";
import "../Card/Data";
import "../../assets/css/style.css";
import Data from "../Card/Data";
import TechnicalSkill from "../Card/TechnicalSkill";
import SkillData from "../Card/SkillData";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function AllCards() {
  const [active, setActive] = useState("FirstCard");
  AOS.init();

  return (
    <div id="scrollToEducation">
    <Container>
    <h3 className="name mb-5 mt-5">MORE ABOUT ME</h3>

    <div className="text-center mt-5">
      <button
        className="border sourceCodeGap btn  py-1 px-5  bg-slate-950 text-white  rounded-md "
        onClick={() => setActive("FirstCard")}
        type="button"
      >
        Education
      </button>
      <button
       className="border sourceCodeGap btn  py-1 px-4  bg-slate-950 text-white  rounded-md "
        onClick={() => setActive("SecondCard")}
        
      >
        Professional Skills
      </button>

     
    
    </div>

    {active === "FirstCard" && <Card data={Data} cardIndex={0} />}
    {active === "SecondCard" && <TechnicalSkill data={SkillData} cardIndex={0} />}
    {active === "ThirdCard" && <Card data={Data} cardIndex={2} />}
  </Container>
    </div>
   
  );
}

export default AllCards;
