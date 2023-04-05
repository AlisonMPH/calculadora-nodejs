// Funções para operações matemáticas
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "Erro! Divisão por zero.";
    } else {
      return a / b;
    }
  }
  
  // Função que retorna o resultado da operação selecionada
  function operate(operator, a, b) {
    switch (operator) {
      case "+":
        return add(a, b);
        break;
      case "-":
        return subtract(a, b);
        break;
      case "*":
        return multiply(a, b);
        break;
      case "/":
        return divide(a, b);
        break;
      default:
        return "Erro! Operação inválida.";
    }
  }
  
  // Seleciona todos os botões da calculadora
  const buttons = document.querySelectorAll(".button");
  
  // Loop que adiciona um event listener para cada botão da calculadora
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("number")) {
        if (display.textContent === "0" || display.textContent === "Erro!") {
          display.textContent = button.textContent;
        } else {
          display.textContent += button.textContent;
        }
      } else if (button.classList.contains("operator")) {
        if (operator === "") {
          a = parseFloat(display.textContent);
          operator = button.textContent;
          display.textContent = "0";
        } else {
          b = parseFloat(display.textContent);
          a = operate(operator, a, b);
          operator = button.textContent;
          display.textContent = "0";
        }
      } else if (button.classList.contains("equals")) {
        if (operator !== "") {
          b = parseFloat(display.textContent);
          a = operate(operator, a, b);
          operator = "";
          display.textContent = a;
        }
      } else if (button.classList.contains("clear")) {
        a = 0;
        b = 0;
        operator = "";
        display.textContent = "0";
      }
    });
  });
  
  // Seleciona o display da calculadora
  const display = document.querySelector("#display");
  
  // Variáveis que armazenam o primeiro número, o segundo número e o operador selecionado
  let a = 0;
  let b = 0;
  let operator = "";
  