
import { monthOfWeek } from "../utils/allDays";
//import { useState } from "react";

import NavigationButton from "./NavigationButton.jsx";
function UpperPart({weekShift, setWeekShift}){ // weekShift and setWeekShift are props received from App.jsx
    

    const handleLeftClick = () => {
        
        console.log(weekShift);
        setWeekShift(weekShift - 1);
        
    }
    const handleRightClick = () => {
         
        console.log(weekShift);
        setWeekShift(weekShift + 1);
         
    }

    const currentMonthYear = monthOfWeek(weekShift); //use monthOfWeek rather than direct call
    return(
        <>
        {console.log(`current weekShift: ${weekShift}`)}
        <div className="upper-part-container">
            <h1>{currentMonthYear}</h1>
        </div>

        <button onClick={handleLeftClick}>left</button>
        
        <button onClick={handleRightClick}>right</button>

        <NavigationButton direction="left" />
        <NavigationButton direction="right" />
        
        </>
    )
}
export default UpperPart;