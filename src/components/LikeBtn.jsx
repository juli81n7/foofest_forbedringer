"use client"

import "../styles/LikeBtn.css";
import React, { useState, useEffect } from "react";

function LikeBtn(props) {

    let lists = []
    
    const [like, setLike] = useState(false) 
  
    useEffect(() => {
      // Load liked events from localStorage on mount
      const likedEvents = JSON.parse(localStorage.getItem("liked")) || [];
      const likedEvent = likedEvents.find((obj) => obj.eventName === props.name);
      setLike(likedEvent !== undefined);
    }, [props.name]);
  
    


    function toggleLike(){
        setLike((old) => !old);
      }
      
      function handleLike(e){
       toggleLike()
        
      
        
        if (localStorage.getItem("liked")) {
          
          

          lists=JSON.parse(localStorage.getItem("liked"))
      
      
          if(lists.find((obj) => obj.eventName === props.name)){

            const objWithNameIndex = lists.findIndex((obj) => obj.eventName === props.name);
            lists.splice(objWithNameIndex, 1);
            localStorage.setItem("liked", JSON.stringify(lists));
                }
            
                else{
                  lists.push({ eventName: props.name });
                  localStorage.setItem("liked", JSON.stringify(lists));
                }
                
            
          
        } else {

      
          lists.push({ eventName: props.name });
          let lS = JSON.stringify(lists);
          localStorage.setItem("liked", lS);
          
      
          
        }
      
      
      
          
          
          
          
      
      
      
          
      
      }


    return (
<button className={props.color}>
    <svg onClick={handleLike} className={like ? "active":''}  data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.05 73.54">
    <g id="Layer_1-2" data-name="Layer 1">
      <polyline class="cls-1" points="45.02 73.18 16.86 45.02 .55 28.71 6.22 5.95 28.71 .55 45.02 16.86 61.33 .55 83.82 5.95 89.49 28.71 73.18 45.02 45.03 73.18"/>
    </g>
  </svg>
</button>
  );
}

export default LikeBtn;
