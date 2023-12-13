"use client"

import React, { useState , useEffect } from "react";
import "../styles/Calender.css";
import CalenderEvent from "./CalenderEvent";
import FilterBtn from "@/components/FilterBtn";
import CalenderDay from "./CalenderDay";



const dateToday = new Date();
const weekdayToday = dateToday.getDay();
const weekdayst = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
const weekdayss = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const weekdayText = weekdayst[weekdayToday];
const weekdaystate = weekdayss[weekdayToday];










function Calender(props) {

    const [day, setDay] = useState("weekdaystate");
    const [BtnName, setBtnName] = useState(weekdayText);
    
    const [activeSection, setActiveSection] = useState(null);

    const [percentageOfDay, setPercentageOfDay] = useState(0);
    
    useEffect(() => {
      // Calculate the percentage of time elapsed in a day
      const currentDate = new Date();
      const totalMinutesInDay = 24 * 60;
      const elapsedMinutesInDay = currentDate.getHours() * 60 + currentDate.getMinutes();
      const percentage = (elapsedMinutesInDay / totalMinutesInDay) * 100;
  
      // Set the percentage in the component state
      setPercentageOfDay(percentage);

    }, []); 

    
   
    function DaySetter(newDay) {
        setDay(newDay);


        changeBtnName(newDay)

      }
function changeBtnName(newDay){
  if(newDay==="mon"){
    setBtnName("Monday")
  }
   if(newDay==="tue"){
    
    setBtnName("Tuesday")
  }
   if(newDay==="wed"){
    setBtnName("Wednsday")
  }
   if(newDay==="thu"){
    setBtnName("Thursday")
  }
  if(newDay==="fri"){
    setBtnName("Friday")
  }
   if(newDay==="sat"){
    setBtnName("Saturday")
  }
   if(newDay==="sun"){
    setBtnName("Sunday")
  }


}  

      const handleScroll = () => {
        const container = document.getElementById("myScrollerContainer");
        const sections = document.querySelectorAll(".calenderarea");
      
        let newActiveSection = null;
      
        sections.forEach((section) => {
          const sectionRect = section.getBoundingClientRect();
      
          // Check if at least 50% of the section is visible
          if (
            sectionRect.left <= container.clientWidth / 2 &&
            sectionRect.right >= container.clientWidth / 2
          ) {
            newActiveSection = section.id;
          }
        });
      
        // Check if the newActiveSection is different from the current activeSection
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
      
          // Check if newActiveSection is not null before updating setDay
          if (newActiveSection !== null) {
            DaySetter(newActiveSection);
           

          }
         

          
        }
        
      };

// Attach the scroll event listener
useEffect(() => {
  const container = document.getElementById("myScrollerContainer");
  container.addEventListener("scroll", handleScroll);

  // Clean up the event listener on component unmount
  return () => {
    container.removeEventListener("scroll", handleScroll);
  };
}, []); // Empty dependency array means this effect runs once on mount





      

  let myDay = day;
  


let Jotunheim = props.schedule.Jotunheim;




let Midgard = props.schedule.Midgard;



const Vanaheim = props.schedule.Vanaheim;

if(props.personalProgram){




  Object.keys([Jotunheim]).map((day) => {
    console.log(day)
    

//     day.map((act)=>{

//       props.personalProgram.map((band) => {

// band.name===act.act?console.log(act):null        
        
//         })

//     })
    
  

  })
    
    






}


    return (


      
        <main>
      <h1 className="programh1">Program</h1>
      <div className="filters">
        <FilterBtn  link="#mon" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Monday" />
        <FilterBtn  link="#tue" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Tuesday" />
        <FilterBtn  link="#wed" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Wednsday" />
        <FilterBtn  link="#thu" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Thursday" />
        <FilterBtn  link="#fri" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Friday" />
        <FilterBtn  link="#sat" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Saturday" />
        <FilterBtn  link="#sun" setBtnName={setBtnName} BtnName={BtnName} Day={day} DaySetter={DaySetter} btntext="Sunday" />
      </div>

      

      <section className="calendar-container">
      
      <div className="scenes">
        <div className="scene">
          <h4>JOTUNHEIM</h4>
        </div>
        <div className="scene">
          <h4>MIDGARD</h4>
        </div>
        <div className="scene">
          <h4>VANAHEIM</h4>
        </div>
        
      </div>
      
      <div className="calender">
      
      <div id="myScrollerContainer" className="day">
            

    



      <CalenderDay personalProgram={props.personalProgram?props.personalProgram:null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="mon" bands={props.bands} Jotunheim={Jotunheim.mon} Vanaheim={Vanaheim.mon} Midgard={Midgard.mon}/>
      <CalenderDay personalProgram={props.personalProgram?props.personalProgram:null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="tue" bands={props.bands} Jotunheim={Jotunheim.tue} Vanaheim={Vanaheim.tue} Midgard={Midgard.tue}/>
      <CalenderDay personalProgram={props.personalProgram?props.personalProgram:null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="wed" bands={props.bands} Jotunheim={Jotunheim.wed} Vanaheim={Vanaheim.wed} Midgard={Midgard.wed}/>
      <CalenderDay personalProgram={props.personalProgram?props.personalProgram:null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="thu" bands={props.bands} Jotunheim={Jotunheim.thu} Vanaheim={Vanaheim.thu} Midgard={Midgard.thu}/>
      <CalenderDay personalProgram={props.personalProgram?props.personalProgram:null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="fri" bands={props.bands} Jotunheim={Jotunheim.fri} Vanaheim={Vanaheim.fri} Midgard={Midgard.fri}/>
      <CalenderDay personalProgram={props.personalProgram?props.personalProgram:null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="sat" bands={props.bands} Jotunheim={Jotunheim.sat} Vanaheim={Vanaheim.sat} Midgard={Midgard.sat}/>
      <CalenderDay personalProgram={props.personalProgram?props.personalProgram:null} percentageOfDay={percentageOfDay} currentDay={weekdaystate} day="sun" bands={props.bands} Jotunheim={Jotunheim.sun} Vanaheim={Vanaheim.sun} Midgard={Midgard.sun}/>
  

      



      </div>
      
      
      </div>
    </section>
    
    </main>

    
  );
}

export default Calender;
