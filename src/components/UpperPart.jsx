
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
    return (
        <>
            {console.log(`current weekShift: ${weekShift}`)}
            <div className="upper-part-container">


                {weekShift != 0 ? 
                    <h1 style={{ color: "#03c2fc" }}>{currentMonthYear}</h1>

                    :  //  Might add different colors for weeks ahead or weeks backward, so it will be three cases for conditional rendering
                        // switch case migh be useful here

                    <h1>{currentMonthYear}</h1>
                }
            </div>

            <button onClick={handleLeftClick}>left</button>

            <button onClick={handleRightClick}>right</button>

            <NavigationButton direction="left" />
            <NavigationButton direction="right" />

        </>
    )
}
export default UpperPart;