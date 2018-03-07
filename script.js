
const flashCardContent = new Map();
flashCardContent.set("1cardFront", "1cardBack")
flashCardContent.set("2cardFront", "2cardBack")
flashCardContent.set('3cardFront', '3cardBack')

let testKey =  [...flashCardContent].find(([,v])=> v === '1cardFront') || [][0];
let testKey2 =  [...flashCardContent].find(([,v])=> v === '2cardBack') || [][0];
function getByValue(map, searchVaue){
  for (let [key, value] of map.entries()){
    if (value === searchValue)
    return key; 
  }
}

// document.getElementById("showAnswer").addEventListener("click", function(value, key){
  
//   })

function showAnswer() {
  var x = document.getElementById("answer");
  if (x.style.display === `${key}`)
    x.style.display = `${value}`
}