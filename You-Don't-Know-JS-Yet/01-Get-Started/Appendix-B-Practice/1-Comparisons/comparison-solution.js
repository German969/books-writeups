const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  let moment = (time) => {
    const values = time.split(':').map(time => +time);

    return values[0] * 60 + values[1];
  }
  const dayStartValue = moment(dayStart);
  const dayEndValue = moment(dayEnd);

  const startValue = moment(startTime);

  const early = startValue < dayStartValue;
  const late = startValue + durationMinutes > dayEndValue

  if (early || late) { return false };

  return true
}

console.log(scheduleMeeting("7:00", 15));    //false
console.log(scheduleMeeting("07:15", 30));   //false
console.log(scheduleMeeting("7:30", 30));    //true
console.log(scheduleMeeting("11:30", 60));   //true
console.log(scheduleMeeting("17:00", 45));   //true
console.log(scheduleMeeting("17:30", 30));   //false
console.log(scheduleMeeting("18:00", 15));   //false