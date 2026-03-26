
import React from 'react'
import TaskCard from './TaskCard'

import { getDatesOfWeek } from '../utils/allDays'

export default function TaskCardBlock({
  weekShift = 0,
  today = today, //dayjs object that contains the date of today
  setToday = setToday
}) {
  //const [tasks, setTasks] = useState([]);
  const daysOfWeek = getDatesOfWeek(weekShift); // get dates of the week based on weekShift
  const tasks = [" Learn React",
              " Build a React App",
              " Deploy the App",
              " Repeat",
              " Profit $$$",];
  return (
    <div className="task-card-container">
      {daysOfWeek.map((day,index) => (
        
        TaskCard({
          tasks,
          cardDate: day,
          index,
          isToday: day.isSame(today,'day') // prop to check if TaskCard's day is the day of Today
        })
      ))
      }

    </div>

  )
}
