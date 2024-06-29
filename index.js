// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
// console.log(saturdayFun())

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

const wrapAdjective = function (initializer) {
  return function result(statement) {
    return `You are ${initializer}${statement}${initializer}!`
    
  };
};
// console.log(wrapAdjective("@")("a good girl"))