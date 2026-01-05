
import './TaskCard.css'
import '../index.css'

function TaskCard({tasks, cardDate,index}) {
//    const daysOfWeek = getDatesOfWeek();

    return (
        // <>
          
              
                    <div className="task-card" key={index}>
                    <h2> <span className="day-of-week">{cardDate.format('ddd')}</span> {cardDate.format('DD MMM')} </h2>
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