import "../styles/Button.css";
import Link from "next/link";

import CalenderEvent from "./CalenderEvent";
import FilterBtn from "@/components/FilterBtn";



function CalenderDay(props) {

  



  return (
<>
 <div id={props.day} className="calenderarea">

 {props.day === props.currentDay ? (
  
    <div  className="now_container" style={{left: `${props.percentageOfDay}%`}}       >
      <p id="now">Now</p>
      <div className="now_line"></div>
  
  </div>
  
) : null}

 <div className="calenderbar">
<div className="calender_time"><p>1:00</p></div>
<div className="calender_time"><p>2:00</p></div>
<div className="calender_time"><p>3:00</p></div>
<div className="calender_time"><p>4:00</p></div>
<div className="calender_time"><p>5:00</p></div>
<div className="calender_time"><p>6:00</p></div>
<div className="calender_time"><p>7:00</p></div>
<div className="calender_time"><p>8:00</p></div>
<div className="calender_time"><p>9:00</p></div>
<div className="calender_time"><p>10:00</p></div>
<div className="calender_time"><p>11:00</p></div>
<div className="calender_time"><p>12:00</p></div>
<div className="calender_time"><p>13:00</p></div>
<div className="calender_time"><p>14:00</p></div>
<div className="calender_time"><p>15:00</p></div>
<div className="calender_time"><p>16:00</p></div>
<div className="calender_time"><p>17:00</p></div>
<div className="calender_time"><p>18:00</p></div>
<div className="calender_time"><p>19:00</p></div>
<div className="calender_time"><p>20:00</p></div>
<div className="calender_time"><p>21:00</p></div>
<div className="calender_time"><p>22:00</p></div>
<div className="calender_time"><p>23:00</p></div>
<div className="calender_time"><p>24:00</p></div>





</div>
   <div className="calenderbar">

     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     
     
     {
         props.Jotunheim.map((thing) => (
             thing.act !== "break" ? (
               <CalenderEvent
               lists={props.lists}
               handleLocalStorage={props.handleLocalStorage}
               scene="jotunheim"
                 img2={props.bands.find(band => band.name === thing.act).logo}
                 slug={props.bands.find(band => band.name === thing.act).slug}
                 key={props.bands.find(band => band.name === thing.act).id}
                 name={thing.act}
                 start={thing.start}
                 end={thing.end}
                 

               />
             ) : null
           ))
           
     
     }
   </div>
   <div className="calenderbar">
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
    
    
    
     {
      props.Midgard.map((thing) => (
          thing.act !== "break" ? (
            <CalenderEvent
            lists={props.lists}
            handleLocalStorage={props.handleLocalStorage}
            scene="midgard"
              img2={props.bands.find(band => band.name === thing.act).logo}
              slug={props.bands.find(band => band.name === thing.act).slug}
              key={props.bands.find(band => band.name === thing.act).id}
              name={thing.act}
              start={thing.start}
              end={thing.end}
              

            />
          ) : null
        ))
        
  
  }
    
   </div>
   <div className="calenderbar">
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
     <div className="calenderhour"></div>
    
     {
      props.Vanaheim.map((thing) => (
          thing.act !== "break" ? (
            <CalenderEvent
            lists={props.lists}
            handleLocalStorage={props.handleLocalStorage}
            scene="vanaheim"
              img2={props.bands.find(band => band.name === thing.act).logo}
              slug={props.bands.find(band => band.name === thing.act).slug}
              key={props.bands.find(band => band.name === thing.act).id}
              name={thing.act}
              start={thing.start}
              end={thing.end}
              

            />
          ) : null
        ))
        
  
  }

   </div>
  
 </div>



</>
  );
}

export default CalenderDay;
