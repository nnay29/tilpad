import TaskCard from './components/TaskCard'
import UpperPart from './components/UpperPart'
import './App.css'
import TaskCardBlock from './components/TaskCardBlock'
import { useState } from 'react'

import dayjs from 'dayjs';


function App() {
  const [weekShift, setWeekShift] = useState(0); // weekShift tracks moving forward/backward from the current week
  const [today,setToday] = useState(dayjs()) //dayjs object that contains the date of today

  //const today = dayjs();
console.log(`today is ${today.day()}`);
  
  return (
    <>
      {/* props passed down so clickin on left-right button updates weekShift which re-renders the components with new values, hence new weeks */}
      <UpperPart weekShift={weekShift} setWeekShift={setWeekShift} />
      
      <TaskCardBlock weekShift={weekShift} today={today} setToday = {setToday}/>
    </>
  )
}

export default App
