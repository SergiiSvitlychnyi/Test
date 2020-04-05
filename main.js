// =
function result(){
    try {
        document.getElementById('result').innerHTML = "Результат: " + eval(document.getElementById('number1').value);
    } catch (error) {
        alert("Error in expression: " + error.message);
    }
}
// + - * / C
function plus(){
    addElement(document.getElementById('plus').innerText);
}
function minus(){
    addElement(document.getElementById('minus').innerText);
}
function multiply(){
    addElement(document.getElementById('multiply').innerText);
}
function divide(){
    addElement(document.getElementById('divide').innerText);
}
function clearElements(){
    document.getElementById('number1').value = "";
    document.getElementById('result').innerHTML = "Результат: 0";
}
// ( )
function bracket1() {
    addElement(document.getElementById('bracket1').innerText);
}
function bracket2() {
    addElement(document.getElementById('bracket2').innerText);
}
// Undo Redo
let curVal="";
let preVal="";
function undo(){
    curVal = document.getElementById('number1').value;
    preVal = curVal.slice(0, curVal.length - 1);
    document.getElementById('number1').value = preVal;
}
function redo(){
    document.getElementById('number1').value = curVal;
    preVal = curVal.slice(0, curVal.length - 1);
}
// concatination
function addElement(element) {
    curVal = document.getElementById('number1').value;
    console.log("curVal ", curVal);
    if (curVal == "") {
        document.getElementById('number1').value += element;
        console.log("element1 ", element);
    } else {
        lastElement = curVal.slice(curVal.length - 1);
        console.log("element2 ", element);
        console.log("lastElement ", lastElement);
        if ((lastElement == element) && (element == '+' || element == '-' || element == '*' || element == '/')) {
            console.log("element ", element);
        } else {
            if ((lastElement == '+' || lastElement == '-' || lastElement == '*' || lastElement == '/') && (element == '+' || element == '-' || element == '*' || element == '/')) {
                console.log("lastElement3 ", lastElement);
                console.log("element3 ", element);
                newVal = curVal.slice(0, curVal.length - 1);
                console.log("newVal3 ", newVal);
                document.getElementById('number1').value = newVal + element;
            } else{
                console.log("lastElement4 ", lastElement);
                console.log("element4 ", element);
                document.getElementById('number1').value += element;
            }
        }
    }
}
// 0 - 9
function getElement0() {
    addElement(document.getElementById('click0').innerText);
}
function getElement1() {
    addElement(document.getElementById('click1').innerText);
}
function getElement2() {
    addElement(document.getElementById('click2').innerText);
}
function getElement3() {
    addElement(document.getElementById('click3').innerText);
}
function getElement4() {
    addElement(document.getElementById('click4').innerText);
}
function getElement5() {
    addElement(document.getElementById('click5').innerText);
}
function getElement6() {
    addElement(document.getElementById('click6').innerText);
}
function getElement7() {
    addElement(document.getElementById('click7').innerText);
}
function getElement8() {
    addElement(document.getElementById('click8').innerText);
}
function getElement9() {
    addElement(document.getElementById('click9').innerText);
}
