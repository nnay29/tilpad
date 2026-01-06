
import { monthOfWeek } from "../utils/allDays";
import { useState } from "react";

import NavigationButton from "./NavigationButton.jsx";
function UpperPart(){
    const [datePos, setdatePos] = useState(0);

    const handleLeftClick = () => {
         
        setdatePos(datePos - 1);
        // console.log(datePos);
    }
    const handleRightClick = () => {
         
        setdatePos(datePos + 1);
        // console.log(datePos);
    }

    const currentMonthYear = monthOfWeek(); //use monthOfWeek rather than direct call
    return(
        <>
        {console.log(`current datePos: ${datePos}`)}
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