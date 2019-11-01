require("./js/name-input.js");

function prevStep() {
  id("previous-btn").disabled = true;
  id("step-one").style.display = "";
  id("step-two").style.display = "none";
  id("next-btn").innerText = "Next";
  let step = id("next-btn").getAttribute("data-step");
  return id("next-btn").setAttribute("data-step", --step);
}

function nextStep() {
  let step = id("next-btn").getAttribute("data-step");
  if (step === "0") {
    id("previous-btn").disabled = false;
    id("step-one").style.display = "none";
    id("step-two").style.display = "";
    id("next-btn").innerText = "Create";
    return id("next-btn").setAttribute("data-step", ++step);
  } else {
    // submit form
  }
}

function updateMemoryValue() {
  return (id("memory-value").innerText = id("memory-input").value);
}

function toggleDefaults() {
  return id("default-checkbox").checked
    ? (id("default-options").style.display = "none")
    : (id("default-options").style.display = "");
}

function updateProcessorValue() {
  return (id("processor-value").innerText = id("processor-input").value);
}

const el = document.createElement("name-input");
el.attr = "omg";
id("root").appendChild(el);

function id(id) {
  return document.getElementById(id);
}
