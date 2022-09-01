document.getElementById("inp1").focus();

function insert_numbers(number) {
    document.getElementById("inp1").value += number;
}
function equal_op() {
    document.getElementById("inp1").value += "";
    document.getElementById("inp1").value = evil(document.getElementById("inp1").value);
}
$(document).on("keypress", function (e) {
    if (e.key == "Enter") {
        document.getElementById("inp1").value += "";
        document.getElementById("inp1").value = evil(document.getElementById("inp1").value);
    }    
});
$(document).on("keypress", function () {

     document.getElementById("inp1").focus();
      
});

function plus_op() {
    document.getElementById("inp1").value += "+";
}

function minus_op() {
    document.getElementById("inp1").value += "-";
}

function multiply_op() {
    document.getElementById("inp1").value += "*";
}

function divide_op() {
    document.getElementById("inp1").value += "/";
}
function delete_op() {
    let str = document.getElementById("inp1").value;
    str = str.slice(0, -1);
    document.getElementById("inp1").value = str;
}
function C_op() {
    let str = document.getElementById("inp1").value;
    document.getElementById("inp1").value = '';
}
function dot_op() {
    document.getElementById("inp1").value += ".";
}
function l_pha_op() {
    document.getElementById("inp1").value += "(";
}
function r_pha_op() {
    document.getElementById("inp1").value += ")";
}


function evil(fn) {

    if(fn == '0/0')
        return 'zort';

    return new Function('return ' + fn)();
}


