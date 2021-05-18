function scuberGreetingForFeet(ride){
  // Write your code here!
  //let ride = scuberGreetingForFeet();
  let x;
  if (ride <= 400) {
    x = `This one is on me!`;
  } else if (ride <= 2500) {
    x = `I will gladly take your thirty bucks.`;
  } else  {
    x = `No can do.`;
  }
  return x;
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC") {
    return `Ok, sounds good.`;
  }
  else {
    return `No go.`
  }
  
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === "generous"){
    return `Thank you so much.`;
  }
  else if (tip === "not as generous") {
    return `Thank you.`
  } else {
    return `Bye.`
  }
}