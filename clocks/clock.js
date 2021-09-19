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
var VanillaTilt;
var clickRec;

var greetDay = ["Good Morning. It is a beautiful day!", "Morning Folks. Have a great day!", "Wow the sun is so bright today!"]
var greetEve = ["Good Evening. Don't forget your snacks!", "What a beautiful evening!", "Hey there, this evening is mesmerizing."]

var rEve = greetEve[Math.floor(Math.random()*greetEve.length)] + " <br>"
var rDay = greetDay[Math.floor(Math.random()*greetDay.length)] + " <br>"

// Main Clock and Date

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

function clicked() {
    if (clickRec == 0) {
        toggleBack()
    }
    else {
        toggle()
    }
}

// For 24 Hour Format

function toggleBack() {
    clearInterval(tHourF)
    tfHourF = setInterval(() => {
        clickRec = 1
        myTime = new Date()
    //  myTime.setHours(20)
        currentDate = myTime.toLocaleDateString(undefined, options)
        currentTime = `${(myTime.getHours() < 10 ? '0' : '') + myTime.getHours()}:${(myTime.getMinutes() < 10 ? '0' : '') + myTime.getMinutes()}:${(myTime.getSeconds() < 10 ? '0' : '') + myTime.getSeconds()}`
        document.getElementById("time").innerHTML = currentTime
        document.getElementById("date").innerHTML = `on ${currentDate}`
    }, 1000)
}

// For 12 Hour Format | Toggle

function toggle(){
    clearInterval(tfHourF)
    var toastLiveExample = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
    clickRec = 0
    

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    tHourF = setInterval(() => {
        myTime = new Date()
        hourChange = myTime.getHours()
        var ampm = ''
        if (hourChange >= 12) {
            ampm = 'pm'
        }
        else if (hourChange < 12) {
            ampm = 'am'
        }
        if (hourChange > 12) {
            hourChange -= 12;
        } 
        else if (hourChange === 0) {
            hourChange = 12;
        }
        currentDate = myTime.toLocaleDateString(undefined, options)
        currentTime = `${(hourChange < 10 ? '0' : '')+ hourChange}:${(myTime.getMinutes() < 10 ? '0' : '') + myTime.getMinutes()}:${(myTime.getSeconds() < 10 ? '0' : '') + myTime.getSeconds()} ${ampm}`
        document.getElementById("time").innerHTML = currentTime
        document.getElementById("date").innerHTML = `on ${currentDate}`
}, 1000)
}

// Greetings

if (hourChange >= 12) {
    document.getElementsByClassName(".greetings").innerHTML = rEve
}
else if (hourChange < 12) {
    document.getElementsByClassName(".greetings").innerHTML = rDay
}

