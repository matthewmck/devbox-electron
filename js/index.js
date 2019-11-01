(function() {
  const { remote } = require("electron");
  const mainProcess = remote.require("./main.js");

  const addButton = document.getElementById("add-vm");
  addButton.addEventListener("click", addVM);

  function addVM() {
    return mainProcess.addVMWindow();
  }
})();
