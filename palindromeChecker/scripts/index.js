const input = document.getElementById("input");

function check() {
    const value = input.value
    alert(value)
}

function reverseString (str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    const reverse = reverseString(value);

    if (value === reverse) {
        alert("PALINDROME");
    } else {
        alert("Not today!");
    }

    input.value = ""
} 