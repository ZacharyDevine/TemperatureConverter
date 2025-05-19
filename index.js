function convertToCelcius (temp){
  temp = Number(temp);
  return ((temp-32)*5/9);
}

function describeTemperature(temp){
  const cTemp = convertToCelcius(temp);
  if(cTemp < 0){
    return `very cold`;
  }else if(cTemp < 20){
    return `cold`;
  }else if(cTemp < 30){
    return `warm`;
  }else if(cTemp < 40){
    return `hot`;
  }else{
    return `very hot`
  }
}

const input = prompt(`Please enter the temperature in fahrenheit`);
const converter = convertToCelcius(input);
const description = describeTemperature(input);

alert(`${input} in Celcius is ${converter}. ${converter} is ${description}.`);