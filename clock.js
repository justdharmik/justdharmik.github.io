//--- The Clock JavaScript ---


// Toast To Reload


// Variables
var myTime;
var currentDate;
var currentTime;
var hourChange;
var myTimeT;
var currentTimeT;
var tfhourF;
var tHourF;

// Main Clock and Date
// 
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

tfHourF = setInterval(() => {
    myTime = new Date()
//  myTime.setHours(20)
    currentDate = myTime.toLocaleDateString(undefined, options)
    currentTime = `${(myTime.getHours() < 10 ? '0' : '') + myTime.getHours()}:${(myTime.getMinutes() < 10 ? '0' : '') + myTime.getMinutes()}:${(myTime.getSeconds() < 10 ? '0' : '') + myTime.getSeconds()}`
    document.getElementById("time").innerHTML = currentTime
    document.getElementById("date").innerHTML = `on ${currentDate}`
}, 1000)


// Toggle Time Format
// 
console.log("Not Clicked")
function toggle(){
    clearInterval(tfHourF)
    var toastLiveExample = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    tHourF = setInterval(() => {
        console.log("Clicked")
        myTime = new Date()
//      myTime.setHours(20)
        hourChange = myTime.getHours()
        if (hourChange > 12) {
            hourChange -= 12;
            // myTimeT = hourChange;
        } 
        else if (hourChange === 0) {
            hourChange = 12;
            // myTimeT = hourChange;
        }
        currentDate = myTime.toLocaleDateString(undefined, options)
        currentTime = `${(hourChange < 10 ? '0' : '')+ hourChange}:${(myTime.getMinutes() < 10 ? '0' : '') + myTime.getMinutes()}:${(myTime.getSeconds() < 10 ? '0' : '') + myTime.getSeconds()}`
        document.getElementById("time").innerHTML = currentTime
        document.getElementById("date").innerHTML = `on ${currentDate}`
}, 1000)
}

































/*
myTimeT = new Date()
hourChange = myTimeT.getHours()
console.log("before: " + hourChange)
var click = 0
function toggle(){
    click += 1
    clearInterval(tfHourF)
    if (click == 1){
        
        if (hourChange > 12) {
            hourChange -= 12;
            // myTimeT = hourChange;
        } 
        else if (hourChange === 0) {
            hourChange = 12;
            // myTimeT = hourChange;
        }
        tHourF = setInterval(() => {
            console.log("clicked: " + hourChange)
            currentDate = myTime.toLocaleDateString(undefined, options)
            currentTime = `${(hourChange < 10 ? '0' : '') + hourChange}:${(myTimeT.getMinutes() < 10 ? '0' : '') + myTimeT.getMinutes()}:${(myTimeT.getSeconds() < 10 ? '0' : '') + myTimeT.getSeconds()}`
            document.getElementById("time").innerHTML = currentTime
            document.getElementById("date").innerHTML = `on ${currentDate}`

        }, 1000);
    }
    else if (click > 1) {
        tfhourF
    }
    return click
}
*/

