
import { monthOfWeek } from "../utils/allDays";
function UpperPart(){
    //const currentMonthYear = dayjs().format('MMMM YYYY')
    const currentMonthYear = monthOfWeek(); //use monthOfWeek rather than direct call
    return(
        <>
        <div className="upper-part-container">
            <h1>{currentMonthYear}</h1>
        </div>
        </>
    )
}
export default UpperPart;