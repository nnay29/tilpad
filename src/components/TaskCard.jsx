
import './TaskCard.css'
import '../index.css'

import { getDatesOfWeek } from '../utils/allDays'

function TaskCard() {
    const daysOfWeek = getDatesOfWeek();

    return (
        <>
            <div className="task-card-container">
                {daysOfWeek.map((day,index)=>(
                    <div className="task-card" key={index}>
                    <h2>{day.format('DD MMM')} <span className="day-of-week">{day.format('ddd')}</span></h2>
                    <hr />


                    <p> Learn React</p>
                    <p> Build a React App</p>
                    <p> Deploy the App</p>
                    <p> Repeat</p>
                    <p> Profit $$$</p>
                    </div>
                ))

                }
    
            </div>

        </>

    )
}
export default TaskCard