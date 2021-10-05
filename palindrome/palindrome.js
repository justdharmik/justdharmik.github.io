
const textip = document.querySelector("input")

function check() {
    if (textip.value == ''){
        document.getElementById("print").innerHTML = `<br>Please check your input.`
    }
    else {
        const text = textip.value.toLocaleLowerCase()
        const nospace = text.replace(/ /g, "")
        const tlist = text.split("")
        const rev = tlist.reverse()
        const revtext = rev.join("")
        const extras = `<br>Words: ${text.split(" ").length} | Letters: ${nospace.length}`
        const yes = `${text}  =  ${revtext}<br>It is a Palindrome! ${extras}`
        const no = `${text}  !=  ${revtext}<br>It is not a Palindrome! ${extras}`
        if (text == revtext){
            document.getElementById("print").innerHTML = yes
            console.log("It is a palindrome")    
            document.querySelector("input").value = ''    
        }
        else {
            document.getElementById("print").innerHTML = no
            console.log("It is not a palindrome")
            document.querySelector("input").value = ''
        }
    }
}
