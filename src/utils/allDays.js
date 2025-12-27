import dayjs from "dayjs";
import isoWeek from 'dayjs/plugin/isoWeek.js';


dayjs.extend(isoWeek);
let startOfWeek = dayjs().startOf("isoWeek"); // isoWeek to start on Monday

export function getDatesOfWeek() {
  const daysOfWeek = [];

  
  //console.log(startOfWeek.format("DD-MM-YYYY"));

  for (let i = 0; i < 7; i++) {
    
    daysOfWeek.push(startOfWeek.add(i,'day'));
    //console.log(startOfWeek.add(i,'day').format("dddd DD MMMM YYYY"));

  }


  //console.log(daysOfWeek);
  //returns an array of dayjs objects of all the days of the week starting from monday
  return daysOfWeek;
}

//returns month of the first day of that week.
//this ensures uniformity in display in case month changes in the same week

export function monthOfWeek(){
  return startOfWeek.format("MMMM YYYY");
}

getDatesOfWeek();