
import React from 'react'
import TaskCard from './TaskCard'

import { getDatesOfWeek } from '../utils/allDays'

export default function TaskCardBlock() {
  //const [tasks, setTasks] = useState([]);
  const daysOfWeek = getDatesOfWeek();
  const tasks = [" Learn React",
              " Build a React App",
              " Deploy the App",
              " Repeat",
              " Profit $$$",];
  return (
    <div className="task-card-container">
      {daysOfWeek.map((day,index) => (
        TaskCard({tasks, cardDate: day,index})


                  ))

      }

    </div>

  )
}
