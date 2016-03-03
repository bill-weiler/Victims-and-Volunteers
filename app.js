//Need vitim name, phone number, and street name
var victimArr = []
var volArr = []

var victimNum = prompt("How many disaster victims are to be entered?")
for(i = 0; i < victimNum; i++){
victimArr.push(prompt("Victim first name"))
victimArr.push(prompt("Victim phone number"))
victimArr.push(prompt("Victim street name"))
}
console.log(victimArr)

var volNum = prompt("How many volunteers are to be entered?")
for(i = 0; i < volNum; i++){
volArr.push(prompt("Volunteer first name"))
volArr.push(prompt("Volunteer phone number"))
volArr.push(prompt("Volunteer street name"))
}
console.log(volArr)
//alert the number of persons in need, the number of volunteers, and a list of all persons in need and all volunteers
alert("Number of victims in need: " + victimNum + "\n" +
"Number of volunteers: " + volNum)
