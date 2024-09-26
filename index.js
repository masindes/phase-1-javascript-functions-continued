// saturDayFun function declaration
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

// mondayWork function expression
const mondayWork = (activity = 'go to the office') => {
  return `This Monday, I will ${activity}.`;
};

// wrapAdjective function according to the specification
function wrapAdjective(highlight) {
  return function(adjective) {
    return `You are ${highlight}${adjective}${highlight}!`;
  };
}
