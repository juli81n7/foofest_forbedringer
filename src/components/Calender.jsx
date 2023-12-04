"use client"


import "../styles/Calender.css";
import CalenderEvent from "./CalenderEvent";
function Calender(props) {
  
  console.log("DATAAAAA", props.schedule)
  
const Jotunheim = props.schedule.Jotunheim;
const Midgard = props.schedule.Midgard;
const Vanaheim = props.schedule.Vanaheim;


    return (
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
        <div className="calenderarea">
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
                Jotunheim.mon.map((thing) => (
                    thing.act !== "break" ? (
                      <CalenderEvent

                        img2={props.bands.find(band => band.name === thing.act).logo}
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
                Midgard.mon.map((thing) => (
                    thing.act !== "break" ? (
                      <CalenderEvent

                        img2={props.bands.find(band => band.name === thing.act).logo}
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
                Vanaheim.mon.map((thing) => (
                    thing.act !== "break" ? (
                      <CalenderEvent

                        img2={props.bands.find(band => band.name === thing.act).logo}
                        name={thing.act}
                        start={thing.start}
                        end={thing.end}

                      />
                    ) : null
                  ))
                  
            
            }
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Calender;
