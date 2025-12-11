import dayjs from "dayjs";

function UpperPart(){
    const currentMonthYear = dayjs().format('MMMM YYYY')
    return(
        <>
        <div className="upper-part-container">
            <h1>{currentMonthYear}</h1>
        </div>
        </>
    )
}
export default UpperPart;