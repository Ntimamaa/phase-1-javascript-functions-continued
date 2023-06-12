function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

saturdayFun(); 
saturdayFun('partying'); 


const mondayWork = function(work = 'go to the office') {
  return `This Monday, I will ${work}.`;
}

mondayWork();
mondayWork('work from home'); 


function wrapAdjective(wrap) {
    if(wrap === '*'){
  return function(adjective = 'a hard worker') {
    return `You are ${wrap}${adjective}${wrap}!`;
  }
    }
    else if(wrap === '||'){
        return function(adjective = 'a dedicated programmer') {
            return `You are ${wrap}${adjective}${wrap}!`;
          }
    }
}
wrapAdjective('*');
wrapAdjective('||')

