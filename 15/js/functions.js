
const checkStringLength = function(string,length){
  if(string.length <= length){
    return true;
  }else{
    return false;
  }
};


const isPalindrome = function(string){
  string = string.toLowerCase().replaceAll(' ','');
  let newString = '';
  for(let i = string.length - 1;i >= 0;i--){
    newString += string[i];
  }

  if(newString === string){
    return true;

  }else{
    return false;
  }

};

function timeToMinutes(time){
  const [hour, minutes] = time.split(':');
  const minutesInOneHour = 60;

  return hour * minutesInOneHour + parseInt(minutes, 10);
}

function checkMeeting (dayStart, dayEnd, meetingStart, meetingDuration){
  const dayStartInMinutes = timeToMinutes(dayStart);
  const dayEndInMinutes = timeToMinutes(dayEnd);
  const meetingStartInMinutes = timeToMinutes(meetingStart);
  return meetingStartInMinutes >= dayStartInMinutes && meetingStartInMinutes + meetingDuration <= dayEndInMinutes;
}
