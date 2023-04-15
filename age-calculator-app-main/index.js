var inputOne = document.getElementById("text1");
var inputTwo = document.getElementById("text2");
var inputThree = document.getElementById("text3");
var year = document.getElementById("years");
var month = document.getElementById("months");
var day = document.getElementById("days");
var errorOne = document.getElementById("error1");
var errorTwo = document.getElementById("error2");
var errorThree = document.getElementById("error3");
var oneEl = document.getElementById("one");
var twoEl = document.getElementById("two");
var threeEl = document.getElementById("three");

function submit() {
  if (
    inputOne.value === "" ||
    inputTwo.value === "" ||
    inputThree.value === ""
  ) {
    errorOne.textContent = "This field Is required";
    errorTwo.textContent = "This field Is required";
    errorThree.textContent = "This field Is required";
    inputOne.style.border = "1px solid red";
    inputTwo.style.border = "1px solid red";
    inputThree.style.border = "1px solid red";
    oneEl.style.color = "red";
    twoEl.style.color = "red";
    threeEl.style.color = "red";
  } else if (
    !(inputOne.value === "" || inputTwo.value === "" || inputThree.value === "")
  ) {
    year.innerHTML = inputOne.value;
    month.innerHTML = inputTwo.value;
    day.innerHTML = inputThree.value;
    // console.log("log");
    errorOne.textContent = "";
    errorTwo.textContent = "";
    errorThree.textContent = "";
    inputOne.style.border = "1px solid grey";
    inputTwo.style.border = "1px solid grey";
    inputThree.style.border = "1px solid grey";
    oneEl.style.color = "";
    twoEl.style.color = "";
    threeEl.style.color = "";
  }
  // else {
  // year.innerHTML = inputOne.value;
  // month.innerHTML = inputTwo.value;
  // day.innerHTML = inputThree.value;
  // console.log("log");
  // }
}
