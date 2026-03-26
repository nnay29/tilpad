
import './TaskCard.css'
import '../index.css'


function TaskCard({
    tasks,
    cardDate,
    index,
    isToday = false
    }) {

    return (
        // <div className="task-card" key={index} style={isToday ? {backgroundColor: '#a93ecd'} : {}}>
        <div className="task-card" key={index}>
            <h2 style={isToday ? {color: '#03c2fc'} : {} } > <span className="day-of-week">{cardDate.format('ddd')}</span> {cardDate.format('DD MMM')} </h2>
            <hr />

            {tasks.map((task, index) => (
                <div className="task" key={index}>
                    <p>{task}</p>
                </div>
            ))}

        </div>

    )
}
export default TaskCard