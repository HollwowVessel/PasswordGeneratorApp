const password = document.querySelector(".pass")
const lengthOfPassword = document.querySelector(".pass__desc")
const range = document.querySelector(".range__inp")
const symbolNum = document.getElementById("num")
const symbolReg = document.getElementById("reg")
const symbolSpec = document.getElementById("spec")
const plusBtn = document.querySelector(".plus")
const minusBtn = document.querySelector(".minus")
const getClipboard = document.querySelector(".get_clip")
const popup = document.getElementById("myPopup")
const arrLow = "abcdefghijklmnopqrstuvwxyz".split("")
const arrBig = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const arrNum = "1234567890".split("")
const arrSpec = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")

function generatePassword(stateNum, stateReg, stateSpec){ 
    let stateArr = arrLow.concat()
    let res = stateArr[Math.ceil(Math.random() * 25)]
    if(stateSpec && stateReg && stateNum){
        stateArr = stateArr.concat(arrBig).concat(arrSpec).concat(arrNum)
    }
    else if(stateNum && stateReg){
        stateArr = stateArr.concat(arrBig).concat(arrNum)
    }
    else if(stateNum && stateReg){
        stateArr = stateArr.concat(arrBig).concat(arrNum)
    }
    else if(stateNum && stateSpec){
        stateArr = stateArr.concat(arrNum).concat(arrSpec)
    }
    else if(stateReg && stateSpec){
        stateArr = stateArr.concat(arrBig).concat(arrSpec)
    }
    else if(stateSpec){
        stateArr = stateArr.concat(arrSpec)
    }
    else if(stateNum){
        stateArr = stateArr.concat(arrNum)
    }
    else if(stateReg){
        stateArr = stateArr.concat(arrBig)
    }
    while(res.length < range.value){
        let rnd = Math.ceil(Math.random() * (stateArr.length - 1))
        res += stateArr[rnd]
    }
    return res
}

function writePassword(){
    const stateNum = symbolNum.checked
    const stateReg = symbolReg.checked
    const stateSpec = symbolSpec.checked
    console.log()
    password.value = generatePassword(stateNum, stateReg, stateSpec)
}

function changeValue(){
    lengthOfPassword.textContent = range.value < 10 ? `Password length: 0${range.value}` : `Password length: ${range.value}`
    writePassword()
}

function plusValue(){
    if(range.value >= 16) return;
    range.value++;
    changeValue()
}

function minusValue(){
    if(range.value <= 1) return;
    range.value--;
    changeValue()
}

function getClip(){
    password.select();
    password.setSelectionRange(0, 99999);
    popup.classList.toggle("show");
    setTimeout(()=>popup.classList.remove("show"), 2000)
    navigator.clipboard.writeText(password.value)
}

changeValue()
range.addEventListener("change", changeValue)
range.addEventListener("input", changeValue)
symbolNum.addEventListener("change", changeValue)
symbolReg.addEventListener("change", changeValue)
symbolSpec.addEventListener("change", changeValue)
plusBtn.addEventListener("click", plusValue)
minusBtn.addEventListener("click", minusValue)
getClipboard.addEventListener("click", getClip)
