document.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector(".input");
    var buttons = document.querySelectorAll(".button");
  
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        handleButtonClick(button.textContent);
      });
    });
    function handleButtonClick(value) {
      switch (value) {
        case "C":
          input.value = "";
          break;
        case "=":
          try {
            input.value = eval(input.value);
          } catch (error) {
            input.value = "Error";
          }
          break;
        case "←":
          input.value = input.value.slice(0, -1);
          break;
        default:
          input.value += value;
          break;
      }
    }
  });
  
  
  