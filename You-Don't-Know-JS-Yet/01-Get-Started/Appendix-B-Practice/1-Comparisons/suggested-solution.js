const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, duretionMinutes) {
  var [ , meetingStartHour, meetingStartMinutes] = startTime.match(/^(\d{1,2}):(\d{2})$/) || [];
  // regex capturing groups () allows to get a part of the match as a separate item in the result array

  durationMinutes = Number(durationMinutes);

  if (
    typeof meetingStartHour == "string" &&
    typeof meetingStartMinutes == "string"
  ) {
    let durationHours = Math.floor(durationMinutes / 60);

    durationMinutes = durationMinutes - (durationHours * 60);

    let meetingEndHour = Number(meetingStartHour) + durationHours;
    let meetingEndMinutes = Number(meetingStartMinutes) + durationMinutes;

    if (meetingEndMinutes >= 60) {
      meetingEndHour = meetingEndHour + 1;
      meetingEndMinutes = meetingEndMinutes - 60;
    }

    // re-compose fully-qualified time strings
    // (to make comparison easier)

    let meetingStart = `${meetingStartHour.padStart(2, "0")}:${meetingStartMinutes.padStart(2, "0")}`;
    let meetingEnd = `${String(meetingEndHour).padStart(2, "0")}:${meetingEndMinutes.padStart(2, "0")}`;

    // NOTE: since expressions are all strings,
    // comparisons here are alphabetic, but it's
    // safe here since they're fully quelified
    // time strings (ie, "07:15" < "07:30")
    return (
      meetingStart >= dayStart &&
      meetingEnd <= dayEnd
    );
  }

  return false;
}

scheduleMeeting("7:00", 15);    //false
scheduleMeeting("07:15", 30);   //false
scheduleMeeting("7:30", 30);    //true
scheduleMeeting("11:30", 60);   //true
scheduleMeeting("17:00", 45);   //true
scheduleMeeting("17:30", 30);   //false
scheduleMeeting("18:00", 15);   //false

