
import './TaskCard.css'
import '../index.css'

//import { getDatesOfWeek } from '../utils/allDays'

function TaskCard({tasks, cardDate}) {
//    const daysOfWeek = getDatesOfWeek();

    return (
        <>
            {/* <div className="task-card-container"> */}
              
                    <div className="task-card">
                    <h2>{cardDate.format('DD MMM')} <span className="day-of-week">{cardDate.format('ddd')}</span></h2>
                    <hr />

                    {tasks.map((task, index) => (
                        <div className="task" key={index}>
                            {/* <input type="checkbox" /> */}
                            <p>{task}</p>
                        </div>
                    ))}

                    {/* <p> Learn React</p>
                    <p> Build a React App</p>
                    <p> Deploy the App</p>
                    <p> Repeat</p>
                    <p> Profit $$$</p> */}
                    </div>
                

    
            {/* </div> */}

        </>

    )
}
export default TaskCard