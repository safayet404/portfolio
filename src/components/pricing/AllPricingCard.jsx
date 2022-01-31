import React,{useState} from 'react';
import { Button } from 'react-bootstrap';

import PricingCard from '../../components/pricing/PricingCard';
import '../../components/pricing/PricingData';
import '../../assets/css/style.css';
import PricingData from '../../components/pricing/PricingData';

function AllPricingCard() {


  const [active,setActive] = useState("FirstCard");

  return (



    <div >

 
     <div className="text-center mt-5 pricing-btn-header">
        <Button className="pricing-btn-background" onClick={()=> setActive("FirstCard")} type="button">Basic</Button>
        <Button className="pricing-btn-background" activeStyle={{color:'#000'}} onClick={()=> setActive("SecondCard")} type="button">Standard</Button>
        <Button className="pricing-btn-background" onClick={()=> setActive("ThirdCard")} type="button">Premium</Button>
      </div>

      {active === "FirstCard" &&  <PricingCard data={PricingData} cardIndex={0}/>}
      {active === "SecondCard" &&  <PricingCard data={PricingData} cardIndex={1}/>}
      {active === "ThirdCard" &&  <PricingCard data={PricingData} cardIndex={2}/>}
  

      
    </div>
  );
}

export default AllPricingCard;
